import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListIcon from '@material-ui/icons/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const NOTES_API = 'http://localhost:9001/'
const lists = [];

const styles = theme => ({
  fullHeight: {
    ...theme.mixins.toolbar,
  },
    text: {
    padding: theme.spacing(2, 2, 0),
    },
  addButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: '10%',
    right: "5%",
    margin: '0 auto',
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
});

class App extends React.Component {
    render () {
	const theme = createMuiTheme({
	     palette: {
		 primary: {
		     light: '#757ce8',
		     main: '#000000',
		     dark: '#002884',
		     contrastText: '#fff',
		 },
		 secondary: {
		     light: '#ff7961',
		     main: '#f44336',
		     dark: '#ba000d',
		     contrastText: '#000',
		 },
		 background: {
		     paper: '#efefef',
		     default: "#fff",
		 }
	     },
	});
	return (<React.Fragment>
	    <CssBaseline />
	    <ThemeProvider theme={theme}>
	    <StyledNotesPanel />
	    <StyledBottomAppBar />
	    </ThemeProvider>
	</React.Fragment>);
    }
}


class NotesPanel extends React.Component {
    // Note we are looking at, and whether we are looking at it
    constructor(props) {
	super(props);
	// Chose to unpack note to simplify set_state
	this.state = {
	    open: false,
	    active_uuid: "",
	    title: "",
	    description:"",
	    owner: "brendon",
	    origin: "",
	    tags: [],
	    notes: []
	    
	}
	this.handleNoteEdit = this.handleNoteEdit.bind(this);
	this.handleOpen = this.handleOpen.bind(this);
	this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
	this.loadNotes();
    }

    loadNotes() {
	fetch(NOTES_API + "notes/brendon").then(response => {
	    response.json().then(data => {
		let notes = [];
		for (const [key, value] of Object.entries(data.notes)) {
		    notes.push(value);
		}
		notes.sort((a,b) => {
		    if (a.last_update_time <  b.last_update_time) {
			return 1;
		    }
		    return -1;
		});
		this.setState({
		    notes: notes
		});
	    })
	}).catch(console.log)
    }

    handleOpen = (active_note) => {
	this.setState(
	    {
		open: true,
		active_uuid: active_note.uuid,
		title: active_note.title,
		description: active_note.description,
		origin: active_note.origin || "",
		tags: active_note.tags,
	});
    }

    handleCreate = () => {
	this.setState(
	    {
		open: true,
		active_uuid: null,
		title: "",
		description: "",
		origin: "",
		tags: []
	});
    }

    handleNoteEdit(evt) {
	this.setState({
	    [evt.target.name]: evt.target.value
	});
    }

    handleSave() {
	// If we are editing a note
	if(this.state.active_uuid) {
	    let note_update_request = {
		note_id: this.state.active_uuid,
		title: this.state.title,
		description: this.state.description,
		origin: this.state.origin,
		tags: this.state.tags,
	    };
	    fetch(NOTES_API + "note/" + this.state.active_uuid, {
		method: "PUT",
		headers: {
		    'Content-Type': 'application/json'
		},
		body: JSON.stringify(note_update_request)
	    }).then(response => {
		// Once we've successfully saved, log the response, and reload the notes on the page
		this.loadNotes();
	    }).catch(console.error);
	    
	} else {
	    let note_create_request = {
		title: this.state.title,
		description: this.state.description,
		owner:this.state.owner,
		origin: this.state.origin,
		tags: this.state.tags,
	    };
	    fetch(NOTES_API + "notes", {
		method: "POST",
		headers: {
		    'Content-Type': 'application/json'
		},
		body: JSON.stringify(note_create_request)
	    }).then(response => {
		this.loadNotes();

		// Force close after create
		this.handleClose();
	    }).catch(console.error);
	}
    }

    handleClose = () => {
	this.setState({open: false, active_note: null});
    }

