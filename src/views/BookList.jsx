import { useState, useContext } from 'react';
import { AppContext } from '../layout/Context';
import { ACTIONS, VIEWS } from '../helper/constant';
import BookCard from '../component/BookCard';
import { Heading, Flex, Button, ButtonGroup, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function BookList() {
  const { state, dispatch } = useContext(AppContext);
  const { books } = state;
  const [filterBook, setFilterBook] = useState('all'); // * all | done | progress

  const handleViewDispatcher = (isUpdate) => {
    dispatch({ type: ACTIONS.CHANGE_VIEW, view: VIEWS.FORM, isUpdate })
  }

  return (
    <>
      <Heading as='h1' fontSize='4xl' fontWeight='normal'>
        Daftar Buku
      </Heading>
      <Flex align='center' justify='space-between' my={6}>
        <Button
          colorScheme='blue'
          leftIcon={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => handleViewDispatcher(false)}
        >
          Tambah buku
        </Button>
        <ButtonGroup colorScheme='purple' isAttached>
          <Button
            variant={filterBook === 'all' ? 'solid' : 'outline'}
            onClick={() => setFilterBook('all')}
          >
            Semua
          </Button>
          <Button
            variant={filterBook === 'done' ? 'solid' : 'outline'}
            onClick={() => setFilterBook('done')}
          >
            Selesai
          </Button>
          <Button
            variant={filterBook === 'progress' ? 'solid' : 'outline'}
            onClick={() => setFilterBook('progress')}
          >
            Belum Selesai
          </Button>
        </ButtonGroup>
      </Flex>
      <VStack my={8}>
        {books
          .filter((rec) => {
            if (filterBook === 'done') return rec.isDone === true;
            if (filterBook === 'progress') return rec.isDone === false;
            return rec;
          })
          .map((rec) => (
            <BookCard key={rec.id} {...rec} />
          ))}
      </VStack>
    </>
  );
}
