import React from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { BgIconPrefixStyled } from "./styled";

const BgIconPrefix = ({
  theme_stadard_btn,
  theme_add,
  theme_about,
  theme_green,
  theme_line,
  type = "button",
  label,
  onClick,
  disabled,
  theme_red,
  color,
  icon,
}) => {
  const customClass = cx({
    theme_stadard_btn: theme_stadard_btn,
    theme_add: theme_add,
    theme_red: theme_red,
    theme_green: theme_green,
    theme_line: theme_line,
    theme_about: theme_about,
  });
  return (
    <BgIconPrefixStyled disabled={disabled} color={color}>
      <div className={customClass}>
        <button type={type} disabled={disabled} className="btn" onClick={onClick}>
          {icon}
          {label}
        </button>
      </div>
    </BgIconPrefixStyled>
  );
};

BgIconPrefix.propTypes = {};

export default BgIconPrefix;
