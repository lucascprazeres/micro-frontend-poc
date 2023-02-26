import { Product } from '../../models'
import { formatPrice, removeBRLPrefix } from '../../utils/currency'
import { ProductAmountInput } from '../ProductAmountInput'
import { ProductCardContainer } from './styles'

interface ProductCardProps {
  product: Product
  onAddProductToCard: (product: Product) => void
  onRemoveProductFromCart: (id: string) => void
}

export function ProductCard({ product, onAddProductToCard, onRemoveProductFromCart }: ProductCardProps) {
  // const { cart, addProductToCart, decreaseProductAmountOnCart } = useCart()

  // const productOnCart = cart.products.find((prod) => prod.id === product.id)

  const priceFormated = formatPrice(product.price)
  const priceFormatedWithNoPrefix = removeBRLPrefix(priceFormated)

  // const productAmount = useMemo(() => {
  //   return productOnCart?.amount || 0
  // }, [productOnCart])

  return (
    <ProductCardContainer>
      <img src={product.imgUrl} alt={`Xícara de ${product.title}`} />
      <ul>
        {product.categories.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <h3>{product.title}</h3>
      <p>{product.description}</p>

      <footer>
        <span>
          R$ <strong>{priceFormatedWithNoPrefix}</strong>
        </span>

        <ProductAmountInput
          value={0}
          onIncreaseProductAmount={() => onAddProductToCard(product)}
          onDecreaseProductAmount={() =>
            onRemoveProductFromCart(product.id)
          }
        />
      </footer>
    </ProductCardContainer>
  )
}
