import styled, { css } from "styled-components";

export const Wrapper = styled.div`
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
    color: ${theme.colors.bw1};
  `}
`;

export const QuestionQuantity = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.sizes[4]};
    background: ${theme.colors.purple};
    border-radius: ${theme.rounded.full};
    padding: ${theme.sizes[2]} ${theme.sizes[4]};
    color: ${theme.colors.bw5};
    font-weight: ${theme.font.medium};
    font-size: ${theme.text.sm};
  `}
`;
