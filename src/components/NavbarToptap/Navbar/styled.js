import styled from "styled-components";

export const NavbarStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  header {
    position: sticky;
    z-index: 30;
    top: 0;
  }
  nav {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-radius: 2px;
    border-bottom: 4px solid;

    border-image-source: radial-gradient(
      39.65% 10151.11% at 72.36% 100%,
      rgba(25, 71, 151, 0.9) 0%,
      rgba(54, 119, 184, 0.7) 43.85%,
      rgba(86, 172, 221, 0.1) 100%
    );

    position: absolute;
    height: 90px;
    left: 0px;
    right: 0px;
    top: 0px;

    background: linear-gradient(
      270deg,
      rgba(175, 226, 255, 0.9) 0.52%,
      rgba(175, 226, 255, 0.4) 41.69%,
      rgba(175, 226, 255, 0.25) 65.67%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(5px);
    /* background: radial-gradient(39.65% 10151.11% at 72.36% 100%, rgba(25, 71, 151, 0.9) 0%, rgba(54, 119, 184, 0.7) 43.85%, rgba(86, 172, 221, 0.1) 100%); */
  }
  .nav__menu-bar {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    cursor: pointer;
  }
  .nav__menu-bar div {
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 2px;
    border-bottom: 4px solid;
  }
  .nav__menu-list {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 60px;
    width: 288px;
    row-gap: 24px;
    right: -288px;
    padding: 24px 16px;
    transition: all 0.2s;
    min-height: calc(100vh - 60px);
    /* background-color: linear-gradient(
      270deg,
      rgba(175, 226, 255, 0.9) 0.52%,
      rgba(175, 226, 255, 0.4) 41.69%,
      rgba(175, 226, 255, 0.25) 65.67%,
      rgba(255, 255, 255, 0) 100%
    ); */
  }
  .nav__menu-list.active {
    right: 0;
  }
  .nav__link {
    font-size: 18px;
    position: relative;
    transition: all 0.2s;
  }

  .nav__link:hover {
    font-weight: bold;
  }

  .center {
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    .nav__menu-bar {
      display: none;
    }
    .nav__menu-list {
      position: unset;
      flex-direction: row;
      min-height: fit-content;
      width: fit-content;
      column-gap: 24px;
      align-items: center;
    }
    .nav__link::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 6px;
      bottom: -16px;
      left: 0;
      background-color: black;
      transition: all 0.2s;
    }

    .nav__link:hover:before {
      width: 100%;
    }
  }
`;
