import styled from "styled-components";

export const CardItemBlogStyled = styled.div`
  .card {
    background-color: ${({ theme }) => theme.COLORS.WHITE_1};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    width: 300px;
  }
  .nav_title {
    position: absolute;
    top: 15px;
    left: 0;
    background: ${({ theme }) => theme.COLORS.GRADIENT_GRAY_1};
    font-size: ${({ theme }) => theme.FONT.SIZE.S12};
    color: black;
    padding: 5px 10px;
    border-bottom-right-radius: 10px;
  }

  .card_image {
    position: relative;
    width: 300px;
    height: 200px;
  }

  .text {
    padding: 20px;
    .title {
      max-width: 250px;
    }
    .description {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      max-width: 250px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}){
    .card {
    background-color: ${({ theme }) => theme.COLORS.WHITE_1};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    border-radius: 6px;
    box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
    height: auto;
    max-width: 200px;
    gap: 10px;
  }
  .nav_title {
    position: absolute;
    top: 15px;
    left: 0;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
    color: black;
    padding: 5px 10px;
    border-bottom-right-radius: 10px;
    font-size: ${({ theme }) => theme.FONT.SIZE.S12};
  }

  .card_image {
    display: flex;
    max-width: 200px;
    
  }

  .image_cards{
    min-width: 150px;
   max-width: 200px;
   height: auto
}

  .text {
    padding: 20px;
    .title {
      max-width: 250px;
    }
    .description {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      max-width: 250px;
    }
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .card {
    background-color: ${({ theme }) => theme.COLORS.WHITE_1};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    border-radius: 6px;
    box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
    height: auto;
    max-width: 100px;
  }
  .nav_title {
    position: absolute;
    top: 10px;
    left: 0;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
    color: black;
    padding: 5px 10px;
    border-bottom-right-radius: 10px;
    font-size: ${({ theme }) => theme.FONT.SIZE.S9};
  }

  .card_image {
    display: flex;
    max-width: 100px;
    height: 100px;
    
  }

  .image_cards{
  min-width: 100px;
   max-width: 100px;
   height: auto
}

  .text {
    padding: 10px;
    .text_title {
      max-width: 250px;
      /* word-break: break-all; */
      font-size: ${({ theme }) => theme.FONT.SIZE.S9};
    }
    .description {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      max-width: 250px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S9};
    }
  }
  
  
  }
`;
