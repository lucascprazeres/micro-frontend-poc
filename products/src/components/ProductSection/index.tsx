import { ProductCard } from "../ProductCard";
import { PRODUCTS } from "./constants";
import { ProductsSectionContainer, ProductList } from "./styles";

export function ProductsSection() {
  const cart = []

  const handleAddProductToCart = () => { }

  const handleRemoveProductFromCart = () => { }

  return (
    <ProductsSectionContainer>
      <h2>Nossos cafés</h2>

      <ProductList>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              onAddProductToCard={handleAddProductToCart}
              onRemoveProductFromCart={handleRemoveProductFromCart}
            />
          </li>
        ))}
      </ProductList>
    </ProductsSectionContainer>
  )
}