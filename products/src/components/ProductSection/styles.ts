import styled from "styled-components"
import { breakpoints } from "../../styles/breakpoints"

export const ProductsSectionContainer = styled.section`
  height: auto;

  max-width: 70rem;
  margin: 0 auto;

  padding-bottom: 5rem;

  h2 {
    font-size: 2rem;
    color: var(--base-subtitle);
    margin-bottom: 3rem;
  }
`

export const ProductList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  list-style: none;

  @media ${breakpoints.desktop} {
    justify-content: flex-start;
    gap: 2rem;
  }
`
