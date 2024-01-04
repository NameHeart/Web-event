import styled from "styled-components";

export const MainStyled = styled.div`
  .body_mainlayout {
    padding: 1.5rem 1.25rem;
    min-height: calc(100vh - 64px - 3rem);
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
  @media (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .body_mainlayout {
      padding: 8px;
      min-height: calc(100vh - 32px - 3rem);
    }
  }
`;
