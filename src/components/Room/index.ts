import styled, { css } from "styled-components";

export const FormFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.sizes[4]};

    > span {
      font-size: ${theme.text.sm};
      color: ${theme.colors.bw2};
      font-weight: ${theme.font.medium};

      button {
        background: transparent;
        border: none;
        color: ${theme.colors.purple};
        text-decoration: underline;
        font-size: ${theme.text.sm};
        font-weight: ${theme.font.medium};

        cursor: pointer;
      }
    }
  `}
`;
