import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const EditNoteModal = (props) => {
  const { noteToEdit, isEditModalOpen } = props;
  return (
    <Modal size="small" open={isEditModalOpen}>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label htmlFor="note-title">Title:</label>
            <input
              type="text"
              value={noteToEdit.title}
              onChange={(e) => { props.handleEditedTitle(e.target.value); }}
              // onBlur={(e) => { this.validateUserName(e.target.value); }}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="note-description">Body:</label>
            <textarea
              value={noteToEdit.description}
              onChange={(e) => { props.handleEditedDescription(e.target.value); }}
              // onBlur={(e) => { this.validateUserName(e.target.value); }}
            />
          </Form.Field>
        </Form>
        <Button
          floated="right"
          onClick={() => { props.handleUpdateNote(noteToEdit); }}
          className="update-button"
          color="linkedin"
        >
          Update
        </Button>
      </Modal.Content>
    </Modal>
  );
};

EditNoteModal.propTypes = {
  handleEditedTitle: PropTypes.func.isRequired,
  handleEditedDescription: PropTypes.func.isRequired,
  handleUpdateNote: PropTypes.func.isRequired,
  isEditModalOpen: PropTypes.bool.isRequired,
  noteToEdit: PropTypes.object.isRequired,
};

export default EditNoteModal;
