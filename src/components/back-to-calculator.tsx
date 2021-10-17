import React from "react"
import { Alert } from "react-bootstrap"
import GatsbyLinkStyled from "./shared/gatsby-router-link-styled"

const BackToCalculator = () => {
  return (
    <Alert variant="secondary">
      <GatsbyLinkStyled page="/" color="gray" text="Back to Calculator" />{" "}
    </Alert>
  )
}

export default BackToCalculator
