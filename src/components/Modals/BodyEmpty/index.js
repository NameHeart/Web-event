import React, { useEffect } from 'react';
// import PropTypes from 'prop-types'
import { BodyEmptyStyled } from './styled';

const BodyEmpty = ({ isShowModal, onCloseModal, children, isForceAction }) => {
  useEffect(() => {
    if (isShowModal) {
      _handleClickEnbModal();
    } else {
      const body = document.body;
      body.style.overflow = 'auto';
    }
  }, [isShowModal]); // eslint-disable-line react-hooks/exhaustive-deps

  const _handleClickEnbModal = () => {
    const body = document.body;
    body.style.overflow = 'hidden';
  };

  const _handleClickDisModal = () => {
    if (!isForceAction) {
      onCloseModal && onCloseModal();
    }
    const body = document.body;
    body.style.overflow = 'auto';
  };

  return !isShowModal ? (
    <></>
  ) : (
    <BodyEmptyStyled>
      <div className="backdrop" onClick={_handleClickDisModal} />
      {children}
    </BodyEmptyStyled>
  );
};

BodyEmpty.propTypes = {};

export default BodyEmpty;
