import React from "react"
import { Alert } from "react-bootstrap"
import ColoredALink from "../../components/colored-a-link"
import GatsbyLinkStyled from "../../components/gatsby-link-styled"
import Layout from "../../components/layout"

const MicroLeasing = () => {
  return (
    <Layout>
      <Alert variant="secondary">
        <GatsbyLinkStyled page="/" color="gray" text="Back to Calculator" />{" "}
      </Alert>{" "}
      <div style={{ padding: "1rem" }}>
        <h2>What is micro-leasing</h2>
        <p>
          Micro-leasing refers to the model of leasing out a car from a
          dealership and then renting it out periodically on a third-party
          platform such as{" "}
          <ColoredALink text="Turo" color="gray" link="https://turo.com" />
        </p>
      </div>
    </Layout>
  )
}

export default MicroLeasing
