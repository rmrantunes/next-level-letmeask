import styled, { css } from "styled-components";

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    margin: ${theme.sizes[8]} 0 ${theme.sizes[10]};
    display: flex;
    align-items: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.poppins};
    font-size: 2.5rem;
    color: ${theme.colors.black};
  `}
`;

export const QuestionQuantity = styled.h2`
  ${({ theme }) => css`
    margin-left: ${theme.sizes[4]};
    background: ${theme.colors.purple};
    border-radius: ${theme.rounded.full};
    padding: ${theme.sizes[2]} ${theme.sizes[4]};
    color: ${theme.colors.white};
    font-weight: ${theme.font.medium};
    font-size: ${theme.text.sm};
  `}
`;
