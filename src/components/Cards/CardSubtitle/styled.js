import styled from "styled-components";

export const CardSubtitleStyled = styled.div`
  .card {
    background: ${({ theme }) => theme.COLORS.WHITE_3};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    width: 910px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .card-text {
    display: flex;
    gap: 20px;
  }

  .description {
    display: flex;
    justify-content: flex-end;
  }
  .description-button {
    background: ${({ theme }) => theme.COLORS.YELLOW_2};
    color: white;
    border: none;
    cursor: pointer;
  }

  .description-button.open {
  }

  .card_image {
    display: flex;
  }

  .text_title {
    font-size: ${({ theme }) => theme.FONT.SIZE.S18};
    font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
    display: flex;
    gap: 15px;
  }
  .description {
    padding: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}){
    .card {
    background: ${({ theme }) => theme.COLORS.WHITE_3};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .card-text {
    display: flex;
    gap: 20px;
  }

  .description {
    display: flex;
    justify-content: flex-end;
  }
  .description-button {
    background: ${({ theme }) => theme.COLORS.YELLOW_2};
    color: white;
    border: none;
    cursor: pointer;
  }

  .description-button.open {
  }

  .card_image {
    display: flex;
  }

  .text_title {
    font-size: ${({ theme }) => theme.FONT.SIZE.S14};
    font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
    display: flex;
    gap: 15px;
  }
  .description {
    padding: 20px;
    font-size: ${({ theme }) => theme.FONT.SIZE.S14};
    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .card {
    background: ${({ theme }) => theme.COLORS.WHITE_3};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    padding: 8px;
  }

  .card-text {
    display: flex;
    gap: 20px;
  }

  .description {
    display: flex;
    justify-content: flex-end;
  }
  .description-button {
    background: ${({ theme }) => theme.COLORS.YELLOW_2};
    color: white;
    border: none;
    cursor: pointer;
  }

  .description-button.open {
  }

  .card_image {
    display: flex;
  }

  .text_title {
    font-size: ${({ theme }) => theme.FONT.SIZE.S12};
    font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
    display: flex;
    gap: 10px;
  }
  .description {
    padding: 10px;
    font-size: ${({ theme }) => theme.FONT.SIZE.S10};
    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }
  }
`;
