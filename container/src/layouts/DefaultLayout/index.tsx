import { ReactElement, ReactNode } from 'react'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

interface IDefaultLayoutProps {
  children: ReactElement | ReactNode
}

export function DefaultLayout(props: IDefaultLayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {props.children}
    </LayoutContainer>
  )
}
