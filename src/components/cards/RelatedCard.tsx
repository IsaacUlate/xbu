import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Flex, Box, useColorModeValue, Link, Icon } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

import { CardProps } from '../types';

export function RelatedCard({ id, title, author, refetchQueries }: CardProps) {
  const navigate = useNavigate();
  const borderCard = useColorModeValue('gray.200', 'gray.600');
  const colorAuthorCard = useColorModeValue('gray.600', 'gray.300');
  const bgRandomBookCardLink = useColorModeValue('gray.300', 'black');
  const outlineCard = useColorModeValue('black', 'white');

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      navigate(`/book/${id}`);
    }
  }

  return (
    <>
      <Box
        w='full'
        h={{ base: 'auto', md: '245px' }}
        mx={{ base: 0, md: 2 }}
        rounded='xl'
        border='1px'
        borderColor={borderCard}
        boxShadow='lg'
        overflow='hidden'
        my='2'
        bg='transparent'
        position='relative'
        tabIndex={0}
        onKeyPress={handleKeyPress}
        _focus={{ outline: `3px solid ${outlineCard}` }}
      >
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Flex direction='column'>
            <Box p='4'>
              <Box
                as='h1'
                fontSize='xl'
                lineHeight='8'
                fontWeight='800'
                mb='2'
                textTransform='uppercase'
              >
                {title}
              </Box>
              <Box
                textTransform='uppercase'
                fontSize='sm'
                color={colorAuthorCard}
              >
                {author}
              </Box>
            </Box>
          </Flex>
          <Link
            as={NavLink}
            to={`/book/${id}`}
            onClick={refetchQueries}
            w='full'
            bg={bgRandomBookCardLink}
            py='4'
            px='7'
            position={{ base: 'initial', md: 'absolute' }}
            bottom='0'
            tabIndex={-1}
            _hover={{ outline: 'none' }}
          >
            <Flex align='center'>
              Ver libro
              <Icon as={FiArrowRight} ml='2' />
            </Flex>
          </Link>
        </Flex>
      </Box>
    </>
  );
}