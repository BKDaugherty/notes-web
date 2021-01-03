// Run against prod API
// const NOTES_API = "https://typed-thoughts.herokuapp.com/"
// Local Development
const NOTES_API = 'http://localhost:9001/'

// TODO Algebraic tags
// TODO --> Get these from Rust
const TAGS = [
    {"title": "Article"},
    {"title": "Book"},
    {"title": "Movie"},
    {"title": "Career"},
    {"title": "Entertainment"},
    {"title": "Productivity"},
    {"title": "ArtificialIntelligence"},
    {"title": "EffectiveAltruism"},
    {"title": "SocialJustice"},
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
    return tag1['title'] === tag2['title'];
}

const convert_tags_to_rust = (tag) => {
    return tag["title"];
}

const convert_tags_from_rust = (tag) => {
    if (typeof(tag) == "string") {
	return {"title": tag};
    } else {
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



