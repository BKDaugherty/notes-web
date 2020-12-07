import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const gen_fake_note = (id, title, description) => ({
    "id": id,
    "uuid": "01bc6ce1-665c-49ad-a664-07aab25003df",
    "title": title,
    "description": description,
    "origin": "Heard it when it first dropped!",
    "tags": new Set(),
    "create_time": "April Shcinty Sixth",
    "owner": "brendon",
    "last_update_time": "Yesterday",
});

const styles = theme => ({
  fullHeight: {
    ...theme.mixins.toolbar,
  },
    text: {
    padding: theme.spacing(2, 2, 0),
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

const notes = [
    gen_fake_note(0, "My first Car", "Was a subaru"),
    gen_fake_note(1, "Superintelligence", "Book, I'd like to read it"),
    gen_fake_note(2, "The Slow Rush", "An album I'd like to listen to"),
    gen_fake_note(3, "Vulfpeccc", "What a dope band"),
    gen_fake_note(4, "Typed Notes", "An application I'd like to develop"),
    gen_fake_note(5, "My first Car", "Was a subaru"),
    gen_fake_note(6, "Superintelligence", "Book, I'd like to read it"),
    gen_fake_note(7, "The Slow Rush", "An album I'd like to listen to"),
    gen_fake_note(8, "Vulfpeccc", "What a dope band"),
    gen_fake_note(9, "Typed Notes", "An application I'd like to develop"),

];

const lists = [];

class App extends React.Component {
    render () {
	return (<React.Fragment>
	<CssBaseline />
	    <StyledNotesPanel />
	<StyledBottomAppBar />
	</React.Fragment>);
    }
}


class NotesPanel extends React.Component {
    // Note we are looking at, and whether we are looking at it
    state = {open: false, active_note: null};

    handleOpen = (active_note) => {
	this.setState({open: true, active_note: active_note});
    }

    handleClose = () => {
	this.setState({open: false});
    }
    
    render() {
	const { classes } = this.props;
	return (
	    <Paper square className={classes.paper}>
	    {this.state.active_note != null && <NoteDialog handleClose={this.handleClose} open={this.state.open} note_data={this.state.active_note} />}
            <Typography className={classes.text} variant="h5" gutterBottom>
	    Notes
            </Typography>
            <List className={classes.list}>
            {notes.map((note_data, index) => 
		<NoteEntry key={`note-entry-${index}`} note_data={note_data} onClick={() => {this.handleOpen(note_data)}} />
	    )}
            </List>
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
	    <IconButton color="inherit">
	    <AddIcon />
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
	const {open, handleClose, note_data} = this.props;
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
            id="title"
            label="Title"
            type="text"
            fullWidth
            />
	    </DialogTitle>
            <DialogContent dividers={true}>
	    <TextField
            margin="dense"
            id="origin"
            label="Origin"
            type="text"
            fullWidth
            />
	    <TextField
            margin="dense"
            id="description"
            label="Body"
            type="text"
            fullWidth
            />
	    <DialogContentText>

	    {note_data.origin}
	    </DialogContentText>
	    <DialogContentText>
	    {note_data.description}
	    </DialogContentText>
        </DialogContent>
            <DialogActions>
          <Button onClick={handleClose} color="primary">
	    Edit
          </Button>
          <Button onClick={handleClose} color="primary">
	    Close
          </Button>
        </DialogActions>
	</Dialog>);
    }
}

    

class NoteEntry extends React.Component {
    render() {
	const {note_data, onClick} = this.props;
	return (<ListItem button onClick={onClick}>
	    <ListItemText primary={note_data.title} secondary={note_data.description} />
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
