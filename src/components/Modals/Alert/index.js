import React, { useState, forwardRef, useImperativeHandle } from 'react';
// import PropTypes from 'prop-types'
import { AlertStyled } from './styled';
import Buttons from '../../Buttons';

const Alert = forwardRef((props, ref) => {
  const [_modalVisible, _setModalVisible] = useState(false);
  const [_tempValue, _setTempValue] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal({
      theme,
      title,
      description,
      data,
      btnLabel1,
      onEvent1,
      btnLabel2,
      onEvent2,
    }) {
      _setTempValue({
        theme,
        title,
        description,
        data,
        btnLabel1,
        onEvent1,
        btnLabel2,
        onEvent2,
      });
      _handleClickEnbModal();
    },
  }));

  // ENABLE DISABLE
  // ====================================
  // ====================================
  const _handleClickEnbModal = () => {
    const body = document.body;
    body.style.overflow = 'hidden';
    _setModalVisible(true);
  };
  const _handleClickDisModal = () => {
    const body = document.body;
    body.style.overflow = 'auto';
    _setModalVisible(false);
  };

  // CANCEL COMFIRM
  // ====================================
  // ====================================
  const handleClickCancelModal = () => {
    _handleClickDisModal();
  };
  const _onConfirm = (key) => {
    if (key === 1) {
      _tempValue.onEvent1 && _tempValue.onEvent1();
    }
    if (key === 2) {
      _tempValue.onEvent2 && _tempValue.onEvent2();
    }
  };

  return !_modalVisible ? (
    <></>
  ) : (
    <AlertStyled>
      <div className="backdrop" onClick={_handleClickDisModal} />
      <div
        className={`alert_body ${_tempValue?.theme ? _tempValue?.theme : ''}`}
      >
        <div className="alert_title">{_tempValue?.title}</div>
        <div className="alert_description">{_tempValue?.description}</div>
        <div className="alert_action_row">
          {_tempValue.btnLabel1 && (
            <div className="alert_action_col">
              <Buttons.BgStandard
                label={_tempValue?.btnLabel1}
                onClick={() => {
                  _onConfirm(1);
                  handleClickCancelModal();
                }}
              />
            </div>
          )}
          {_tempValue.btnLabel2 && (
            <div className="alert_action_col">
              <Buttons.BgStandard
                theme_cancel
                label={_tempValue?.btnLabel2}
                onClick={() => {
                  _onConfirm(2);
                  handleClickCancelModal();
                }}
              />
            </div>
          )}
        </div>
      </div>
    </AlertStyled>
  );
});

Alert.propTypes = {};

let refParent = null;

const RefLink = (e) => {
  refParent = e;
};

const AlertRefWrap = () => {
  const onRef = (e) => {
    RefLink(e);
  };
  return <Alert ref={onRef} />;
};

const showWrap = (e) => {
  refParent.openModal(e);
};

export const AlertControl = {
  show: (e) => showWrap(e),
};

export default AlertRefWrap;
