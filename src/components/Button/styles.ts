import styled, { css, DefaultTheme } from "styled-components";

const buttonSCModifiers = {
  outlined: (
    theme: DefaultTheme,
    bgColor?: keyof DefaultTheme["colors"]
  ) => css`
    background: ${theme.colors.bw5};
    border: 1px solid ${theme.colors[bgColor || "purple"]};
    color: ${theme.colors.purple};
  `,
};

type ButtonSCProps = {
  isOutlined?: boolean;
  bgColor?: keyof DefaultTheme["colors"];
};

export const Wrapper = styled.button<ButtonSCProps>`
  ${({ theme, isOutlined, bgColor }) => css`
    height: ${theme.sizes[12]};
    border-radius: ${theme.rounded.lg};
    font-weight: ${theme.font.medium};
    background: ${theme.colors[bgColor || "purple"]};
    color: ${theme.colors.bw5};
    padding: 0 ${theme.sizes[8]};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: none;

    transition: filter 0.2s;

    img,
    svg {
      margin-right: ${theme.sizes[2]};
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    ${isOutlined && buttonSCModifiers.outlined(theme, bgColor)}
  `}
`;
