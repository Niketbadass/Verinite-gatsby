import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

import ChevronUp from '../icons/ChevronUp'
import './backtotop.scss'

const BackToTopItem = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [pageYOffset])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) {
    return false
  }
  return (
    <div
      className="scroll-to-top cursor-pointer float-right"
      onClick={scrollTop}
    >
      <ChevronUp />
    </div>
  )
}
export default BackToTopItem
