import React from "react";
import { useRouter } from "next/router";
import { NavItemStyled } from "./styled";
import { Link as ScrollLink } from "react-scroll";

const NavItem = ({ text, to, target, selectedNavItem, onClick }) => {
  const router = useRouter();

  return (
    <NavItemStyled active={text === selectedNavItem}>
      <ScrollLink
        className={`link ${text === selectedNavItem ? "selected" : ""}`}
        to={to}
        style={{ cursor: "pointer" }}
        spy={true}
        smooth={true}
        duration={500}
        offset={50}
        onSetActive={() => {}}
        onClick={() => {
          if (target) {
            router.push(target);
          }
          if (onClick) {
            onClick();
          }
        }}
      >
        {text}
      </ScrollLink>
    </NavItemStyled>
  );
};

export default NavItem;
