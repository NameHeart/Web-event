import React from 'react';
// import PropTypes from 'prop-types'
import { MainStyled } from './styled';
import {
  FooterWidget,
  NavbarWidget,
  // PopupWidget
} from '../../../widgets';

const Main = ({ children }) => {
  return (
    <MainStyled>
      <NavbarWidget />
      {/* <PopupWidget /> */}
      <div className="body_mainlayout">{children}</div>
      <FooterWidget />
    </MainStyled>
  );
};

Main.propTypes = {};

export default Main;
