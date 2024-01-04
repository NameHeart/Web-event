import styled from "styled-components";

export const FooterWidgetStyled = styled.div`
  position: relative;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_1};
  .footer_container {
    max-width: 1440px;
    margin: auto;
    background-color: ${({ theme }) => theme.COLORS.WHITE_1};
    .ft_content_block {
      display: flex;
      justify-content: space-around;

      .group_main {
        padding: 20px;
        .main_text_eng {
          font-size: ${({ theme }) => theme.FONT.SIZE.S26};
          font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
        }
        .main_text_company {
          font-size: ${({ theme }) => theme.FONT.SIZE.S18};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          padding-top: 10px;
        }
        .main_text_address {
          font-size: ${({ theme }) => theme.FONT.SIZE.S16};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          padding-top: 10px;
          color: ${({ theme }) => theme.COLORS.GRAY_2};
          max-width: 320px;
        }
      }
      .group_detail {
        display: flex;
        gap: 30px;
        .group_service {
          display: flex;
          flex-direction: column;

          padding: 20px;
          .group_service_head {
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .group_service_list {
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            line-height: 15px;
          }
        }
        .group_porfolio {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 20px;

          .group_porfolio_head {
            font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .group_porfolio_list {
            font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            line-height: 15px;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    position: relative;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_1};
  .footer_container {
    max-width: 1440px;
    margin: auto;
    background-color: ${({ theme }) => theme.COLORS.WHITE_1};
    .ft_content_block {
      display: flex;
      justify-content: space-around;

      .group_main {
        padding: 15px;
        .main_text_eng {
          .banner_image{
            width: 100px;
            height: auto;
          }
        }
        .main_text_company {
          font-size: ${({ theme }) => theme.FONT.SIZE.S12};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          padding-top: 10px;
        }
        .main_text_address {
          font-size: ${({ theme }) => theme.FONT.SIZE.S10};
          font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          padding-top: 10px;
          color: ${({ theme }) => theme.COLORS.GRAY_2};
          max-width: 150px;
        }
      }
      .group_detail {
        display: flex;
        gap: 10px;
        .group_service {
          display: flex;
          flex-direction: column;
          padding: 20px;
          .group_service_head {
            font-size: ${({ theme }) => theme.FONT.SIZE.S12};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .group_service_list {
            font-size: ${({ theme }) => theme.FONT.SIZE.S12};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            line-height: 20px;
          }
        }
        .group_porfolio {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 20px;

          .group_porfolio_head {
            font-size: ${({ theme }) => theme.FONT.SIZE.S12};
            font-weight: ${({ theme }) => theme.FONT.STYLE.REGULAR};
          }
          .group_porfolio_list {
            font-size: ${({ theme }) => theme.FONT.SIZE.S12};
            font-weight: ${({ theme }) => theme.FONT.STYLE.LIGHT};
            line-height: 20px;
            
          }
        }
      }
    }
  }
  }
`;
