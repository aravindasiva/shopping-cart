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
  IconButton
} from "@chakra-ui/react";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { useState, useEffect, useContext } from "react";
import Butter from "buttercms";
import { motion } from 'framer-motion'
import { FaCartPlus } from 'react-icons/fa'
import { CartContext, Init } from "../../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addProduct } = useContext<Init>(CartContext);

  return (
    <>
      <Box
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
            {product?.name}
          </chakra.h1>
          <Text
            noOfLines={2} s
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {product?.description}
          </Text>
        </Box>
        <Image
          h={40}
          w="full"
          fit="contain"
          mt={2}
          src={product?.image}
          alt={`Picture of ${product.name}`}
        />
        <Flex
          minH={12}
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize={{ base: 'xs', md: "sm", lg: 'lg' }}>
            {product?.price > 1 ? `£ ${product?.price}` : `${product?.price * 100} p`}
          </chakra.h1>
          <IconButton onClick={()=> addProduct(product)} size={'md'} icon={<FaCartPlus />} aria-label='add-to-cart' borderRadius={'2xl'} />
        </Flex>
      </Box>
    </>
  );
}

export default ProductCard;