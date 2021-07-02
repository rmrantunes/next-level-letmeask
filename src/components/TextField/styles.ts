import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    height: ${theme.sizes[12]};
    border-radius: ${theme.rounded.lg};
    padding: 0 ${theme.sizes[4]};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.grayDark};
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    border-radius: ${theme.rounded.lg};
    padding: ${theme.sizes[4]};
    background: #fefefe;
    box-shadow: ${theme.shadow.sm}
    resize: vertical;
    min-height: ${theme.sizes[32]};
  `}
`;
