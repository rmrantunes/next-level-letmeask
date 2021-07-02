import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 ${theme.sizes[4]};
  `}
`;

export default Container;
