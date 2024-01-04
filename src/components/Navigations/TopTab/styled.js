import styled from 'styled-components';

export const TopTabStyled = styled.div`
  .top_tap_header_layout {
    margin-bottom: 1.875rem;
    border-radius: 1rem;
    padding: 0.25rem 1.25rem 0 1.25rem;
    display: flex;
    column-gap: 15px;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
    .header_item {
      text-align: center;
      border-bottom: 0.5px solid ${({ theme }) => theme.COLORS.BLUE_2};
      padding: 0.5rem 1rem;
      min-width: 88px;
      color: ${({ theme }) => theme.COLORS.GRAY_6};
      font-size: ${({ theme }) => theme.FONT.SIZE.S15};
      font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_REGULAR};
      cursor: pointer;
      &.acitve {
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLUE_4};
        color: ${({ theme }) => theme.COLORS.BLUE_4};
      }
    }
  }
  .top_tap_body_layout {
    border-radius: 1rem;
    padding: 1.25rem;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
  }

  .theme_standard {
  }
`;
