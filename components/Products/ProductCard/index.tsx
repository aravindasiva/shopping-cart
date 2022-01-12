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
  HStack
} from "@chakra-ui/react";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { useState, useEffect } from "react";
import Butter from "buttercms";
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {

  const variants = {
    normal: {
      opacity: 0.85,
    },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'backOut',
      },
    },
    tap: {
      scale: 0.85,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const MotionImage = motion(Image)

  return (
    <Box
      boxShadow={'2xl'}
    >
      {/* {products.map((product) => ( */}
      {/* <Flex
          bg={useColorModeValue("#F9FAFB", "gray.600")}
          p={50}
          w="full"
          alignItems="center"
          justifyContent="center"
        > */}
      <Box
        bg='gray.200'
        mx="auto"
        // bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
        rounded="xl"
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
            noOfLines={2}s
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {product?.description}
          </Text>
        </Box>
        {/* <MotionImage
              height={48}
              // width="full"
              src={product?.image}
              alt={`Picture of ${product.name}`}
              objectFit="contain"
              loading="lazy"
              opacity={0.75}
              whileHover={variants.hover}
              whileTap={variants.tap}
              fallback={<Skeleton height={48} width="100%" />}
            /> */}

        <Image
          h={48}
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
          roundedBottom="xl"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            {product?.price > 1 ? `£ ${product?.price}` : `${product?.price * 100} p`}
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
          >
            Add to cart
          </chakra.button>
        </Flex>
      </Box>
      {/* </Flex> */}
      {/* ))} */}
    </Box>
  );
}

export default ProductCard;