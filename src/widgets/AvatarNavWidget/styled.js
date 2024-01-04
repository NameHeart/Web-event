import styled from 'styled-components';

export const AvatarNavWidgetStyled = styled.div`
  position: relative;
  .avatar_nav_container {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    cursor: pointer;
    .nui_left_col {
      .il_title {
        text-align: right;
        color: ${({ theme }) => theme.COLORS.BLACK_1};
        font-size: ${({ theme }) => theme.FONT.SIZE.S16};
        font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_MEDIUM};
      }
      .il_sub_title {
        color: ${({ theme }) => theme.COLORS.GRAY_5};
        font-size: ${({ theme }) => theme.FONT.SIZE.S13};
        font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_LIGHT};
      }
    }
    .nui_right_col {
    }
  }
  .avatar_nav_menu {
    margin-top: 16px;
    position: absolute;
    border-width: 0;
    border-radius: 1.25rem;
    box-shadow: 0 0 2.3125rem rgb(8 21 66 / 5%);
    padding: 0.9375rem 0;
    min-width: 12.5rem;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
    .atn_menu_item {
      padding: 0.375rem 1rem;
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      cursor: pointer;
      span {
        color: ${({ theme }) => theme.COLORS.BLUE_2};
        font-size: ${({ theme }) => theme.FONT.SIZE.S13};
        font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_LIGHT};
      }
    }
  }
`;
