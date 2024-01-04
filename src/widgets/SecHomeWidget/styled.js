import styled from "styled-components";

export const SecHomeWidgetStyled = styled.div`
  position: relative;
  min-height: calc(100vh - 90px - 140px);
  .sec_home_container {
    .sec_home_content_block {
      .main_title {
        font-size: ${({ theme }) => theme.FONT.SIZE.S26};
        font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
        color: ${({ theme }) => theme.COLORS.GREEN_1}; 
        display: flex;
        justify-content: center;
        padding-top: 70px;
      }
      .background_slide {
        padding: 50px;
        background: ${({ theme }) => theme.COLORS.GRADIENT_GREEN_1};
      }
      .slide {
        display: flex;
        justify-content: flex-start;
        padding: 0px;
        cursor: pointer;
      }

      .slick-dots li button::before {
        padding-top: 10px;
        font-size: ${({ theme }) => theme.FONT.SIZE.S20};
      }

      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      .image {
        width: 1050px;
        height: 350px;
      }
      .slider_highlight {
        display: flex;
        flex-direction: row;
        justify-content: center;
        cursor: pointer;
        gap: 20px;
        .highlight1 {
          display: flex;
          margin: 0px;
          justify-content: center;
          margin-top: 20px;
          
          

          .content_highlight1 {
            display: flex;
            flex-direction: column;
            margin: 0px;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};

            .image_highlight1 {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-start;
            }
            .text-field_highlight1 {
              display: flex;
              flex-direction: column;
              background-color: ${({ theme }) => theme.COLORS.GRAY_3};
              position: relative;
              max-width: 500px;
              padding: 10px;
            }

            .text1_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S20};
            }

            .text2_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S14};
              color: ${({ theme }) => theme.COLORS.GRAY_2};
            }

            .text3_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S14};
              color: ${({ theme }) => theme.COLORS.GREEN_1}; 
              padding-top: 20px;
            }
          }
        }
        .slider_highlight2 {
          display: flex;
          flex-direction: column;
          height: 100%;

          cursor: pointer;
          .highlight2 {
            display: flex;
            margin: 0px;
            justify-content: flex-start;
            margin-top: 20px;
            box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};

            .content_highlight2 {
              display: flex;
              flex-direction: row;
              margin: 0px;
              align-items: center;
              justify-content: center;
              .image_highlight2 {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                max-width: 250px;
              }
              .text-field_highlight2 {
                display: flex;
                flex-direction: column;
                background-color: ${({ theme }) => theme.COLORS.GRAY_3};
                position: relative;
                max-width: 300px;
                padding: 10px;
              }

              .text1_highlight2 {
                font-size: ${({ theme }) => theme.FONT.SIZE.S18};
              }

              .text2_highlight2 {
                font-size: ${({ theme }) => theme.FONT.SIZE.S14};
                color: ${({ theme }) => theme.COLORS.GRAY_2};
              }

              .text3_highlight2 {
                font-size: ${({ theme }) => theme.FONT.SIZE.S14};
                color: ${({ theme }) => theme.COLORS.GREEN_1};
                padding-top: 20px;
              }
            }
          }
        }
      }
      .banner {
        display: flex;
        justify-content: center;
        padding-top: 30px;
        .banner_image {
          width: 1060px;
          height: auto;
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    .sec_home_container {
      .sec_home_content_block {
        .main_title {
          font-size: ${({ theme }) => theme.FONT.SIZE.S20};
          font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
          color: ${({ theme }) => theme.COLORS.GREEN_5}; 
          display: flex;
          justify-content: center;
          padding-top: 50px;
        }
        .background_slide {
          padding: 30px;
          background: ${({ theme }) => theme.COLORS.GRADIENT_GREEN_1};
        }
        .slide {
          display: flex;
          justify-content: flex-start;
          padding: 10px;
          cursor: pointer;
        }

        .slick-dots li button::before {
          padding-top: 10px;
          font-size: ${({ theme }) => theme.FONT.SIZE.S20};
        }

        .content {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .image {
          max-width: 600px;
        height: 300px;
        }
        .slider_highlight {
          display: flex;
          flex-direction: row;
          justify-content: center;
          cursor: pointer;   
          padding:20px ;
          gap: 20px;
          .highlight1 {
          display: flex;
          margin: 0px;
          justify-content: flex-start;
          margin-top: 20px;

          .content_highlight1 {
            display: flex;
            flex-direction: column;
            margin: 0px;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
            height: 415px;
          max-width: 350px;

            .image_highlight1 {
              max-width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-start;
            }
            .text-field_highlight1 {
              display: flex;
              flex-direction: column;
              background-color: ${({ theme }) => theme.COLORS.GRAY_3};
              position: relative;
              max-width: 500px;
              padding: 10px;
            }

            .text1_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S18};
            }

            .text2_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S12};
              color: ${({ theme }) => theme.COLORS.GRAY_2};
            }

            .text3_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S12};
              color: ${({ theme }) => theme.COLORS.GRAY_2};
              padding-top: 20px;
            }
          }
        }
          .slider_highlight2 {
            display: flex;
            flex-direction: column;

            cursor: pointer;
            .highlight2 {
              display: flex;
              margin: 0px;
              justify-content: flex-start;
              margin-top: 20px;
              box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
              

              .content_highlight2 {
                display: flex;
                flex-direction: row;
                margin: 0px;
                align-items: center;
                justify-content: center;
                height: 200px;
            max-width: 400px;
                
                .image_highlight2 {
                  height: 100%;
                  display: flex;
                  justify-content: flex-start;
                  max-width: 150px;
                }
                .text-field_highlight2 {
                  display: flex;
                  flex-direction: column;
                  background-color: ${({ theme }) => theme.COLORS.GRAY_3};
                  position: relative;
                  max-width: 400px;
                  padding: 10px;
                  height: 90%;
              
                }

                .text1_highlight2 {
                  font-size: ${({ theme }) => theme.FONT.SIZE.S16};
                }

                .text2_highlight2 {
                  font-size: ${({ theme }) => theme.FONT.SIZE.S12};
                  color: ${({ theme }) => theme.COLORS.GRAY_2};
                }

                .text3_highlight2 {
                  font-size: ${({ theme }) => theme.FONT.SIZE.S12};
                  color: ${({ theme }) => theme.COLORS.GRAY_2};
                  padding-top: 20px;
                }
              }
            }
          }
        }
        .banner {
          display: flex;
          justify-content: center;
          padding-top: 30px;
          .banner_image {
            padding: 20px;
            min-width: 650px;
            max-width: 1180px;
            height: auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .sec_home_container {
      .sec_home_content_block {
        .main_title {
          font-size: ${({ theme }) => theme.FONT.SIZE.S18};
          font-weight: ${({ theme }) => theme.FONT.STYLE.SEMIBOLD};
          color: ${({ theme }) => theme.COLORS.GREEN_5}; 
          display: flex;
          justify-content: center;
          padding-top: 20px;
        }
        .background_slide {
          padding: 30px;
          background: ${({ theme }) => theme.COLORS.GRADIENT_GREEN_1};
        }
        .slide {
          display: flex;
          justify-content: flex-start;
          padding: 0px;
          cursor: pointer;
        }

        .slick-dots li button::before {
          padding-top: 10px;
          font-size: ${({ theme }) => theme.FONT.SIZE.S20};
        }

        .content {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .image {
        max-width: 260px;
        height: 150px;
        }
        .slider_highlight {
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;   
          padding:10px ;
          gap: 20px;
          .highlight1 {
          display: flex;
          margin: 0px;
          justify-content: center;
          margin-top: 20px;

          .content_highlight1 {
            display: flex;
            flex-direction: column;
            margin: 0px;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
            height: 100%;

            .image_highlight1 {
              max-width: 320px;
              height: 100%;
              display: flex;
              justify-content: flex-start;
            }
            .text-field_highlight1 {
              display: flex;
              flex-direction: column;
              background-color: ${({ theme }) => theme.COLORS.GRAY_3};
              position: relative;
              max-width: 300px;
              padding: 10px;
            }

            .text1_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S14};
            }

            .text2_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S10};
              color: ${({ theme }) => theme.COLORS.GRAY_2};
            }

            .text3_highlight1 {
              font-size: ${({ theme }) => theme.FONT.SIZE.S10};
              color: ${({ theme }) => theme.COLORS.GRAY_2};
              padding-top: 20px;
            }
          }
        }
          .slider_highlight2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            

            cursor: pointer;
            .highlight2 {
              display: flex;
              margin: 0px;
              justify-content: center;
              margin-top: 10px;
              box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.COLORS.BLACK_3};
              height: 100%;
              

              .content_highlight2 {
                display: flex;
                flex-direction: row;
                margin: 0px;
                align-items: center;
                justify-content: center;
                
                .image_highlight2 {
                  height: 100%;
                  display: flex;
                  justify-content: flex-start;
                  max-width: 150px;
                }
                .text-field_highlight2 {
                  display: flex;
                  flex-direction: column;
                  background-color: ${({ theme }) => theme.COLORS.GRAY_3};
                  position: relative;
                  max-width: 300px;
                  padding: 5px;
                  height: 90%;
                }

                .text1_highlight2 {
                  font-size: ${({ theme }) => theme.FONT.SIZE.S12};
                }

                .text2_highlight2 {
                  font-size: ${({ theme }) => theme.FONT.SIZE.S10};
                  color: ${({ theme }) => theme.COLORS.GRAY_2};
                }

                .text3_highlight2 {
                  font-size: ${({ theme }) => theme.FONT.SIZE.S10};
                  color: ${({ theme }) => theme.COLORS.GRAY_2};
                  padding-top: 20px;
                }
              }
            }
          }
        }
        .banner {
          display: flex;
          justify-content: center;
          padding-top: 30px;
          .banner_image {
            padding: 20px;
            min-width: 350px;
            max-width: 620px;
            height: auto;
          }
        }
      }
    }
  }
`;
