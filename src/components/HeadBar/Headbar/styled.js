import styled from "styled-components";

export const HeadBarStyled = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    height: 80px;
  }

  .header-left {
    display: flex;
    justify-content: flex-start;
    padding-left: 60px;
  }

  .header-center {
    display: flex;
    justify-content: center;
    width: 500px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLACK_1};
    border-radius: 5px;
    .carbon_image {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .header-center input {
    width: 100%;
    padding: 5px;
    border: none;
    border-radius: 5px;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding-right: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    .thai_eng {
      padding: 10px;
    }
    .button_chang {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }

    .button_chang.active {
      color: ${({ theme }) => theme.COLORS.BLACK_2};
    }
  }

  .header-right button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.FONT.SIZE.S16};
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    height: 70px;
  }

  .header-left {
    display: flex;
    justify-content: flex-start;
    padding-left: 60px;
    
  }
  .banner_image{
      width: 120px;
      height: auto;
    }

  .header-center {
    display: flex;
    justify-content: center;
    min-width: 150px;
    max-width: 400px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLACK_1};
    border-radius: 5px;
    .carbon_image {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .header-center input {
    width: 100%;
    padding: 5px;
    border: none;
    border-radius: 5px;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding-right: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    .thai_eng {
      padding: 10px;
    }
    .button_chang {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }

    .button_chang.active {
      color: ${({ theme }) => theme.COLORS.BLACK_2};
    }
  }

  .header-right button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.FONT.SIZE.S14};
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .header {
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0px 0px;
    height: 70px;
    gap: 0px;
  }

  .header-left {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    
  }
  .banner_image{
      width: 70px;
      height: auto;
    }

  .header-center {
    display: flex;
    justify-content: center;
    min-width: 60px;
    max-width: 150px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLACK_1};
    border-radius: 5px;
    .carbon_image {
      padding: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: auto;
      width: 20px;
    }
  }

  .header-center input {
    width: 70%;
    padding: 5px;
    height: 20px;
    border: none;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.FONT.SIZE.S10};
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    .thai_eng {
      padding: 10px;
    }
    .button_chang {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }

    .button_chang.active {
      color: ${({ theme }) => theme.COLORS.BLACK_2};
    }
  }

  .header-right button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.FONT.SIZE.S12};
  }
  }
`;
