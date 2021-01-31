// Run against prod API
const NOTES_API = "https://typed-thoughts.herokuapp.com/"
// Local Development
// const NOTES_API = 'http://localhost:9001/'

// TODO -> Get valid tags from Rust so that we can't submit invalid tags,
// or maybe just share the representation? 
class Tag {
    constructor(name, canHaveValue) {
	this.title = name;
	this.canHaveValue = canHaveValue;
	this.value = null;
    }

    setValue(value) {
	if(!this.canHaveValue) {
	    console.error("Attempting to set value for tag that can't have value");
	} else {
	    this.value = value;
	}
    }
}

const tag_factory = (title, canHaveValue = false) => {
    return new Tag(title, canHaveValue);
}


// Keep in sync with rust types.rs plz
const TAGS = [
    // Medium based tags
    tag_factory("Article"),
    tag_factory("Book"),
    tag_factory("Movie"),
    tag_factory("Music"),
    tag_factory("Series"),
    tag_factory("Podcast"),
    tag_factory("Recipe"),
    tag_factory("Restaurant"),
    tag_factory("Adventure"),
    tag_factory("VideoGame"),
    tag_factory("BoardGame"),
    // Genre Based tags
    tag_factory("Career"),
    tag_factory("Entertainment"),
    tag_factory("Productivity"),
    // Topic based tags
    tag_factory("ArtificialIntelligence"),
    tag_factory("EffectiveAltruism"),
    tag_factory("SocialJustice"),
    tag_factory("Environmental"),
    // Meta based tags
    tag_factory("RecommendedBy", true),
    tag_factory("RemindsMeOf", true),
    tag_factory("Origin", true),

];

const get_tags = async () => {
    return TAGS;
}

const get_notes = (owner) => {
    return fetch(NOTES_API + "notes/brendon").then(response => {
	return response.json().then(data => {
	    let notes = [];
	    for (const value of Object.values(data.notes)) {
		value.tags = value.tags.map(convert_tags_from_rust);
		notes.push(value);
	    }
	    notes.sort((a,b) => {
		if (a.last_update_time <  b.last_update_time) {
		    return 1;
		}
		return -1;
	    });
	    return notes
	})
    });
}

const archive_note = async(note_id) => {
    return fetch(NOTES_API + "notes/archive/" + String(note_id), {
	method: "PUT",
    });
}

const create_note = async (create_note_request) => {
    create_note_request.tags = create_note_request.tags.map(convert_tags_to_rust);
    return fetch(NOTES_API + "notes", {
	method: "POST",
	headers: {
	    'Content-Type': 'application/json'
	},
	body: JSON.stringify(create_note_request)
    });
}

const update_note = async (update_note_request) => {
    update_note_request.tags = update_note_request.tags.map(convert_tags_to_rust);
    return fetch(NOTES_API + "note/" + update_note_request.note_id, {
	method: "PUT",
	headers: {
	    'Content-Type': 'application/json'
	},
	body: JSON.stringify(update_note_request)
    });
}

const check_tag_equality = (tag1, tag2) => {
    if (tag1.canHaveValue && tag2.canHaveValue && tag1.value && tag2.value) {
	return tag1.value.toLowerCase() === tag2.value.toLowerCase() && tag1.title === tag2.title
    } else {
	return tag1.title === tag2.title;
    }
}

const convert_tags_to_rust = (tag) => {
    if (tag.canHaveValue) {
	return {[tag.title]: tag.value.toLowerCase()}
    } else {
	return tag.title;
    }
}

const convert_tags_from_rust = (tag) => {
    if (typeof(tag) === "string") {
	return tag_factory(tag);
    } else if (typeof(tag) === "object"){
	// TODO: validate tag name and form cuz this is jank
	const tag_name = Object.keys(tag)[0];
	const tag_value = tag[tag_name];
	let converted = tag_factory(tag_name, true);
	converted.setValue(tag_value);
	return converted;
    }
    else {
	console.error("Unknown tag variant:", tag);
	return tag;
    }
}

const notes_api = {
    get_tags: get_tags,
    create_note: create_note,
    update_note: update_note,
    get_notes: get_notes,
    archive_note: archive_note,
}

export {
    TAGS, check_tag_equality, notes_api
};



