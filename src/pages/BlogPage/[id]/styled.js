import styled from "styled-components";

export const BlogPageStyled = styled.div`
  .head_title {
    margin-top: 20px;
    margin-left: 70px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-size: ${({ theme }) => theme.FONT.SIZE.S18};
  }
  .body_container_layout {
    position: relative;
  }
  .footer_layout {
    position: relative;
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .head_title {
    margin-top: 10px;
    margin-left: 30px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-size: ${({ theme }) => theme.FONT.SIZE.S14};
  }
  .body_container_layout {
    position: relative;
  }
  .footer_layout {
    position: relative;
  } 
  }
`;
