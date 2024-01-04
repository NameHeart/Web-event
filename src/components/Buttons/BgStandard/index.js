import React from "react";
import cx from "classnames";
// import PropTypes from 'prop-types'
import { BgStandardStyled } from "./styled";

const BgStandard = ({
  theme_stadard_btn,
  theme_gray,
  theme_green,
  theme_red,
  theme_line,
  theme_yellow,
  theme_export_btn,
  theme_black,
  type = "button",
  label,
  onClick,
  disabled,
  color,
}) => {
  const customClass = cx({
    theme_stadard_btn: theme_stadard_btn,
    theme_gray: theme_gray,
    theme_green: theme_green,
    theme_export_btn: theme_export_btn,
    theme_red: theme_red,
    theme_yellow: theme_yellow,
    theme_black: theme_black,
    theme_line: theme_line,
  });
  return (
    <BgStandardStyled disabled={disabled} color={color}>
      <div className={customClass}>
        <button
          type={type}
          disabled={disabled}
          className="btn"
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    </BgStandardStyled>
  );
};

BgStandard.propTypes = {};

export default BgStandard;
