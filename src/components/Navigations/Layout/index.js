import React, { useState, useEffect } from 'react';
import cx from 'classnames';
// import PropTypes from 'prop-types'
import { LayoutStyled } from './styled';

const Layout = ({ theme_standard, value, tabList, onChange }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });

  const [_selected, _setSelected] = useState();

  useEffect(() => {
    if (value) {
      _setSelected(value);
    }
  }, [value]);

  const _handleClick = (index, e) => {
    _setSelected(e);
    onChange && onChange(index, e);
  };

  return (
    <LayoutStyled>
      <div className={customClass}>
        <div className="layout_container">
          {tabList &&
            Object.keys(tabList).map((e, i) => (
              <div
                key={i}
                className={`layout_item ${e === _selected ? 'active' : ''}`}
                onClick={() => _handleClick(i, tabList[e].key)}
              >
                {tabList[e].label}
              </div>
            ))}
        </div>
      </div>
    </LayoutStyled>
  );
};

Layout.propTypes = {};

export default Layout;
