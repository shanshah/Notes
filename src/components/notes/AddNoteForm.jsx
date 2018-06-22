import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AddNoteForm = props => (
  <Form>
    <Form.Field>
      <label htmlFor="note-title">Title:</label>
      <input
        type="text"
        onChange={(e) => { props.handleTitle(e.target.value); }}
        // onBlur={(e) => { this.validateUserName(e.target.value); }}
      />
    </Form.Field>
    <Form.Field>
      <label htmlFor="note-description">Body:</label>
      <textarea
        rows="20"
        onChange={(e) => { props.handleDescription(e.target.value); }}
        // onBlur={(e) => { this.validateUserName(e.target.value); }}
      />
    </Form.Field>
    <Button floated="right" onClick={() => { props.handleSaveClick(); }} color="linkedin">Save</Button>
  </Form>
);

AddNoteForm.propTypes = {
  handleTitle: PropTypes.func.isRequired,
  handleDescription: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
};

export default AddNoteForm;
