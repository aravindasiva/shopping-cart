import { Box, Center, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import EmptyCartDark from '../../SVG/EmptyCartDark';
import EmptyCartLight from '../../SVG/EmptyCartLight';

const CartEmptyState = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Center>
        <Box flexDirection={'column'}>
          {colorMode === 'light' ? <EmptyCartLight /> : <EmptyCartDark/>}
          <Text align={'center'} fontSize='xl' fontWeight={'bold'}>
            Looks like your cart is empty
          </Text>
        </Box>
      </Center>
    </>
  )
};

export default CartEmptyState;
