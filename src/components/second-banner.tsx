import React from "react"
import { Alert } from "react-bootstrap"
import GatsbyLinkStyled from "./shared/gatsby-router-link-styled"

interface ISecondBanner {}

const SecondBanner = (props: ISecondBanner) => {
  return (
    <h3 style={{ textAlign: "center" }}>
      <Alert variant="secondary">
        Estimate earnings from{" "}
        <GatsbyLinkStyled
          page="/blog/micro-renting"
          color="gray"
          text="micro-renting"
        />{" "}
        a car on Turo
      </Alert>{" "}
    </h3>
  )
}

export default SecondBanner
