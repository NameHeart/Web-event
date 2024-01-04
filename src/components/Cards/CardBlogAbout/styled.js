import styled from "styled-components";

export const CardBlogAboutStyled = styled.div`
  .card {
    background: ${({ theme }) => theme.COLORS.YELLOW_3};
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    display: flex;
    justify-content: center;
    padding: 20px;
    column-gap: 10px;
    
  }

  .card_image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    .img_card {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    padding: 10px;
    max-width: 500px;
    .text_title {
      font-size: ${({ theme }) => theme.FONT.SIZE.S18};
      font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
    }
    .description {
      padding-top: 10px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S16};
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}){
    
    .card {
    background: ${({ theme }) => theme.COLORS.YELLOW_3};
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 20px;
    column-gap: 10px;
  }

  .card_image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    .img_card {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    padding: 10px;
    max-width: 500px;
    .text_title {
      font-size: ${({ theme }) => theme.FONT.SIZE.S16};
      font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
    }
    .description {
      padding-top: 10px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S14};
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {    
    .card {
    background: ${({ theme }) => theme.COLORS.YELLOW_3};
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    display: flex;
    justify-content: center;
    padding: 20px;
    column-gap: 10px;
  }

  .card_image {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    max-width: 200px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    .img_card {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    padding: 10px;
    max-width: 300px;
    .text_title {
      font-size: ${({ theme }) => theme.FONT.SIZE.S12};
      font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
    }
    .description {
      padding-top: 10px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S10};
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }
  
  }
  
`;
