import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Butter from 'buttercms'
import Products from '../components/Products';


const butter = Butter(process.env.NEXT_PUBLIC_BUTTER_API_TOKEN)

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await butter.content.retrieve(["products"], {
        order: "name"
      })
      const { data } = await res.data
      console.log("🚀 ~ file: index.tsx ~ line 25 ~ fetchData ~ data", data)
      const allProducts = data.products
      console.log("🚀 ~ file: index.tsx ~ line 27 ~ fetchData ~ allProducts", allProducts)
      setProducts(allProducts)
    }
    fetchData()
  }, [])

  return (
    <>
      {/* <Container maxW="container.xl" h="100vh" >
        <Flex justifyContent="space-between" alignContent="center">
          <Text
            as="a"
            href="/"
            fontSize="2rem"
            color="gray.900"
            fontFamily="Robo"
            my="5px"
          >
            BJSS
          </Text>
          <Button
            my="5px"
            colorScheme="green"
            variant="ghost"
            leftIcon={<FiShoppingBag size="24px" />}
            size="lg"
            p={2}
          >
            View Cart
          </Button>
        </Flex>
        <Divider /> */}
        <Box mt={4}>
          <Products products={products} />
        </Box>
      {/* </Container> */}
    </>
  )
}
