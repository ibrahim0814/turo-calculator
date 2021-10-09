import React from "react"
import { IAlertWithLinkBootstrap } from "../../interfaces/interfaces"
import { Link } from "gatsby"

const GatsbyLinkStyled = (props: IAlertWithLinkBootstrap) => {
  return (
    <Link to={`${props.page}`} style={{ color: `${props.color}` }}>
      {props.text}
    </Link>
  )
}

export default GatsbyLinkStyled
