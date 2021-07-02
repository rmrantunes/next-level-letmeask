import styled, { css, DefaultTheme } from "styled-components";

const textFieldMutualStyles = {
  ring: (theme: DefaultTheme) => css`
    outline: none;

    &:focus {
      border-color: transparent;
      box-shadow: inset 0 0 0 2px ${theme.colors.purple};
    }
  `,
};

export const Input = styled.input`
  ${({ theme }) => css`
    height: ${theme.sizes[12]};
    border-radius: ${theme.rounded.lg};
    padding: 0 ${theme.sizes[4]};
    background: ${theme.colors.bw5};
    border: 1px solid ${theme.colors.bw2};

    ${textFieldMutualStyles.ring(theme)}
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

    ${textFieldMutualStyles.ring(theme)}
  `}
`;
