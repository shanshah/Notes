import { NoteActionTypes } from '../../actions/notes/NoteActions';
// import { validateNoteTitle, validateNoteDescrption } from '../../scripts/LoginFormValidation';

const initialState = {
  addNoteFormValidation: {
    title: { isValid: false, errMessage: [] },
    description: { isValid: false, errMessage: [] },
  },
  noteToEdit: {
    id: '',
    title: '',
    description: '',
  },
  noteList: [],
  noteData: {
    title: '',
    description: '',
  },
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NoteActionTypes.SET_TITLE:
      return {
        ...state,
        noteData: { ...state.noteData, title: action.payload },
        // addNoteFormValidation: {
        //   ...state.addNoteFormValidation,
        //   title: {
        //     ...validateNoteTitle({ ...state.addNoteFormValidation, title: action.payload }),
        //   },
        // },
      };
    case NoteActionTypes.SET_NOTE_LIST:
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    case NoteActionTypes.SET_EDITED_TITLE:
      return {
        ...state,
        noteToEdit: { ...state.noteToEdit, title: action.payload },
      // addNoteFormValidation: {
      //   ...state.addNoteFormValidation,
      //   title: {
      //     ...validateNoteTitle({ ...state.addNoteFormValidation, title: action.payload }),
      //   },
      // },
      };
    case NoteActionTypes.SET_EDITED_DESCRIPTION:
      return {
        ...state,
        noteToEdit: { ...state.noteToEdit, description: action.payload },
        // addNoteFormValidation: {
        //   ...state.addNoteFormValidation,
        //   title: {
        //     ...validateNoteTitle({ ...state.addNoteFormValidation, title: action.payload }),
        //   },
        // },
      };
    case NoteActionTypes.SET_NOTE_TO_EDIT:
      return {
        ...state,
        noteToEdit: {
          ...state.noteToEdit,
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
        },
      };
    case NoteActionTypes.UPDATE_NOTE:
      const notes = state.noteList;
      const updatedNote = {};
      const stateAfterUpdate = notes.map((note) => {
        if (note.id === action.payload.id) {
          updatedNote.id = action.payload.id;
          updatedNote.title = action.payload.title;
          updatedNote.description = action.payload.description;
          return updatedNote;
        }
        return note;
      });
      return {
        ...state,
        noteList: [...stateAfterUpdate],
      };
    case NoteActionTypes.SET_DESCRIPTION:
      return {
        ...state,
        noteData: { ...state.noteData, description: action.payload },
        // addNoteFormValidation: {
        //   ...state.addNoteFormValidation,
        //   description: {
        //     ...validateNoteDescrption({
        //       ...state.addNoteFormValidation, description: action.payload,
        //     }),
        //   },
        // },
      };
    case NoteActionTypes.DELETE_NOTE:
      const noteList = state.noteList;
      const stateAfterDelete = noteList.filter(note => note.id !== action.payload);
      return {
        ...state,
        noteList: [...stateAfterDelete],
      };
    // case LoginActionTypes.VALIDATE_USER_NAME:
    //   return {
    //     ...state,
    //     addNoteFormValidation: {
    //   ...state.addNoteFormValidation,
    //       username: { ...validateUserName({
    // ...state.addNoteFormValidation, username: action.payload ,
    // }) }
    //   }
    // };
    // case LoginActionTypes.VALIDATE_PASSWORD:
    //   return {
    //     ...state,
    //     addNoteFormValidation: {
    //   ...state.addNoteFormValidation,
    //       password: { ...validatePassword({
    // ...state.addNoteFormValidation, password: action.payload,
    // }) }
    //   }
    // };
    default:
      return state;
  }
};

export default notesReducer;