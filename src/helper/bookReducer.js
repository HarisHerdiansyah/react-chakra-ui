import { ACTIONS, VIEWS } from './constant';

export default function bookReducer(state, action) {
  if (action.type === ACTIONS.ADD_BOOK) {
    return {
      ...state,
      currentView: VIEWS.LIST,
      isUpdate: false,
      books: [...state.books, action.book]
    };
  }

  if (action.type === ACTIONS.EDIT_BOOK) {
    return {
      ...state,
      currentView: VIEWS.FORM,
      isUpdate: true,
      selectedBook: action.book
    };
  }

  if (action.type === ACTIONS.UPDATE_BOOK) {
    const newBooks = [...state.books];
    const bookIndex = newBooks.findIndex((b) => b.id === action.book.id);
    newBooks[bookIndex] = action.book;
    return {
      ...state,
      currentView: VIEWS.LIST,
      isUpdate: false,
      books: newBooks,
      selectedBook: {
        id: '',
        bookTitle: '',
        writer: '',
        yearPublished: '',
        isDone: false
      }
    };
  }

  if (action.type === ACTIONS.DELETE_BOOK) {
    const newBooks = [...state.books].filter((b) => b.id !== action.bookId);
    return {
      ...state,
      books: newBooks
    };
  }

  if (action.type === ACTIONS.CHANGE_VIEW) {
    return {
      ...state,
      currentView: action.view,
      isUpdate: action.isUpdate,
      selectedBook: {
        id: '',
        bookTitle: '',
        writer: '',
        yearPublished: '',
        isDone: false
      }
    };
  }

  if (action.type === ACTIONS.MARK_BOOK_DONE) {
    const newBooks = [...state.books];
    const bookIndex = newBooks.findIndex((b) => b.id === action.bookId);
    newBooks[bookIndex].isDone = true;

    return {
      ...state,
      books: newBooks
    };
  }
}
