import styled from "styled-components";

export const CardIndicatorContainer = styled.div`
   height: 2.5rem;
    width: 2.5rem;
    border-radius: 6px;
    background: var(--yellow-light);

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-decoration: none;

    span {
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 0.625rem;
      color: var(--white);
      background: var(--yellow-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;

      position: absolute;
      top: -0.25rem;
      right: -0.25rem;
    }
`