    render() {
	const { classes } = this.props;
	return (
	    <Paper square className={classes.paper}>
	    {this.state.open &&
	     <NoteDialog
		handleClose={this.handleClose}
		handleChange={this.handleNoteEdit}
		handleSave={this.handleSave}
		open={this.state.open}
		title={this.state.title}
		description={this.state.description}
		origin={this.state.origin}
		/>}
            <List className={classes.list}>
            {this.state.notes.map((note_data, index) => (
		<>
		<NoteEntry key={`note-entry-${index}`} note_data={note_data} onClick={() => {this.handleOpen(note_data)}} />
		</>)
	    )}
            </List>
	    <Fab color="secondary" aria-label="add" className={classes.addButton}>
	    <IconButton color="inherit" onClick={this.handleCreate}>
            <AddIcon />
	    </IconButton>
            </Fab>
	    </Paper>
	);
    }
}

class ListsPanel extends React.Component {
    render() {
	const { classes } = this.props;
	return (
	    <Paper square className={classes.paper}>
            <Typography className={classes.text} variant="h5" gutterBottom>
	    Lists
            </Typography>
            <List className={classes.list}>
            {lists.map(ListEntry)}
            </List>
	    </Paper>
	);
    }
}


class BottomAppBar extends React.Component {
    state = {currentTab: "notes"}
    changeTab = (event, value) => {
	this.setState({ currentTab: value});
    };

    render () {
	const {classes} = this.props;
	return (
	    <AppBar position="fixed" color="primary" className={classes.appBar}>
	    <Toolbar>
	    <Grid container alignItems="center" justify="space-between">
	    <Grid item>
	    <Tabs
	    value={this.state.currentTab}
	    onChange={this.changeTab}
	    variant="fullWidth"
	    aria-label="tabs"
	    >
	    <Tab classes={{ root: classes.fullHeight }} icon={<NotesIcon />} value="notes" />
	    <Tab classes={{ root: classes.fullHeight }} icon={<ListIcon />} value="lists" />
	    </Tabs>
	    </Grid>
	    <Grid item>
	    <IconButton color="inherit">
	    <SearchIcon />
	    </IconButton>
	    </Grid>
            </Grid>
	    </Toolbar>
	    </AppBar>
	);

    }

}

class NoteDialog extends React.Component {
    render() {
	const {
	    open,
	    handleChange,
	    handleClose,
	    handleSave,
	    title,
	    origin,
	    description,
	} = this.props;
	return (<Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="Note Dialog"
        aria-describedby="Existing Note"
      >
            <DialogTitle>
	    <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
	    value={title}
	    onChange={handleChange}
            />
	    </DialogTitle>
            <DialogContent dividers={true}>
	    <TextField
            margin="dense"
            name="description"
            type="text"
	    multiline
	    rows={8}
	    value={description}
	    onChange={handleChange}
            fullWidth
            />
	    <TextField
            margin="dense"
            name="origin"
            label="Origin"
            type="text"
            fullWidth
	    value={origin}
	    onChange={handleChange}
            />
	    <TagField />

        </DialogContent>
            <DialogActions>
          <Button onClick={handleSave} color="primary">
	    Save
          </Button>
          <Button onClick={handleClose} color="primary">
	    Close
          </Button>
        </DialogActions>
	</Dialog>);
    }
}

class TagField extends React.Component {
    render() {
	return(<TextField
            margin="dense"
            name="tags"
            label="Tags"
            type="text"
            fullWidth
	/>)
	
    }
}

    

class NoteEntry extends React.Component {
    render() {
	const {note_data, onClick} = this.props;
	const last_update_human = new Date(Number(note_data.last_update_time) * 1000).toLocaleString();
	return (<ListItem divider button onClick={onClick}>
	    <ListItemText primary={note_data.title} secondary={last_update_human} />
	    </ListItem>);
    }
}

const ListEntry = (list_data) =>
    (<React.Fragment key={list_data.id}>
	<ListItem button>
	<ListItemText primary={list_data.title} secondary={list_data.description}/>
	</ListItem>
	</React.Fragment>);

const StyledBottomAppBar = withStyles(styles)(BottomAppBar);
const StyledNotesPanel = withStyles(styles)(NotesPanel);
const StyledListsPanel = withStyles(styles)(ListsPanel);

export default withStyles(styles)(App);
