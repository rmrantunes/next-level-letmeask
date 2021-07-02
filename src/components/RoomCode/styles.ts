import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    height: 2.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    background: ${theme.colors.bw5};
    border: 1px solid ${theme.colors.purple};

    cursor: pointer;
    display: flex;
    align-items: stretch;

    > div {
      background: ${theme.colors.purple};
      padding: 0 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      display: block;
      align-self: center;
      color: ${theme.colors.bw1};
      flex: 1;
      padding: 0 1rem 0 0.75rem;

      font-size: 0.875rem;
      font-weight: 500;
    }
  `}
`;
