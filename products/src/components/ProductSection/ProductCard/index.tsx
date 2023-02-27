import { Product } from '../../../models'
import { formatPrice, removeBRLPrefix } from '../../../utils/currency'
import { ProductAmountInput } from '../../ProductAmountInput'
import { ProductCardContainer } from './styles'

//@ts-ignore
import { useCart } from '@lucascprazeres/cart'
import { useMemo } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { cart, addProductToCart, decreaseProductAmountOnCart } = useCart()

  const productOnCart = cart?.products.find((prod: Product) => prod.id === product.id)

  const priceFormated = formatPrice(product.price)
  const priceFormatedWithNoPrefix = removeBRLPrefix(priceFormated)

  const productAmount = useMemo(() => {
    return productOnCart?.amount || 0
  }, [productOnCart])

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
          value={productAmount}
          onIncreaseProductAmount={() => addProductToCart(product)}
          onDecreaseProductAmount={() =>
            decreaseProductAmountOnCart(product.id)
          }
        />
      </footer>
    </ProductCardContainer>
  )
}
