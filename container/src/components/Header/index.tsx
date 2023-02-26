import Link from 'next/link'
import { HeaderContainer, Location } from './styles'

import { MapPin } from 'phosphor-react'
// import { useCart } from '../../hooks/useCart'

export function Header() {
  // const { cart } = useCart()

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

        {/* <Link to="/checkout">
          <If condition={cart.products.length}>
            <span>{cart.products.length}</span>
          </If>
          <ShoppingCart color="#C47F17" size={20} weight="fill" />
        </Link> */}
      </div>
    </HeaderContainer>
  )
}
