import { Box, Flex, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext, Init } from "../../context/CartContext";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const { addProduct } = useContext<Init>(CartContext);

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
            <ProductCard
              key={product?.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              smalldescription={product.smalldescription}
              image={product.image}
              addToCart={addProduct}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Products;