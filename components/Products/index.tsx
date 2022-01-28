import { Box, Flex, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <>
      <Flex
        p={20}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}>
          {products.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Products;