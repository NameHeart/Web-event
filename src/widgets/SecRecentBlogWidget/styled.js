import styled from "styled-components";

export const SecRecentBlogWidgetStyled = styled.div`
  position: relative;
  padding: 20px;
  .sec_recent_container {
    display:flex;
    justify-content: center;
    .sec_recent_content_block {
      .main_title {
        font-size: ${({ theme }) => theme.FONT.SIZE.S26};
        font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
        display: flex;
        justify-content: center;
        padding: 20px;
      }
      .group_button {
        display: flex;
        justify-content: center;
        gap: 60px;
        .button_select {
          padding: 10px 20px;
          border: none;
          background: ${({ theme }) => theme.COLORS.GREEN_1};
          color: ${({ theme }) => theme.COLORS.WHITE};

          cursor: pointer;
        }
        .button {
          padding: 10px 20px;
          border: none;
          background: ${({ theme }) => theme.COLORS.GREEN_2};

          cursor: pointer;
        }
      }

      .cards-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px;

        .cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .button_see-more {
          display: flex;
          margin-left:auto;
          padding-top: 20px;
          .see-more-button {
            background: ${({ theme }) => theme.COLORS.WHITE};
            box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
            border: none;
            cursor: pointer; /* เปลี่ยนรูปเป็นเครื่องมือเมื่อนำเมาส์ไปที่ปุ่ม */
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            font-size: ${({ theme }) => theme.FONT.SIZE.S16};
            height: 35px;
            width: 110px;
          }
        }
      }
      .pagination {
        display: flex;
        padding-left: 130px;
        margin: 10px;

        .page-button {
          background-color: transparent; /* พื้นหลังโปร่งใส */
          border: none; /* ไม่มีเส้นกรอบ */
          cursor: pointer; /* เปลี่ยนรูปเคอร์เซอร์เป็นตัวชี้ */
          padding: 10px 20px;
          font-size: ${({ theme }) => theme.FONT.SIZE.S16};
        }

        /* สไตล์สำหรับปุ่มที่ถูกเลือก */
        .page-button.active {
          background: ${({ theme }) => theme.COLORS.GREEN_1};
          color: ${({ theme }) => theme.COLORS.WHITE}; /* สีตัวหนังสือขาว */
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}){
    .sec_recent_container {
    .sec_recent_content_block {
      .main_title {
        font-size: ${({ theme }) => theme.FONT.SIZE.S22};
        font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
        display: flex;
        justify-content: center;
        padding: 20px;
      }
      .group_button {
        display: flex;
        justify-content: center;
        gap: 30px;
        .button_select {
          padding: 10px 20px;
          border: none;
          background: ${({ theme }) => theme.COLORS.GREEN_1};
          color: ${({ theme }) => theme.COLORS.WHITE};

          cursor: pointer;
        }
        .button {
          padding: 10px 15px;
          border: none;
          background: ${({ theme }) => theme.COLORS.GREEN_2};

          cursor: pointer;
        }
      }

      .cards-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px;

        .cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .button_see-more {
          display: flex;
          margin-left: auto;
          padding-top: 20px;
          .see-more-button {
            background: ${({ theme }) => theme.COLORS.WHITE};
            box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
            border: none;
            cursor: pointer; /* เปลี่ยนรูปเป็นเครื่องมือเมื่อนำเมาส์ไปที่ปุ่ม */
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            font-size: ${({ theme }) => theme.FONT.SIZE.S16};
            height: 35px;
            width: 110px;
          }
        }
      }
      .pagination {
        display: flex;
        padding-left: 130px;
        margin: 10px;

        .page-button {
          background-color: transparent; /* พื้นหลังโปร่งใส */
          border: none; /* ไม่มีเส้นกรอบ */
          cursor: pointer; /* เปลี่ยนรูปเคอร์เซอร์เป็นตัวชี้ */
          padding: 10px 20px;
          font-size: ${({ theme }) => theme.FONT.SIZE.S16};
        }

        /* สไตล์สำหรับปุ่มที่ถูกเลือก */
        .page-button.active {
          background: ${({ theme }) => theme.COLORS.GREEN_1};

          color: ${({ theme }) => theme.COLORS.WHITE}; /* สีตัวหนังสือขาว */
        }
      }
    }
  }
  }
    @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
      .sec_recent_container {
    max-width: 680px;
    margin: auto;
    .sec_recent_content_block {
      .main_title {
        font-size: ${({ theme }) => theme.FONT.SIZE.S18};
        font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
        display: flex;
        justify-content: center;
        padding: 20px;
      }
      .group_button {
        display: flex;
        justify-content: center;
        gap: 8px;
        .button_select {
          padding: 5px 5px;
          border: none;
          background: ${({ theme }) => theme.COLORS.GREEN_1};
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: ${({ theme }) => theme.FONT.SIZE.S10};

          cursor: pointer;
        }
        .button {
          padding: 5px 5px;
          border: none;
          background: ${({ theme }) => theme.COLORS.GREEN_2};
          font-size: ${({ theme }) => theme.FONT.SIZE.S10};
          cursor: pointer;
        }
      }

      .cards-container {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 10px;

        .cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .button_see-more {
          display: flex;
          padding-top: 20px;
          .see-more-button {
            background: ${({ theme }) => theme.COLORS.WHITE};
            box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
            border: none;
            cursor: pointer; /* เปลี่ยนรูปเป็นเครื่องมือเมื่อนำเมาส์ไปที่ปุ่ม */
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
            font-size: ${({ theme }) => theme.FONT.SIZE.S12};
            height: auto;
            width: 90px;
          }
        }
      }
      .pagination {
        display: flex;
        padding-left: 0px;
        margin: 10px;
        .page-button {
          background-color: transparent; /* พื้นหลังโปร่งใส */
          border: none; /* ไม่มีเส้นกรอบ */
          cursor: pointer; /* เปลี่ยนรูปเคอร์เซอร์เป็นตัวชี้ */
          padding: 5px 15px;
          font-size: ${({ theme }) => theme.FONT.SIZE.S11};
        }

        /* สไตล์สำหรับปุ่มที่ถูกเลือก */
        .page-button.active {
          background: ${({ theme }) => theme.COLORS.GREEN_1};

          color: ${({ theme }) => theme.COLORS.WHITE}; 
        }
      }
    }
  }
  
  }
`;
