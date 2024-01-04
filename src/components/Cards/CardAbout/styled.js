import styled from "styled-components";

export const CardAboutStyled = styled.div`
  .card {
    background: ${({ theme }) => theme.COLORS.WHITE_2};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    display: flex;
    padding: 20px;
    max-width: 910px;
  }

  .card_image {
    display: flex;
    .image_card {
      width: 400px;
      height: auto;
    }
  }

  .text {
    padding-left: 30px;
    max-width: 500px;
    .img_card {
      padding-top: 10px;
      .image_logo {
        height: 60px;
      }
    }
    .text_about {
      font-size: ${({ theme }) => theme.FONT.SIZE.S18};
    }
    .text_title {
      padding-top: 10px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S18};
    }
    .description {
      padding-top: 10px;
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}){
    .card {
    background: ${({ theme }) => theme.COLORS.WHITE_2};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 650px;
    height: auto;
    display: flex;
    padding: 20px;
  }

  .card_image {
    display: flex;
    .image_card {
      max-width: 250px;
      height: auto;
    }
  }

  .text {
    padding-left: 30px;
    max-width: 400px;
    .img_card {
      padding-top: 10px;
      .image_logo {
        height: 50px;
      }
    }
    .text_about {
      font-size: ${({ theme }) => theme.FONT.SIZE.S14};
    }
    .text_title {
      padding-top: 5px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S14};
    }
    .description {
      padding-top: 5px;
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .card {
    background: ${({ theme }) => theme.COLORS.WHITE_2};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    display: flex;
    padding: 20px;
  }

  .card_image {
    display: flex;
    .image_card {
      max-width: 150px;
      height: auto;
    }
  }

  .text {
    padding-left: 15px;
    max-width: 150px;
    .img_card {
      padding-top: 10px;
      .image_logo {
        width: 120px;
        height: auto;
      }
    }
    .text_about {
      font-size: ${({ theme }) => theme.FONT.SIZE.S12};
    }
    .text_title {
      padding-top: 5px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S12};
    }
    .description {
      padding-top: 5px;
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      font-size: ${({ theme }) => theme.FONT.SIZE.S10}
    }
  }
  
  }
`;
