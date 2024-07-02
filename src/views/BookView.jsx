import { useContext } from 'react';
import { AppContext } from '../layout/Context';
import BookList from './BookList';
import BookForm from './BookForm';
import { VIEWS } from '../helper/constant';

export default function BookView() {
  const { state } = useContext(AppContext);
  const { currentView } = state;

  return (
    <>
      {currentView === VIEWS.LIST && <BookList />}
      {currentView === VIEWS.FORM && <BookForm />}
    </>
  );
}
