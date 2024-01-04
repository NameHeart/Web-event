import styled from 'styled-components';

export const LayoutStyled = styled.div`
  .layout_container {
    display: flex;
    column-gap: 0.5rem;
    .layout_item {
      border-radius: 30px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.COLORS.NAVIGATION_LAYOUT_BG};
      color: ${({ theme }) => theme.COLORS.NAVIGATION_LAYOUT_TXT};
      font-size: ${({ theme }) => theme.FONT.SIZE.S18};
      font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
      cursor: pointer;
      &.active {
        background: ${({ theme }) => theme.COLORS.NAVIGATION_LAYOUT_ACT_BG};
        color: ${({ theme }) => theme.COLORS.NAVIGATION_LAYOUT_ACT_TXT};
      }
    }
  }

  .theme_standard {
  }
`;
