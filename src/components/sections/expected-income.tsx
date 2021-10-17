import React, { useReducer } from "react"
import { Form, InputGroup, FormControl } from "react-bootstrap"
import {
  IExpectedIncomeState,
  IExpectedIncome,
} from "../../interfaces/interfaces"
import SectionHeader from "./section-header"

const initialState: IExpectedIncomeState = {
  costPerDay: 80,
  daysRented: 10,
  totalMonthlyIncome: 800,
}

const calculateMonthlyIncome = (details: IExpectedIncomeState) => {
  return details.costPerDay * details.daysRented
}

const reducer = (state: IExpectedIncomeState, action): IExpectedIncomeState => {
  let value = Number(action.payload.target.value)

  if (value < 0) {
    value = 0
  }

  let newState: IExpectedIncomeState = state

  if (action.type === "costPerDay") {
    newState = { ...state, costPerDay: value }
  } else if (action.type === "daysRented") {
    newState = { ...state, daysRented: value }
  }

  let newTotalMonthlyIncome = calculateMonthlyIncome(newState)

  return { ...newState, totalMonthlyIncome: newTotalMonthlyIncome }
}

const ExpectedIncome = (props: IExpectedIncome) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <SectionHeader
        title="Income"
        sectionMonthlyCostOrIncome={state.totalMonthlyIncome}
      />
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text>Price per day:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="USD"
            onChange={e => dispatch({ type: "costPerDay", payload: e })}
            defaultValue={80}
          />
          <InputGroup.Text>$/day</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Days rented</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Monthly payment"
            onChange={e => dispatch({ type: "daysRented", payload: e })}
            defaultValue={10}
          />
          <InputGroup.Text>/month</InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  )
}

export default ExpectedIncome
