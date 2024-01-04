import styled from 'styled-components';

export const AlertStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  z-index: 99;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  .backdrop {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.COLORS.MODAL_BACKDROP_BG};
  }
  .alert_body {
    border-radius: 16px;
    width: 100%;
    max-width: 350px;
    padding: 18px 12px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_CONTAINER};
    .alert_title {
      margin-bottom: 12px;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.NOTI_STATUS_TITLE};
      font-size: ${({ theme }) => theme.FONT.SIZE.S18};
      font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
    }
    .alert_description {
      text-align: center;
      font-size: ${({ theme }) => theme.FONT.SIZE.S15};
      color: ${({ theme }) => theme.COLORS.NOTI_STATUS_DETAIL};
      font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
    }
    .alert_action_row {
      margin-top: 30px;
      display: flex;
      column-gap: 16px;
      .alert_action_col {
        flex: 1;
      }
    }
  }
`;
