import React from "react"
import { IColoredALink } from "../../interfaces/interfaces"

const ColoredALink = (props: IColoredALink) => {
  return (
    <a style={{ color: `${props.color}` }} href={props.link} target="_blank">
      {props.text}
    </a>
  )
}

export default ColoredALink
