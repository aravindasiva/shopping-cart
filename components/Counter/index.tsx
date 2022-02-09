import { Box, Button, HStack, Input } from '@chakra-ui/react';
import React from 'react';

type CounterProps = {
  productQuantity: number;
  updateQuantity: (qty: number) => void;
}

const Counter = ({ productQuantity, updateQuantity }: CounterProps) => {

  const increment = () => {
    updateQuantity(productQuantity + 1);
  }

  const decrement = () => {
    if (productQuantity > 1) {
      updateQuantity(productQuantity - 1)
    }
  }

  const feed = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuantity(parseInt(e.target.value, 10))
  }

  return (
    <HStack>
      <Button _focus={{outline: 'none'}} onClick={decrement} rounded={'full'} fontSize={'xl'}>
        -
      </Button>
      <Box maxW={16}>
        <Input
          size={'sm'}
          textAlign={'center'}
          variant='filled'
          placeholder='quantity'
          type={'number'}
          value={productQuantity}
          onChange={feed}
        />
      </Box>
      <Button _focus={{outline: 'none'}} onClick={increment} rounded={'full'} fontSize={'xl'}>
        +
      </Button>
    </HStack>
  )
};

export default Counter;
