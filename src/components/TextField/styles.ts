import styled, { css, DefaultTheme } from "styled-components";

const textFieldMutualStyles = (theme: DefaultTheme) => css`
  outline: none;
  background: ${theme.colors.bw5};
  border: 1px solid ${theme.colors.bw4};
  color: ${theme.colors.bw1};
  transition: all 0.2s;

  &:hover {
    border-color: ${theme.colors.bw1};
  }

  &:focus {
    border-color: transparent;
    box-shadow: inset 0 0 0 2px ${theme.colors.purple};
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    height: ${theme.sizes[12]};
    border-radius: ${theme.rounded.lg};
    padding: 0 ${theme.sizes[4]};

    ${textFieldMutualStyles(theme)}
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    border-radius: ${theme.rounded.lg};
    padding: ${theme.sizes[4]};
    background: ${theme.colors.bw5};
    box-shadow: ${theme.shadow.sm}
    resize: vertical;
    min-height: ${theme.sizes[32]};

    ${textFieldMutualStyles(theme)}
  `}
`;
