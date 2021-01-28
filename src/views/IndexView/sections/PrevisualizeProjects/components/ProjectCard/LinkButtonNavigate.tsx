import React, { memo } from "react"
import Subtitle from "common/Texts/Subtitle"
import useVisibility from "hooks/useVisibility"
import { BsArrowRightShort } from "react-icons/bs"
import { useSpring } from "react-spring"

function LinkButtonNavigate({onClick}) {
  const { ref, visible } = useVisibility()
  const transition = useSpring({
    transform: visible ? "translateX(0%)" : "translateX(70px)",
  });
  
  return (
    <Subtitle
      style={transition}
      className="flex items-center mt-8 cursor-pointer"
      ref={ref}
      onClick={onClick}
    >
      VIEW DETAILS <BsArrowRightShort className="mr-3" size={30} />
    </Subtitle>
  )
}

export default memo(LinkButtonNavigate);