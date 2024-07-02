import { Container, ChakraProvider, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import AppProvider from './Context';

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <ChakraProvider>
        <Container maxW={900}>
          <Box my={10}>{children}</Box>
        </Container>
      </ChakraProvider>
    </AppProvider>
  );
}

RootLayout.propTypes = {
  children: PropTypes.any
};
