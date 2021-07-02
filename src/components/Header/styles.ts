import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.sizes[6]};
    border-bottom: 1px solid ${theme.colors.bw4};
  `}
`;

export const HeaderContent = styled.div`
  ${() => css`
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a svg {
      max-height: 2.75rem;
    }
  `}
`;

export const HeaderNavigation = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes[4]};

    button {
      height: ${theme.sizes[10]};
    }
  `}
`;
