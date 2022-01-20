import { ReactNode } from 'react';
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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { SiTesco } from 'react-icons/si'


const SiteHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

              <Button variant={'ghost'} borderRadius={'full'} onClick={toggleColorMode}>
                <FaShoppingCart />
                <Badge rounded={'full'} mt='-4' ml='0.5' fontSize='0.8em' colorScheme='red'>
                  1
                </Badge>
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Divider />
    </>
  );
}

export default SiteHeader