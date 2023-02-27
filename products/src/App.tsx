import { ProductsSection } from "./components/ProductSection"
import { GlobalStyle } from "./styles/global"
//@ts-ignore
import { CartContextProvider } from '@lucascprazeres/cart'

function App() {
  return (
    <CartContextProvider>
      <ProductsSection />
      <GlobalStyle />
    </CartContextProvider>
  )
}

export default App
