import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const NoteList = (props) => {
  const { noteList } = props;
  return (
    <List divided verticalAlign="middle">
      { noteList.map(note => (
        <List.Item
          key={note.id}
          onClick={() => { props.handleEditNote(note); }}
          className="note-list-item"
        >
          <List.Content floated="right">
            <Icon
              name="close"
              onClick={(e) => { props.handleDeleteNote(e, note.id); }}
            />
          </List.Content>
          <List.Content>
            <h4 className="note-title">{ note.title }</h4>
            <p>{ note.description }</p>
          </List.Content>
        </List.Item>
      )) }
    </List>
  );
};

NoteList.propTypes = {
  noteList: PropTypes.array.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default NoteList;
