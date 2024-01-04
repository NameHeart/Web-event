import styled from "styled-components";

export const BgIconPrefixStyled = styled.div`
  .btn {
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_4};
    padding: 0.625rem 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 3px;
    background: ${({ theme, disabled }) =>
      !disabled ? theme.COLORS.BLUE_4 : theme.COLORS.GRAY_4};
    color: ${({ theme, disabled }) =>
      disabled ? theme.COLORS.BLACK_2 : theme.COLORS.WHITE_1};
    font-size: ${({ theme }) => theme.FONT.SIZE.S14};
    font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_MEDIUM};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    &:hover {
      background: #165ac8;
      transition: 0.7s;
    }
  }

  .theme_add {
    .btn {
      background: unset;
      color: ${({ theme }) => theme.COLORS.BLUE_4};
    }

    .theme_stadard_btn {
      height: 100px;
      width: 201.7129669189453px;
      left: 0px;
      top: 0px;
      border-radius: 29.5px;
    }
  }
  .theme_green {
    .btn {
      width: 150px;
      height: 56.66px;

      font-family: "KANIT";

      border-radius: 12px;
      background: #39cd00;
    }
  }
  .theme_red {
    .btn {
      background: ${({ theme, disabled }) =>
        !disabled ? theme.COLORS.RED_1 : theme.COLORS.GRAY_4};
      color: ${({ theme, disabled }) =>
        !disabled ? theme.COLORS.WHITE_1 : "#1010104D"};
      border: 1px solid ${({ theme }) => theme.COLORS.RED_1};
      border: ${({ disabled }) => disabled && "none"};
    }
  }
  .theme_line {
    .btn {
      width: 201.713px;
      height: 57px;
      border-radius: 29.5px;
      background: ${({ theme }) => theme.COLORS.WHITE};
      box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
      border-color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: center;
    }
  }
  .theme_about {
    .btn {
      width: 201.713px;
      height: 57px;
      border-radius: 29.5px;
      background: ${({ theme }) => theme.COLORS.WHITE};
      box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
      border-color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: center;
    }
  }
`;
