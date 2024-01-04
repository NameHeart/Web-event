import React, { useState, useEffect } from "react";
import { NavbarStyled } from "./styled";
import NavItem from "../NavItem";
import { Link as ScrollLink, Events, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";

const Navbar = ({ data }) => {
  const router = useRouter();
  const [selectedNavItem, setSelectedNavItem] = useState("");

  useEffect(() => {
    // ตรวจสอบ URL และตั้งค่า selectedNavItem
    const path = router.asPath;
    const foundNavItem = data.find((item) => {
      if (item.to) {
        return path.includes(item.to);
      } else {
        return path === item.target;
      }
    });

    if (foundNavItem) {
      setSelectedNavItem(foundNavItem.text);
    }
  }, [router, data]);

  return (
    <NavbarStyled>
      <nav className={`navbar`}>
        <div className={`nav__menu-list`}>
          {data &&
            data.map((menu, idx) => (
              <div key={menu.text}>
                <NavItem
                  text={menu.text}
                  to={menu.to}
                  target={menu.target}
                  selectedNavItem={selectedNavItem}
                  onClick={() => setSelectedNavItem(menu.text)}
                />
              </div>
            ))}
        </div>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
