import { ShoppingCart } from 'phosphor-react'
import { CardIndicatorContainer } from './styles'

interface ICardButtonProps {
  productAmount: number
}

export function CartIndicator({ productAmount = 0 }: ICardButtonProps) {
  return (
    <CardIndicatorContainer>
      {productAmount > 0 && <span>{productAmount}</span>}
      <ShoppingCart color="#C47F17" size={20} weight="fill" />
    </CardIndicatorContainer>
  )
}