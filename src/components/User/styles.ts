import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    height: ${theme.sizes[8]};
    width: ${theme.sizes[8]};
    border-radius: ${theme.rounded.full};
  `}
`;

export const Username = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.bw1};
    font-weight: ${theme.font.medium};
    font-size: ${theme.text.sm};
  `}
`;
