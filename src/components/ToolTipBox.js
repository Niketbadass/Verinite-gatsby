import React from 'react'
import ReactToolTip from 'react-tooltip'
import styled from 'styled-components'

const StyledReactToolTip = styled(ReactToolTip)`
  border-radius: 10px !important;
  max-width: 285px !important;
  font-size: 11.5px !important;
  opacity: 1 !important;
  line-height: 16px !important;
  padding: 12px 12px !important;
`
const Tooltip = props => {
  const {
    toolTipText,
    idToolTip,
    tipClass,
    image,
    setTooltips,
    tooltips,
  } = props

  const setReference = reference => {
    if (reference && !tooltips.hasOwnProperty(idToolTip)) {
      setTooltips({
        ...tooltips,
        [idToolTip]: reference,
      })
    }
  }

  return (
    <>
      <div
        className={`d-inline-block img_block ${tipClass}`}
        data-for={idToolTip}
        data-tip={toolTipText}
        ref={setReference}
      >
        <img src={image} alt="" />
      </div>
      <StyledReactToolTip
        id={idToolTip}
        place="bottom"
        multiline={true}
        backgroundColor="white"
        effect="solid"
        textColor="#142270"
      />
    </>
  )
}
export default Tooltip
