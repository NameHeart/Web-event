import styled from "styled-components";

export const SecAboutWidgetStyled = styled.div`
  position: relative;
  padding: 20px;
  .sec_about_container {
    max-width: 1300px;
    margin: auto;
    .sec_about_content_block {
      .banner {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        .banner_image {
          width: 465px;
        }
      }
      .main_title {
        font-size: ${({ theme }) => theme.FONT.SIZE.S26};
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding: 20px;
      }
      .group_button {
        display: flex;
        justify-content: space-around;
        .button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
        }
      }

      .cards_container {
        display: flex;
        justify-content: center;
        padding: 20px;
        .cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
      }
      .page-button {
        background-color: transparent;
        border: none;
        color: black;
        cursor: pointer;
        padding: 10px 20px;
        font-size: ${({ theme }) => theme.FONT.SIZE.S16};
      }

      /* สไตล์สำหรับปุ่มที่ถูกเลือก */
      .page-button.active {
        background-color: black;
        color: white;
      }
      .card-content {
        display: flex;
        align-items: center;
      }

      .card-image {
        flex: 1;
        padding: 10px;
      }

      .card-text {
        flex: 2;
        padding: 10px;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}){
    .sec_about_container {
    max-width: 1300px;
    margin: auto;
    .sec_about_content_block {
      .banner {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        .banner_image {
          min-width: 250px;
          max-width: 400px;
        }
      }
      .main_title {
        font-size: ${({ theme }) => theme.FONT.SIZE.S26};
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding: 20px;
      }
      .group_button {
        display: flex;
        justify-content: space-around;
        .button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
        }
      }

      .cards_container {
        display: flex;
        justify-content: center;
        padding: 20px;
        .cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
      }
      .page-button {
        background-color: transparent;
        border: none;
        color: black;
        cursor: pointer;
        padding: 10px 20px;
        font-size: ${({ theme }) => theme.FONT.SIZE.S16};
      }

      /* สไตล์สำหรับปุ่มที่ถูกเลือก */
      .page-button.active {
        background-color: black;
        color: white;
      }
      .card-content {
        display: flex;
        align-items: center;
      }

      .card-image {
        flex: 1;
        padding: 10px;
      }

      .card-text {
        flex: 2;
        padding: 10px;
      }
    }
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .sec_about_container {
    max-width: 680px;
    margin: auto;
    .sec_about_content_block {
      .banner {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        .banner_image {
          min-width: 175px;
          max-width: 175px;
          height: auto;
        }
      }
      .main_title {
        font-size: ${({ theme }) => theme.FONT.SIZE.S26};
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding: 20px;
      }
      .group_button {
        display: flex;
        justify-content: space-around;
        .button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
        }
      }

      .cards_container {
        display: flex;
        justify-content: center;
        padding: 20px;
        .cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
      }
      .page-button {
        background-color: transparent;
        border: none;
        color: black;
        cursor: pointer;
        padding: 10px 20px;
        font-size: ${({ theme }) => theme.FONT.SIZE.S16};
      }

      /* สไตล์สำหรับปุ่มที่ถูกเลือก */
      .page-button.active {
        background-color: black;
        color: white;
      }
      .card-content {
        display: flex;
        align-items: center;
      }

      .card-image {
        flex: 1;
        padding: 10px;
      }

      .card-text {
        flex: 2;
        padding: 10px;
      }
    }
  }
  }
`;
