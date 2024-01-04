import React from 'react'
import cx from 'classnames'
// import PropTypes from 'prop-types'
import { AaPlatformStyled } from './styled'

const AaPlatform = ({ theme_standard }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  })
  return (
    <AaPlatformStyled>
      <div className={customClass}>
        widgets
      </div>
    </AaPlatformStyled>
  )
}

AaPlatform.propTypes = {}

export default AaPlatform
