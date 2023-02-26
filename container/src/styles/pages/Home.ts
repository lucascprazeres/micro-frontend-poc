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

export const HeroSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  max-width: 76rem;
  margin: 0 auto;

  img {
    display: none;

    @media ${breakpoints.desktop} {
      display: block;
    }
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.3;

  margin-bottom: 1rem;
`

export const Description = styled.p`
  color: var(--base-subtitle);
  font-size: 1.25rem;
  line-height: 1.3;
`

export const Advantages = styled.ul`
  margin-top: 4rem;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
`