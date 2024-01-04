import styled from "styled-components";

export const SecBlogWidgetStyled = styled.div`
  position: relative;
  padding: 20px;
  .sec_blog_container {
    margin: auto;
    .sec_blog_content_block {
      .cards-container {
        display: flex;
        justify-content: center;
        padding: 20px;
        .cards {
          display: flex;
          justify-content: center;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 20px;
          .card_about {
            padding-top: 20px;
          }
        }
      }
      .card_blog {
        display: flex;
        justify-content: center;
        padding: 20px;
        flex-direction: row;
        gap: 50px;
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
        background-color: ${({ theme }) => theme.COLORS.BLACK_2};
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
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    .sec_blog_container {
      margin: auto;
    .sec_blog_content_block {
      display: flex;
        justify-content: center;
        flex-direction: column;
      .cards-container {
        display: flex;
        justify-content: center;
        padding: 10px;
        .cards {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 10px;
          .card_about {
            padding-top: 20px;
          }
        }
      }
      .card_blog {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        flex-direction: row;
        gap: 15px;
      }
      .card_about{
        display: flex;
        justify-content: center;
        padding: 10px;
      }
      .page-button {
        background-color: transparent;
        border: none;
        color: black;
        cursor: pointer;
        padding: 5px 10px;
        font-size: ${({ theme }) => theme.FONT.SIZE.S16};
      }

      /* สไตล์สำหรับปุ่มที่ถูกเลือก */
      .page-button.active {
        background-color: ${({ theme }) => theme.COLORS.BLACK_2};
        color: white;
      }
      .card-content {
        display: flex;
        align-items: center;
      }

      .card-image {
        flex: 1;
        padding: 5px;
      }

      .card-text {
        flex: 2;
        padding: 5px;
      }
    }
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .sec_blog_container {
      margin: auto;
    .sec_blog_content_block {
      display: flex;
        justify-content: center;
        flex-direction: column;
      .cards-container {
        display: flex;
        justify-content: center;
        padding: 10px;
        .cards {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 10px;
          .card_about {
            padding-top: 20px;
          }
        }
      }
      .card_blog {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        flex-direction: row;
        gap: 10px;
      }
      .card_about{
        display: flex;
        justify-content: center;
        padding: 10px;
      }
      .page-button {
        background-color: transparent;
        border: none;
        color: black;
        cursor: pointer;
        padding: 5px 10px;
        font-size: ${({ theme }) => theme.FONT.SIZE.S16};
      }

      /* สไตล์สำหรับปุ่มที่ถูกเลือก */
      .page-button.active {
        background-color: ${({ theme }) => theme.COLORS.BLACK_2};
        color: white;
      }
      .card-content {
        display: flex;
        align-items: center;
      }

      .card-image {
        flex: 1;
        padding: 5px;
      }

      .card-text {
        flex: 2;
        padding: 5px;
      }
    }
  }
  
  }
`;
