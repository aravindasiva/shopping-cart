import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import '../styles/globals.css'
import theme from "../theme"
import Fonts from "../theme/fonts"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Fonts />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
