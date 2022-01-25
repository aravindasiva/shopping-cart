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
import React, { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Butter from 'buttercms'
import Products from '../components/Products';
import SiteHeader from '../components/SiteHeader';
import { CartContext, Product } from '../context/CartContext';

const butter = Butter(process.env.NEXT_PUBLIC_BUTTER_API_TOKEN)


export default function Home({ products }: { products: Product }): JSX.Element {
  const cart = useContext(CartContext)
  // const products = cart?.products
  console.log("🚀 ~ file: index.tsx ~ line 26 ~ Home ~ products", products)
  console.log("🚀 ~ file: index.tsx ~ line 25 ~ Home ~ cart", cart)

  return (
    <>
      <SiteHeader />
      <Box mt={4}>
        <Products products={products} />
      </Box>
    </>
  )
}


export async function getStaticProps() {
  const res = await butter.content.retrieve(["products"], {
    order: "name"
  })
  const { data } = await res?.data
  const products = data?.products
  return {
    props: {
      products,
    },
  }
}