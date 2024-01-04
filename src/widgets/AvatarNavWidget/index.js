import { useState, useEffect } from "react";
import { AvatarNavWidgetStyled } from "./styled";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useComponentVisible } from "utils/functions/detectClickOutside";
import { ROUTE_PATH } from "utils/constants/routePath";
import theme from "styles/theme.json";
import { useSelector } from "react-redux";
import { Displays } from "components";

const AvatarNavWidget = () => {
  const { ref, isComponentVisible } = useComponentVisible();
  const navigate = useNavigate();
  const { authenRedux } = useSelector((state) => state);
  const [_active, _setActive] = useState(false);

  useEffect(() => {
    if (isComponentVisible === false) {
      _setActive(false);
    }
  }, [isComponentVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  const _handleClick = () => {
    _setActive(!_active);
  };

  const _handleClickLogout = () => {
    _setActive(false);
    navigate(ROUTE_PATH.ROOT);
  };

  return (
    <AvatarNavWidgetStyled ref={ref}>
      <div className="avatar_nav_container" onClick={_handleClick}>
        <div className="nui_left_col">
          <div className="il_title">Admistrator</div>
          <div className="il_sub_title">{`${authenRedux.firstname} ${authenRedux.lastname}`}</div>
        </div>
        <div className="nui_right_col">
          <Displays.Avatar />
        </div>
      </div>
      {_active && (
        <div className="avatar_nav_menu">
          <div className="atn_menu_item" onClick={_handleClickLogout}>
            <MdLogout color={theme.COLORS.RED_1} />
            <span>Logout</span>
          </div>
        </div>
      )}
    </AvatarNavWidgetStyled>
  );
};

export default AvatarNavWidget;
