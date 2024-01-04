import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "../NavItem";
import { NavbarStyled } from "./styled";
import Logo from "../../../../public/assets/images/logo.png";

const MENU_LIST = [
  { text: "HOME", href: "/" },
  { text: "SERVICES", href: "/Page1" },
  { text: "PROCESS", href: "/Page2" },
  { text: "PORFOLIO", href: "/contact" },
  { text: "ABOUT", href: "/contact" },
  { text: "CONTACT", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <NavbarStyled>
      <header>
        <nav className={`nav`}>
          <Link href={"/"}>
            <Image src={Logo} width={150} height={54.38} />
          </Link>
          <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}>
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </nav>
      </header>
    </NavbarStyled>
  );
};

export default Navbar;
