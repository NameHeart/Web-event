import React, { useEffect, useState } from 'react';
import cx from 'classnames';
// import PropTypes from 'prop-types'
import { TopTabStyled } from './styled';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const TopTab = ({ theme_standard, data }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const [_active, _setActive] = useState();

  useEffect(() => {
    if (location) {
      const splitPathname = location.pathname.split('/');
      if (splitPathname[3]) {
        _setActive(splitPathname[3]);
      } else {
        _setActive(data[0].key);
      }
    }
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  const _handleClickMenu = (e) => {
    navigate(e.path);
    _setActive(e.key);
  };

  return (
    <TopTabStyled>
      <div className={customClass}>
        <div className="top_tap_header_layout">
          {data &&
            data.map((e, i) => (
              <div
                key={i}
                className={`header_item ${_active === e.key ? 'acitve' : ''}`}
                onClick={() => _handleClickMenu(e)}
              >
                {e.name}
              </div>
            ))}
        </div>
        <div className="top_tap_body_layout">
          <Outlet />
        </div>
      </div>
    </TopTabStyled>
  );
};

TopTab.propTypes = {};

export default TopTab;
