import styled from "styled-components";

export const BgStandardStyled = styled.div`
  .btn {
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_4};
    border: ${({ disabled }) => disabled && "none"};
    padding: 0.625rem 1rem;
    width: 100%;
    background: ${({ theme, disabled }) =>
      !disabled ? theme.COLORS.BLUE_4 : theme.COLORS.GRAY_4};
    color: ${({ theme, disabled }) =>
      disabled ? theme.COLORS.BLACK_2 : theme.COLORS.WHITE_1};
    font-size: ${({ theme }) => theme.FONT.SIZE.S14};
    font-family: ${({ theme }) => theme.FONT.STYLE.KANIT_MEDIUM};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    &:hover {
      background: ${({ disabled }) => !disabled && "#165ac8"};
      transition: 0.7s;
    }
  }

  .theme_stadard_btn {
  }

  .theme_export_btn {
    .btn {
      border: 1px solid ${({ theme }) => theme.COLORS.ORANGE_1};
      padding: 0.625rem 1rem;
      background: ${({ theme, disabled }) =>
        !disabled ? `${theme.COLORS.ORANGE_1}` : theme.COLORS.GRAY_4};
      &:hover {
        background: ${({ theme }) => theme.COLORS.ORANGE_1}CC;
        transition: 0.7s;
      }
    }
  }

  .theme_gray {
    .btn {
      background: ${({ theme, disabled }) =>
        !disabled ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_4};
      color: ${({ theme, disabled }) =>
        !disabled ? theme.COLORS.BLUE_2 : theme.COLORS.WHITE_1};
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_7};
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
  .theme_yellow {
    .btn {
      background: ${({ theme, disabled }) =>
        !disabled ? theme.COLORS.YELLOW_1 : theme.COLORS.GRAY_4};
      color: ${({ theme, disabled }) =>
        !disabled ? theme.COLORS.WHITE_1 : "#1010104D"};
      border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_1};
      border: ${({ disabled }) => disabled && "none"};
    }
  }

  .theme_green {
    .btn {
      background: #0b390c;
      color: white; /* สีตัวหนังสือสีขาว */
      border: none; /* ลบเส้นขอบ */
      width: 100px;
      height: 40px; /* กำหนดความสูงของปุ่ม */
      display: flex;
      align-items: center; /* จัดให้ตัวหนังสืออยู่ตรงกลางแนวตั้ง */
      justify-content: center; /* จัดให้ตัวหนังสืออยู่ตรงกลางแนวนอน */
      cursor: pointer; /* กำหนด pointer cursor เมื่อเม้าส์ชี้ที่ปุ่ม */
      border-radius: 8px; /* กำหนดมุมฉาก */
    }
    .btn:hover {
      background: gray; /* สีพื้นหลังเมื่อเม้าส์ hover อยู่บนปุ่ม */
    }
  }

  .theme_black {
    .btn {
      background: black; /* สีพื้นหลังสีดำ */
      color: white; /* สีตัวหนังสือสีขาว */
      border: none; /* ลบเส้นขอบ */
      width: 100px;
      height: 40px; /* กำหนดความสูงของปุ่ม */
      display: flex;
      align-items: center; /* จัดให้ตัวหนังสืออยู่ตรงกลางแนวตั้ง */
      justify-content: center; /* จัดให้ตัวหนังสืออยู่ตรงกลางแนวนอน */
      cursor: pointer; /* กำหนด pointer cursor เมื่อเม้าส์ชี้ที่ปุ่ม */
      border-radius: 8px; /* กำหนดมุมฉาก */
    }
    .btn:hover {
      background: gray; /* สีพื้นหลังเมื่อเม้าส์ hover อยู่บนปุ่ม */
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
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .theme_green {
    .btn {
      background: #0b390c;
      color: white; /* สีตัวหนังสือสีขาว */
      border: none; /* ลบเส้นขอบ */
      width: 80px;
      height: 25px; /* กำหนดความสูงของปุ่ม */
      display: flex;
      align-items: center; /* จัดให้ตัวหนังสืออยู่ตรงกลางแนวตั้ง */
      justify-content: center; /* จัดให้ตัวหนังสืออยู่ตรงกลางแนวนอน */
      cursor: pointer; /* กำหนด pointer cursor เมื่อเม้าส์ชี้ที่ปุ่ม */
      border-radius: 8px; /* กำหนดมุมฉาก */
      font-size: ${({ theme }) => theme.FONT.SIZE.S9};  
    }
    .btn:hover {
      background: gray; /* สีพื้นหลังเมื่อเม้าส์ hover อยู่บนปุ่ม */
    }
  }
  }
`;
