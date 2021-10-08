import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { InputGroup, FormControl, Form, Button, Alert } from "react-bootstrap"
import LeaseDetails from "../components/sections/lease-details"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GatsbyLinkStyled from "../components/gatsby-link-styled"

const initialState = {
  lease: {
    down: 3000,
    monthly: 300,
    leaseLen: 36,
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const IndexPage = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <Layout>
      <Seo title="Turo Earnings Calculator" />

      <h2 style={{ textAlign: "center" }}>
        <Alert variant="secondary">
          Estimate earnings from{" "}
          <GatsbyLinkStyled
            page="/blog/micro-leasing"
            color="gray"
            text="micro-leasing"
          />{" "}
          a car on Turo
        </Alert>{" "}
      </h2>

      <>
        <LeaseDetails />

        <h1></h1>

        <hr style={{ padding: "1.5px" }} />

        <h3>Operation Costs</h3>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Insurance:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="USD"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon2">$/month</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">Maintainance:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Monthly payment"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">$/month</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            Cost of gas/electricy:
          </InputGroup.Text>
          <FormControl
            type="number"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
          <InputGroup.Text id="basic-addon2">$/month</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">Micellaneous:</InputGroup.Text>
          <FormControl
            type="number"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
          <InputGroup.Text id="basic-addon2">$/month</InputGroup.Text>
        </InputGroup>

        <h1></h1>

        <hr style={{ padding: "1.5px" }} />

        <h3>Anticipated Income</h3>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Cost to rent:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="USD"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon2">$/day</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">Days rented</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Monthly payment"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">/month</InputGroup.Text>
        </InputGroup>

        <h1></h1>

        <hr style={{ padding: "1.5px" }} />

        <Button variant="secondary" style={{ width: "100%" }}>
          Calculate
        </Button>
      </>
    </Layout>
  )
}

export default IndexPage
