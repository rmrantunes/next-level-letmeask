import styled, { css } from "styled-components";

export const QuestionList = styled.div`
  ${({ theme }) => css`
    padding: ${theme.sizes[8]} 0;
    display: grid;
    gap: ${theme.sizes[2]};
  `}
`;

export const Question = styled.div`
  ${({ theme }) => css`
    background: #fefefe;
    border-radius: 0.5rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 1.4rem;

    &.highlighted {
      background: #f4f0ff;
      border: 1px solid ${theme.colors.purple};

      footer .user-info span {
        color: ${theme.colors.black};
      }
    }

    &.answered {
      background: ${theme.colors.grayLight};
    }

    p {
      color: ${theme.colors.black};
    }
  `}
`;

export const QuestionFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.sizes[6]};
  `}

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const QuestionUserInfo = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      height: ${theme.sizes[8]};
      width: ${theme.sizes[8]};
      border-radius: ${theme.rounded.full};
    }

    span {
      margin-left: ${theme.sizes[2]};
      color: ${theme.colors.grayDark};
      font-size: ${theme.text.sm};
    }
  `}
`;

export const QuestionInteractionButtons = styled.div`
  ${({ theme }) => css`
    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${theme.colors.grayDark};
        gap: ${theme.sizes[2]};

        &.liked {
          color: ${theme.colors.purple};

          svg path {
            stroke: ${theme.colors.purple};
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  `}
`;
