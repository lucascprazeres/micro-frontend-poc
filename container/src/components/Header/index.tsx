import Link from 'next/link'
import { HeaderContainer, Location } from './styles'

import { MapPin } from 'phosphor-react'
//@ts-ignore
import { useCart, CartIndicator } from '@lucascprazeres/cart'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link href="/">
        <img src="logo.svg" alt="" />
      </Link>

      <div>
        <Location>
          <MapPin color="#8047F8" size={20} weight="fill" />
          Belém, PA
        </Location>

        <Link href="/checkout">
          <CartIndicator productAmount={cart.products.length} />
        </Link>
      </div>
    </HeaderContainer>
  )
}
