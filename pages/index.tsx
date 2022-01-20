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
import SiteHeader from '../components/SiteHeader';


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
        <SiteHeader/>
        <Box mt={4}>
          <Products products={products} />
        </Box>
    </>
  )
}
