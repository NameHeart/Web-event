import styled from "styled-components";

export const NavbarStyled = styled.div`
  .navbar {
    display: flex;
    justify-content: center;
    padding: 20px;
    background: ${({ theme }) => theme.COLORS.GRAY_1};

    color: black;
    position: relative; 
    font-weight: 300;
  }
  .nav__menu-list {
    display: flex;
  }
  .nav__menu-list.active {
    right: 0;
  }
  .nav__link {
    font-size: ${({ theme }) => theme.FONT.SIZE.S20};
    position: relative;
    transition: all 0.2s;
  }

  .nav__link:hover {
    /* font-weight: bold; */
  }

  .nav__menu-list {
    position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 50px;
    align-items: center;
  }

  .nav__link:hover:before {
    width: 100%;
  }
  .active {
  font-weight: bold; /* ตัวหนังสือตัวหนา */
  /* คุณสามารถเพิ่มสไตล์เพิ่มเติมตามที่คุณต้องการ */
}
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.IPAD_AIR_LANDSCAPE}) {
    .navbar {
    display: flex;
    justify-content: center;
    padding: 20px;
    background: ${({ theme }) => theme.COLORS.GRAY_1};

    color: black;
    position: relative; 
    font-weight: 300;
  }
  .nav__menu-list {
    display: flex;
  }
  .nav__menu-list.active {
    right: 0;
  }
  .nav__link {
    font-size: ${({ theme }) => theme.FONT.SIZE.S16};
    position: relative;
    transition: all 0.2s;
  }

  .nav__link:hover {
    /* font-weight: bold; */
  }

  .nav__menu-list {
    position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 50px;
    align-items: center;
  }

  .nav__link:hover:before {
    width: 100%;
  }
  }
  @media screen and (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .navbar {
    display: flex;
    justify-content: center;
    padding: 15px;
    background: ${({ theme }) => theme.COLORS.GRAY_1};

    color: black;
    position: relative; 
    font-weight: 300;
  }
  .nav__menu-list {
    display: flex;
    font-size: ${({ theme }) => theme.FONT.SIZE.S12};
  }
  .nav__menu-list.active {
    right: 0;
  }
  .nav__link {
    font-size: ${({ theme }) => theme.FONT.SIZE.S14};
    position: relative;
    transition: all 0.2s;
  }

  .nav__link:hover {
    /* font-weight: bold; */
  }

  .nav__menu-list {
    position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 30px;
    align-items: center;
  }

  .nav__link:hover:before {
    width: 100%;
  }  
  }
`;
