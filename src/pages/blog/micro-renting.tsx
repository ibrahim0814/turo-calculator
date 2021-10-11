import React from "react"
import { Alert } from "react-bootstrap"
import ColoredALink from "../../components/shared/colored-a-link"
import GatsbyLinkStyled from "../../components/shared/gatsby-router-link-styled"
import Layout from "../../components/shared/layout"

const MicroRenting = () => {
  return (
    <Layout>
      <Alert variant="secondary">
        <GatsbyLinkStyled page="/" color="gray" text="Back to Calculator" />{" "}
      </Alert>{" "}
      <div style={{ padding: "1rem" }}>
        <h2>What is micro-renting?</h2>
        <p>
          Micro-leasing refers to the model of buying/leasing out a car from a
          dealership and then renting it out periodically on a third-party
          platform such as{" "}
          <ColoredALink
            text="Turo"
            color="gray"
            link="https://turo.com/us/en/car-rental/united-states"
          />
        </p>
      </div>
    </Layout>
  )
}

export default MicroRenting
