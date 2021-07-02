import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    position: fixed;
    right: ${theme.sizes[10]};
    bottom: ${theme.sizes[10]};

    height: ${theme.sizes[16]};
    width: ${theme.sizes[16]};
    border-radius: ${theme.rounded.full};
    border: none;
    box-shadow: ${theme.shadow.sm};

    background-color: ${theme.colors.bw1};
    color: ${theme.colors.bw5};
    line-height: 0;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      width: ${theme.sizes[8]};
    }
  `}
`;
