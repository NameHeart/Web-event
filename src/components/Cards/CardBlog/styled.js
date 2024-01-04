import styled from "styled-components";

export const CardBlogStyled = styled.div`
  .blog_container {
    display: flex;
    flex-direction: column;
    .card_image {
      display: flex;
      position: absolute;
      height: 500px;
      left: 120px;
      right: 80px;
      .img_card {
        width: 100%;
        height: auto;
      }
    }
    .card {
      background: ${({ theme }) => theme.COLORS.YELLOW_3};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      height: auto;
      display: flex;
      padding: 20px;
      z-index: 2;
      position: relative;
      margin-top: 280px;
      margin-left: 20px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      max-width: 600px;
      .text_date {
        display: flex;
        justify-content: center;
        color: ${({ theme }) => theme.COLORS.GRAY_2};
      }
      .text_title {
        display: block;
        text-align: center;
        font-size: ${({ theme }) => theme.FONT.SIZE.S18};
        font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
      }
      .description1 {
        padding-top: 20px;
        color: ${({ theme }) => theme.COLORS.GREEN_3};

        display: block;
      }
      .description2 {
        padding-top: 20px;
        display: block;
        color: ${({ theme }) => theme.COLORS.GRAY_2};
      }
      .card_img {
        padding-top: 20px;
        max-width: 250px;
      }
      .card_banner {
        padding-top: 20px;
        max-width: 700px;
        max-height: 300px;
      }
      .button {
        padding-top: 20px;
      }
      .text_underline {
        display: flex;
        gap: 10px;
        padding-top: 30px;
        color: ${({ theme }) => theme.COLORS.GRAY_2};
        text-decoration: underline;
        .mdloyal {
          color: ${({ theme }) => theme.COLORS.GREEN_4};
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}){
    .blog_container {
    display: flex;
    flex-direction: column;
    .card_image {
      display: flex;
      position: absolute;
      height: 400px;
      left: 80px;
      right: 40px;
      .img_card {
        width: 100%;
        height: auto;
      }
    }
    .card {
      background: ${({ theme }) => theme.COLORS.YELLOW_3};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      height: auto;
      display: flex;
      padding: 20px;
      z-index: 2;
      position: relative;
      margin-top: 280px;
      margin-left: 50px;
      display: flex;
      max-width: 600px;
      justify-content: center;
      align-items: center;
      
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      max-width: 400px;
      .text_date {
        display: flex;
        justify-content: center;
        color: ${({ theme }) => theme.COLORS.GRAY_2};
      }
      .text_title {
        display: block;
        text-align: center;
        font-size: ${({ theme }) => theme.FONT.SIZE.S14};
        font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
      }
      .description1 {
        padding-top: 20px;
        color: ${({ theme }) => theme.COLORS.GREEN_3};

        display: block;
      }
      .description2 {
        padding-top: 20px;
        display: block;
        color: ${({ theme }) => theme.COLORS.GRAY_2};
      }
      .card_img {
        padding-top: 20px;
        max-width: 250px;
      }
      .card_banner {
        padding-top: 20px;
        max-width: 350px;
        max-height: 300px;
      }
      .button {
        padding-top: 20px;
      }
      .text_underline {
        display: flex;
        gap: 10px;
        padding-top: 30px;
        color: ${({ theme }) => theme.COLORS.GRAY_2};
        text-decoration: underline;
        .mdloyal {
          color: ${({ theme }) => theme.COLORS.GREEN_4};
        }
      }
    }
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .blog_container {
    display: flex;
    flex-direction: column;
    .card_image {
      display: flex;
      position: absolute;
      height: 200px;
      left: 30px;
      right: 10px;
      .img_card {
        width: 100%;
        height: auto;
      }
    }
    .card {
      background: ${({ theme }) => theme.COLORS.YELLOW_3};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      height: auto;
      display: flex;
      padding: 15px;
      z-index: 2;
      position: relative;
      margin-top: 150px;
      margin-left: 25px;
      display: flex;
      max-width: 250px;
      justify-content: center;
      align-items: center;
      
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      max-width: 200px;
      .text_date {
        display: flex;
        justify-content: center;
        color: ${({ theme }) => theme.COLORS.GRAY_2};
        font-size: ${({ theme }) => theme.FONT.SIZE.S12};    
        }
      .text_title {
        display: block;
        text-align: center;
        font-size: ${({ theme }) => theme.FONT.SIZE.S12};
        font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
      }
      .description1 {
        padding-top: 10px;
        color: ${({ theme }) => theme.COLORS.GREEN_3};
        font-size: ${({ theme }) => theme.FONT.SIZE.S9};
        display: block;
      }
      .description2 {
        padding-top: 10px;
        display: block;
        font-size: ${({ theme }) => theme.FONT.SIZE.S9};
        color: ${({ theme }) => theme.COLORS.GRAY_2};
      }
      .card_img {
        padding-top: 10px;
        max-width: 120px;
        height: auto;
      }
      .card_banner {
        padding-top: 10px;
        max-width: 200px;
        max-height: 80px;
      }
      .button {
        padding-top: 10px;
      }
      .text_underline {
        display: flex;
        gap: 10px;
        padding-top: 20px;
        font-size: ${({ theme }) => theme.FONT.SIZE.S9};
        color: ${({ theme }) => theme.COLORS.GRAY_2};
        text-decoration: underline;
        .mdloyal {
          color: ${({ theme }) => theme.COLORS.GREEN_4};
        }
      }
    }
  }
  
  }
`;
