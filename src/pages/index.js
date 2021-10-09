import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { InputGroup, FormControl, Form, Button, Alert } from "react-bootstrap"
import LeaseDetails from "../components/sections/lease-details"

import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import GatsbyLinkStyled from "../components/shared/gatsby-router-link-styled"

const initialState = {
  lease: 0,
  operating: 0,
  income: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state }
    case "decrement":
      return { ...state }
    default:
      throw new Error()
  }
}

const IndexPage = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <Layout>
      <Seo title="Turo Earnings Calculator" />

      <h3 style={{ textAlign: "center" }}>
        <Alert variant="secondary">
          Estimate earnings from{" "}
          <GatsbyLinkStyled
            page="/blog/micro-leasing"
            color="gray"
            text="micro-leasing"
          />{" "}
          a car on Turo
        </Alert>{" "}
      </h3>

      <>
        <LeaseDetails setLeaseOutput={() => dispatch({ type: "decrement" })} />

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
