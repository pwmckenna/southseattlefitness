import React from 'react'
import pattern from '../images/ecailles.png'
import * as COLORS from '../utils/colors'

export default ({ style, ...props }) => (
  <div
    style={{
      color: COLORS.WHITE,
      backgroundColor: COLORS.TEAL,
      backgroundImage: `url(${pattern})`,
      backgroundPosition: '50% 0',
      backgroundAttachment: 'scroll',
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
      borderTop: `2px solid ${COLORS.GREY}`,
      borderBottom: `2px solid ${COLORS.GREY}`,
      ...style,
    }}
    {...props}
  />
)
