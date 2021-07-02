import styled, { css } from "styled-components";

export const PageAuth = styled.div`
  ${() => css`
    display: flex;
    height: 100vh;
  `}
`;

export const Hero = styled.aside`
  ${({ theme }) => css`
    flex: 5;
    background-color: ${theme.colors.purple};
    color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.sizes[32]} ${theme.sizes[20]};

    img {
      max-width: ${theme.sizes[80]};
    }

    strong {
      font: ${theme.font.bold} 2.25rem ${theme.font.poppins};
      line-height: ${theme.sizes[10]};
      margin-top: ${theme.sizes[8]};
    }

    p {
      font-size: ${theme.sizes[6]};
      line-height: ${theme.sizes[2]};
      margin-top: ${theme.sizes[4]};
      color: ${theme.colors.white};
    }
  `}
`;

export const AuthFormSection = styled.main`
  ${() => css`
    flex: 7;

    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const AuthFormSectionContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100;
    min-width: 20rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
      margin-bottom: ${theme.sizes[8]};
    }

    h2 {
      font-size: ${theme.text["2lg"]};
      margin-bottom: ${theme.sizes[10]};
      font-family: ${theme.font.poppins};
    }

    form {
      input {
        height: 3rem;
        border-radius: 0.5rem;
        padding: 0 1rem;
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.grayMedium};
      }

      button {
        margin-top: ${theme.sizes[4]};
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: ${theme.text.sm};
      color: ${theme.colors.grayDark};
      margin-top: 1rem;

      a {
        color: ${theme.colors.pinkDark};
      }
    }

    .separator {
      font-size: ${theme.text.sm};
      color: ${theme.colors.grayMedium};

      margin: ${theme.sizes[8]} 0;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        flex: 1;
        height: 1px;
        background: ${theme.colors.grayMedium};
        margin-right: 1rem;
      }

      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: ${theme.colors.grayMedium};
        margin-left: ${theme.sizes[4]};
      }
    }
  `}
`;
