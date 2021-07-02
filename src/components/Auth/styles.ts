import styled, { css } from "styled-components";
import media from "styled-media-query";

export const PageAuth = styled.div`
  ${() => css`
    display: flex;
    height: 100vh;

    ${media.lessThan("large")`
      flex-direction: column;
    `}
  `}
`;

export const Hero = styled.aside`
  ${({ theme }) => css`
    flex: 5;
    background-color: ${theme.colors.purple};
    color: ${theme.colors.bw5};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.sizes[8]};
    padding: ${theme.sizes[32]} ${theme.sizes[20]};

    img {
      max-width: ${theme.sizes[80]};
    }

    strong {
      font: ${theme.font.bold} 2.25rem ${theme.font.poppins};
      line-height: ${theme.sizes[10]};
    }

    p {
      font-size: ${theme.sizes[6]};
      line-height: ${theme.sizes[2]};
      margin-top: ${theme.sizes[4]};
      color: ${theme.colors.bw5};
    }

    ${media.lessThan("large")`
      flex: 1;
      padding: ${theme.sizes[8]};
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      > img {
        max-height: ${theme.sizes["32"]}
      }

      div {
        margin-top: ${theme.sizes[2]};
      }

      strong {
        font-size: ${theme.text["2lg"]};
      }

      p {
        font-size: ${theme.text.base};
        margin-top: ${theme.sizes[2]};
      }
    `}
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
        background: ${theme.colors.bw5};
        border: 1px solid ${theme.colors.bw3};
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
      color: ${theme.colors.bw2};
      margin-top: 1rem;

      a {
        color: ${theme.colors.pink};
      }
    }

    .separator {
      font-size: ${theme.text.sm};
      color: ${theme.colors.bw3};

      margin: ${theme.sizes[8]} 0;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        flex: 1;
        height: 1px;
        background: ${theme.colors.bw3};
        margin-right: 1rem;
      }

      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: ${theme.colors.bw3};
        margin-left: ${theme.sizes[4]};
      }
    }
  `}
`;
