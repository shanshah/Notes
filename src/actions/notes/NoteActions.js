const NoteActionTypes = {
  SET_TITLE: 'Note/SET_TITLE',
  SET_DESCRIPTION: 'Note/SET_DESCRIPTION',
  SET_NOTE_LIST: 'Note/SET_NOTE_LIST',
  DELETE_NOTE: 'Note/DELETE_NOTE',
  SET_NOTE_TO_EDIT: 'Note/SET_NOTE_TO_EDIT',
  SET_EDITED_TITLE: 'Note/SET_EDITED_TITLE',
  SET_EDITED_DESCRIPTION: 'Note/SET_EDITED_DESCRIPTION',
  UPDATE_NOTE: 'Note/UPDATE_NOTE',
  VALIDATE_TITLE: 'Note/VALIDATE_TITLE',
  VALIDATE_DESCRIPTION: 'Note/VALIDATE_DESCRIPTION',
};

const NoteActions = {
  setTitle: payload => ({ type: NoteActionTypes.SET_TITLE, payload }),
  setDescription: payload => ({ type: NoteActionTypes.SET_DESCRIPTION, payload }),
  validateTitle: payload => ({ type: NoteActionTypes.VALIDATE_TITLE, payload }),
  validateDescription: payload => ({ type: NoteActionTypes.VALIDATE_DESCRIPTION, payload }),
  setNoteList: payload => ({ type: NoteActionTypes.SET_NOTE_LIST, payload }),
  setNoteToEdit: payload => ({ type: NoteActionTypes.SET_NOTE_TO_EDIT, payload }),
  setEditedTitle: payload => ({ type: NoteActionTypes.SET_EDITED_TITLE, payload }),
  setEditedDescription: payload => ({ type: NoteActionTypes.SET_EDITED_DESCRIPTION, payload }),
  updateNote: payload => ({ type: NoteActionTypes.UPDATE_NOTE, payload }),
  deleteNote: payload => ({ type: NoteActionTypes.DELETE_NOTE, payload }),
};

export {
  NoteActionTypes,
  NoteActions,
};
