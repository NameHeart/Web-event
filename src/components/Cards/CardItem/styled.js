import styled from "styled-components";

export const CardItemStyled = styled.div`
  .card {
    background-color: ${({ theme }) => theme.COLORS.WHITE_1};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    border-radius: 6px;
    box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
    height: auto;
    max-width: 300px;
  }

  .card_image {
    display: flex;
  }
  
  .text {
    padding: 20px;
    .title {
      max-width: 250px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S14};
    }
    .description {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      font-size: ${({ theme }) => theme.FONT.SIZE.S12};
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
  }

  .card_image {
    display: flex;
  }

  .image_cards{
    min-width: 150px;
   max-width: 250px;
   height: 150px
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
    max-width: 95px;
  }

  .card_image {
    display: flex;
  }

  .image_cards{
    min-width: 90px;
   max-width: 250px;
   height: 100px
}


.text {
    padding: 5px;
    .text_title {
      max-width: 250px;
      /* word-break: break-all; */
      font-size: ${({ theme }) => theme.FONT.SIZE.S9};
    }
    .description {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      max-width: 250px;
      font-size: ${({ theme }) => theme.FONT.SIZE.S8};
      /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
    }
  }
  
  }
`;
