import { useContext } from 'react';
import { AppContext } from '../layout/Context';
import { ACTIONS } from '../helper/constant';
import {
  Card,
  CardBody,
  Heading,
  CardFooter,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Center
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const buttonIcon = {
  edit: <FontAwesomeIcon icon={faPencil} />,
  delete: <FontAwesomeIcon icon={faTrash} />,
  checkDone: <FontAwesomeIcon icon={faCheck} />
};

function BadgeStatus({ isDone }) {
  return (
    <Center
      bg={isDone ? 'purple.700' : 'purple.200'}
      color={isDone ? 'white' : 'black'}
      px={4}
      py={1}
      borderRadius={10}
    >
      {isDone ? 'Selesai' : 'Belum Selesai'}
    </Center>
  );
}

export default function BookCard({
  id,
  bookTitle,
  writer,
  yearPublished,
  isDone
}) {
  const { dispatch } = useContext(AppContext);

  const handleEditBtn = () => {
    dispatch({
      type: ACTIONS.EDIT_BOOK,
      book: { id, bookTitle, writer, yearPublished, isDone }
    });
  };

  const handleDeleteBtn = () => {
    dispatch({
      type: ACTIONS.DELETE_BOOK,
      bookId: id
    });
    alert(`${bookTitle} has deleted!`);
  };

  const handleMarkDoneBtn = () => {
    dispatch({
      type: ACTIONS.MARK_BOOK_DONE,
      bookId: id
    });
    alert(`${bookTitle} has already done to read!`);
  };

  return (
    <Card w='100%' variant='outline'>
      <CardBody>
        <Flex align='flex-start' justify='space-between'>
          <Heading size='lg' fontWeight='normal' mb={6}>
            {bookTitle}
          </Heading>
          <BadgeStatus isDone={isDone} />
        </Flex>
        <Text fontSize={18} my={2}>
          Tahun terbit: {yearPublished}
        </Text>
        <Text fontSize={18} my={2}>
          Penulis: {writer}
        </Text>
      </CardBody>
      <CardFooter justify='space-between'>
        <Button colorScheme='pink' variant='link'>
          Deskripsi dan Review
        </Button>
        <ButtonGroup isAttached>
          <Button
            colorScheme='yellow'
            leftIcon={buttonIcon.edit}
            onClick={handleEditBtn}
          >
            Edit
          </Button>
          <Button
            colorScheme='red'
            leftIcon={buttonIcon.delete}
            onClick={handleDeleteBtn}
          >
            Hapus
          </Button>
          {!isDone && (
            <Button
              colorScheme='green'
              leftIcon={buttonIcon.checkDone}
              onClick={handleMarkDoneBtn}
            >
              Selesai
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

BadgeStatus.propTypes = {
  isDone: PropTypes.bool
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  yearPublished: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
};
