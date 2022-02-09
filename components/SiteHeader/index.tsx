import { ReactNode, useContext, useRef } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Divider,
  Badge,
  Spacer,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Input,
  DrawerFooter,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { SiTesco } from 'react-icons/si'
import { CartContext, Init } from '../../context/CartContext';
import CartCard from '../CartCard';
import EmptyCart from '../SVG/EmptyCartLight';
import CartEmptyState from './CartEmptyState';
import CurrencyConvert from '../CurrencyConvert';


const SiteHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef()

  const {
    cart,
    totalItems,
    totalAmount,
    removeProduct,
    bounce,
    bouceEnd,
  } = useContext<Init | any>(CartContext);
  console.log("🚀 ~ file: index.tsx ~ line 50 ~ SiteHeader ~ cart", cart)

  return (
    <>
      <Box bg={useColorModeValue('light', 'dark')} px={{ base: 8, md: 10, lg: 20 }}>
        <Flex h={16} alignItems={'center'}>
          <SiTesco size={60} />

          <Spacer />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={{ base: 2, md: 2, lg: 2 }}>

              <Button variant={'ghost'} borderRadius={'full'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button variant={'ghost'} borderRadius={'full'} onClick={onOpen}>
                <FaShoppingCart />
                <Badge rounded={'full'} mt='-4' ml='0.5' fontSize='0.8em' colorScheme='red'>
                  {cart.length}
                </Badge>
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Divider />

      <Drawer
        isOpen={isOpen}
        size={'sm'}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>
          <DrawerBody>
            <>
              {cart.length < 1 ?
                <>
                  <CartEmptyState />
                  <Center py={8}>
                    <Button variant={'outline'} onClick={onClose}>Continue Shopping</Button>
                  </Center>
                </>
                :
                <>
                  {cart.map((item) => (
                    <>
                      <CartCard id={item.id} name={item.name} image={item.image} quantity={item.quantity} price={item.price} />
                    </>
                  ))}
                  <Box>
                    <Text fontSize={'large'} fontWeight='bold'>
                      Total Amount: {totalAmount}
                    </Text>
                    <CurrencyConvert/>
                  </Box>
                </>
              }
            </>
          </DrawerBody>
          <DrawerFooter>
            {cart.length > 0 && <Button mb={12} w={'full'} borderRadius={'full'} colorScheme='green'>Checkout</Button>}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SiteHeader