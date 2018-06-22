import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import ErrorMessage from '../../components/common/ErrorMessage';
import AddNoteForm from '../../components/notes/AddNoteForm';
import EditNoteModal from '../../components/notes/EditNoteModal';
import NoteList from '../../components/notes/NoteList';
import '../../stylesheets/components/Notes.css';
import { NoteActions } from '../../actions/notes/NoteActions';

@connect(store => ({ note: store.notesReducer }))
class Notes extends Component {
  state = {
    isEditModalOpen: false,
    isAddNoteFormOpen: false,
  };
  // isValidField = (errorMessageLength) => {
  //   if (errorMessageLength > 0) {
  //     return true;
  //   }
  //   return false;
  // };
  handleTitle = (title) => {
    this.props.dispatch(NoteActions.setTitle(title));
  };
  handleDescription = (description) => {
    this.props.dispatch(NoteActions.setDescription(description));
  };
  // validateUserName = (userName) => {
  //   this.props.dispatch(LoginActions.validateUserName(userName));
  // };
  // validatePassword = (password) => {
  //   this.props.dispatch(LoginActions.validatePassword(password));
  // };
  // isLoginButtonDisabled = () => {
  //   if (this.props.login.loginFormValidation.username.isValid &&
  //     this.props.login.loginFormValidation.password.isValid) {
  //     return false;
  //   }
  //   return true;
  // };
  generateRandomId = () =>
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  handleSaveClick = () => {
    const noteId = this.generateRandomId();
    const newNote = this.props.note.noteData;
    newNote.id = noteId;
    this.props.dispatch(NoteActions.setNoteList(this.props.note.noteData));
    this.setState({
      isAddNoteFormOpen: false,
    });
  };
  handleEditNote = (noteToBeEdited) => {
    this.props.dispatch(NoteActions.setNoteToEdit(noteToBeEdited));
    this.setState({
      isEditModalOpen: true,
    });
  };
  handleEditedTitle = (editedTitle) => {
    this.props.dispatch(NoteActions.setEditedTitle(editedTitle));
  };
  handleEditedDescription = (editedDescription) => {
    this.props.dispatch(NoteActions.setEditedDescription(editedDescription));
  };
  handleUpdateNote = (noteToUpdate) => {
    this.props.dispatch(NoteActions.updateNote(noteToUpdate));
    this.setState({
      isEditModalOpen: false,
    });
  };
  handleAddNoteClick =() => {
    this.setState({
      isAddNoteFormOpen: true,
    });
  };
  handleDeleteNote = (e, noteId) => {
    e.stopPropagation();
    this.props.dispatch(NoteActions.deleteNote(noteId));
  };
  render() {
    return (
      <div className="login-form__container">
        <div className="page-header">
          <h3>G Notes</h3>
        </div>
        <div className="notes-wrapper">
          <div className="note-list-container">
            <NoteList
              noteList={this.props.note.noteList}
              handleEditNote={this.handleEditNote}
              handleDeleteNote={this.handleDeleteNote}
            />
          </div>
          <div className="add-note-button-container">
            <div>
              <Button
                floated="right"
                basic color="black"
                onClick={() => { this.handleAddNoteClick(); }}
              >
                <Icon name="add" />Add Note
              </Button>
            </div>
            <div>
              { this.state.isAddNoteFormOpen &&
                <AddNoteForm
                  handleTitle={this.handleTitle}
                  handleDescription={this.handleDescription}
                  handleSaveClick={this.handleSaveClick}
                />
              }
            </div>
          </div>
          <EditNoteModal
            isEditModalOpen={this.state.isEditModalOpen}
            handleEditedTitle={this.handleEditedTitle}
            handleEditedDescription={this.handleEditedDescription}
            handleUpdateNote={this.handleUpdateNote}
            noteToEdit={this.props.note.noteToEdit}
          />
        </div>
      </div>
    );
  }
}

export default Notes;

