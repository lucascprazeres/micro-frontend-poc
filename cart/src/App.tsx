import { CartIndicator } from "./components/CartIndicator"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <CartIndicator productAmount={10}/>
      <GlobalStyle />
    </>
  )
}

export default App
