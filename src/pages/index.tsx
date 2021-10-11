import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { InputGroup, FormControl, Form, Button, Alert } from "react-bootstrap"
import LeaseDetails from "../components/sections/lease-details"

import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import GatsbyLinkStyled from "../components/shared/gatsby-router-link-styled"
import { ILeaseDetailsState } from "../interfaces/interfaces"
import OperatingExpenses from "../components/sections/operating-expenses"
import ExpectedIncome from "../components/sections/expected-income"

const initialState = {
  lease: 0,
  operating: 0,
  income: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "lease":
      return { ...state, lease: action.payload }
    case "decrement":
      return { ...state }
    default:
      throw new Error()
  }
}

const IndexPage = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const setLeaseOutput = (leaseOutput: number) => {
    dispatch({ type: "lease", payload: leaseOutput })
  }

  const setOpExpensesOutput = (operatingExpensesTotal: number) => {
    dispatch({ type: "operating", payload: operatingExpensesTotal })
  }

  const setExpectedIncomeOutput = (expectedIncomeTotal: number) => {
    dispatch({ type: "income", payload: expectedIncomeTotal })
  }

  return (
    <Layout>
      <Seo title="Turo Earnings Calculator" />

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

      <>
        <LeaseDetails setLeaseOutput={setLeaseOutput} />

        <h1></h1>

        <OperatingExpenses setOpExpensesOutput={setOpExpensesOutput} />

        <h1></h1>

        <ExpectedIncome setExpectedIncomeOutput={setExpectedIncomeOutput} />

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
