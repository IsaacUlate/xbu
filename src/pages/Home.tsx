import React from 'react';
import {
  Flex,
  Box,
  Text,
  Spinner,
  Container,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
// import { useQuery } from '@tanstack/react-query'

import { Nav } from '../components/Nav';
import { AllBooks } from '../components/AllBooks';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Nav />
      <Container maxW='lg'>
        <Box my={{ base: '20', md: '32', xl: '40' }}>
          <Box
            textAlign='center'
            as='h1'
            fontSize={{ base: '6xl', md: '9xl' }}
            bgGradient='linear-gradient(to-l, #2de000, #e9f501)'
            bgClip='text'
            fontWeight='extrabold'
          >
            XBooks
          </Box>
          <Box
            color='green'
            fontSize={{ base: '2xl', md: '5xl' }}
            fontWeight='bold'
            textAlign={{ base: 'center', md: 'left' }}
          >
            ¡Explora!
          </Box>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Comparte tus libros favoritos con la comunidad.
          </Text>
        </Box>
      </Container>
      <AllBooks />
    </>
  );
}
