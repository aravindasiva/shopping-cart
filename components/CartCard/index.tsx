import { Box, Center, Container, Flex, HStack, IconButton, Image, Text, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs'
import { CartContext, Init } from '../../context/CartContext';

const CartCard = ({ id, name, image, quantity, price }) => {
  const mul = quantity * price;
  const formatMoney = new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(mul);

  const { removeProduct } = useContext<Init>(CartContext)

  return (
    <>
      <Box h={'100px'} borderRadius={'lg'} borderWidth={3} my={4}>
        <HStack spacing={0}>
          <Box w='30%' minH='100%' borderLeftRadius={'lg'} p={2}>
            <Image
              borderRadius={'lg'}
              src={image}
              alt='Dan Abramov'
            />
          </Box>
          <Box w='100%' minH='100%'>
            <HStack>
              <Text>
                {name} x{quantity}
              </Text>
              <Text>
                Price: {formatMoney}
              </Text>
            </HStack>
          </Box>

          <Box
            minH='100px'
            w='20%'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <IconButton onClick={() => removeProduct(id)} variant={'ghost'} aria-label='remove' icon={<BsTrash color='red' size={28} />} />
            {/* <Box>
              <BsTrash size={30} />
            </Box> */}
          </Box>

        </HStack>
      </Box>
    </>
  );
};

export default CartCard;
