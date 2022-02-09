import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const BASE_URL = `http://api.currencylayer.com/list?access_key=${process.env.NEXT_PUBLIC_CURRENCYLAYER_API_KEY}`
console.log("🚀 ~ file: index.tsx ~ line 5 ~ BASE_URL", BASE_URL)

const CurrencyConvert = () => {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ CurrencyConvert ~ currencyOptions", currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([...Object.keys(data.currencies)])
      })

  }, []);


  return (
    <Box>

    </Box>
  );
};

export default CurrencyConvert;
