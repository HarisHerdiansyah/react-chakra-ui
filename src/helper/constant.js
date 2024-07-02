export const VIEWS = {
  FORM: 'form',
  LIST: 'list'
};

export const ACTIONS = {
  ADD_BOOK: 'add_book',
  UPDATE_BOOK: 'update_book',
  DELETE_BOOK: 'delete_book',
  CHANGE_VIEW: 'change_view',
  EDIT_BOOK: 'edit_book',
  MARK_BOOK_DONE: 'mark_book_done'
};

export const initialState = {
  currentView: VIEWS.LIST,
  isUpdate: false,
  books: [],
  selectedBook: {
    id: '',
    bookTitle: '',
    writer: '',
    yearPublished: '',
    isDone: false
  }
};
