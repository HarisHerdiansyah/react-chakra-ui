import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../layout/Context';
import { ACTIONS, VIEWS } from '../helper/constant';
import {
  Heading,
  FormControl,
  Input,
  FormLabel,
  Box,
  Flex,
  Button
} from '@chakra-ui/react';
import { faker } from '@faker-js/faker';

export default function BookForm() {
  const { state, dispatch } = useContext(AppContext);
  const { isUpdate, selectedBook } = state;
  const [book, setBook] = useState({
    id: '',
    bookTitle: '',
    writer: '',
    yearPublished: '',
    isDone: false
  });

  const handleInput = (e) => {
    setBook((_book) => {
      return {
        ..._book,
        [e.target.id]: e.target.value
      };
    });
  };

  const handleViewDispatcher = () => {
    dispatch({ type: ACTIONS.CHANGE_VIEW, view: VIEWS.LIST, isUpdate: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataBook = { ...book };
    if (!isUpdate) {
      dataBook.id = faker.string.uuid();
      dispatch({ type: ACTIONS.ADD_BOOK, book: dataBook });
      return;
    }
    dispatch({ type: ACTIONS.UPDATE_BOOK, book: dataBook });
  };

  useEffect(() => {
    if (isUpdate) {
      setBook(selectedBook);
    }
  }, [isUpdate, selectedBook]);

  return (
    <>
      <Heading as='h1' fontSize='4xl' fontWeight='normal'>
        {isUpdate ? 'Perbarui Buku' : 'Tambah Buku'}:
      </Heading>
      <Box my={8}>
        <form onSubmit={handleSubmit}>
          <FormControl my={6} isRequired>
            <FormLabel fontSize='xl' htmlFor='bookTitle'>
              Judul buku:
            </FormLabel>
            <Input
              autoComplete='off'
              type='text'
              id='bookTitle'
              value={book.bookTitle}
              onChange={handleInput}
            />
          </FormControl>
          <FormControl my={6} isRequired>
            <FormLabel fontSize='xl' htmlFor='yearPublished'>
              Tahun terbit:
            </FormLabel>
            <Input
              autoComplete='off'
              type='number'
              id='yearPublished'
              value={book.yearPublished}
              onChange={handleInput}
            />
          </FormControl>
          <FormControl my={6} isRequired>
            <FormLabel fontSize='xl' htmlFor='writer'>
              Penulis:
            </FormLabel>
            <Input
              autoComplete='off'
              type='text'
              id='writer'
              value={book.writer}
              onChange={handleInput}
            />
          </FormControl>
          <Flex align='center' justify='space-between'>
            <Button
              colorScheme='red'
              variant='outline'
              onClick={handleViewDispatcher}
            >
              Batalkan
            </Button>
            <Button type='submit' colorScheme={isUpdate ? 'blue' : 'green'}>
              {isUpdate ? 'Perbarui Buku' : 'Tambah Buku'}
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
}
