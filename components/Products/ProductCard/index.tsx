import {
  Container,
  Text,
  Divider,
  Box,
  Image,
  Button,
  SimpleGrid,
  Flex,
  Stack,
  Heading,
  chakra,
  useColorModeValue,
  Skeleton,
  Center,
  Tooltip,
  Icon,
  Badge,
  Circle,
  HStack,
  IconButton,
  VStack
} from "@chakra-ui/react";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { useState, useEffect, useContext } from "react";
import Butter from "buttercms";
import { motion } from 'framer-motion'
import { FaCartPlus } from 'react-icons/fa'
import { CartContext, Init, Product } from "../../../context/CartContext";
import Counter from "../../Counter";

type ProductCardProps = {
  addToCart: (product: Product) => void;
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  smalldescription: string;
};

const ProductCard = ({ addToCart, id, name, price, image, description, smalldescription }: ProductCardProps) => {
  const [quantity, updateQuantity] = useState<number>(1);
  const [isAdded, setAddState] = useState<boolean>(false);

  useEffect(() => {
    if (!isAdded) {
      return;
    }
    const timer1 = setTimeout(() => setAddState(false), 3500);
    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer1);
    };
  }, [isAdded]);

  // console.log("🚀 ~ file: index.tsx ~ line 32 ~ ProductCard ~ product", product)
  const { addProduct } = useContext<Init>(CartContext);

  const addButtonClicked = (
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    smalldescription: string,
    quantity: number
  ) => {
    const selectedProduct = {
      id: id,
      name: name,
      price: price,
      image: image,
      description: description,
      smalldescription: smalldescription,
      quantity: quantity
    };
    addToCart(selectedProduct);
    setAddState(true);
  };

  return (
    <>
      <Box
        p={4}
        borderColor='red'
        border={'2px'}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
        borderRadius={'xl'}
      >
        <Box px={4} py={2}>
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {name}
          </chakra.h1>
          <Text
            noOfLines={2} s
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {description}
          </Text>
        </Box>
        <Image
          h={40}
          w="full"
          fit="contain"
          mt={2}
          src={image}
          alt={`Picture of $name}`}
        />
        <VStack spacing={2} my={4} >
          <Box>
            <Center>
              <HStack>
                <chakra.h1 fontWeight='bold' textAlign={'justify'} fontSize={{ base: 'md', md: "lg", lg: '2xl' }}>
                  {price > 1 ? `£ ${price}` : `${price * 100}p`}
                </chakra.h1>
                <Text fontWeight='semibold' fontSize={{ base: 'xs', md: "xs", lg: 'xs' }}>
                  {smalldescription}
                </Text>
              </HStack>
            </Center>
            {/* replace below box with counter  */}
            <Counter productQuantity={quantity} updateQuantity={updateQuantity} />
          </Box>
        </VStack>

        <Button disabled={isAdded ? true : false} onClick={() => addButtonClicked(id, name, price, image, description, smalldescription, quantity)} w={'full'} rightIcon={<FaCartPlus />} aria-label='add-to-cart' borderRadius={'2xl'}>Add</Button>
      </Box>
    </>
  );
}

export default ProductCard;