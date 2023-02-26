import styled from 'styled-components'
import { breakpoints } from '../breakpoints'

export const HomeContainer = styled.div`
  flex: 1;
  height: calc(100vh);
  background: url('/blur-background.png') no-repeat center;
  background-size: cover;
  padding: 0 1rem;

  @media ${breakpoints.tablet} {
    height: calc(60vh);
  }

  @media ${breakpoints.desktop} {
    height: calc(100vh - 6.5rem);
    padding: 0;
  }
`

export const HomeContent = styled.main`
  height: 100%;
  padding-bottom: 5rem;
`