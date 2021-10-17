import React, { useReducer } from "react"
import { Form, InputGroup, FormControl } from "react-bootstrap"
import {
  IOperatingExpensesState,
  IOperatingExpenses,
} from "../../interfaces/interfaces"
import SectionHeader from "./section-header"

const initialState: IOperatingExpensesState = {
  insurance: 100,
  maintainance: 50,
  fuel: 100,
  misc: 25,
  totalMonthlyCost: 275,
}

const calculateMonthlyOperatingCost = (details: IOperatingExpensesState) => {
  return details.fuel + details.insurance + details.maintainance + details.misc
}

const reducer = (
  state: IOperatingExpensesState,
  action
): IOperatingExpensesState => {
  let value = Number(action.payload.target.value)

  if (value < 0) {
    value = 0
  }

  let newState: IOperatingExpensesState = state

  if (action.type === "insurance") {
    newState = { ...state, insurance: value }
  } else if (action.type === "insurance") {
    newState = { ...state, maintainance: value }
  } else if (action.type === "fuel") {
    newState = { ...state, fuel: value }
  } else if (action.type === "misc") {
    newState = { ...state, misc: value }
  }

  let newTotalMonthlyOperatingCost = calculateMonthlyOperatingCost(newState)

  return { ...newState, totalMonthlyCost: newTotalMonthlyOperatingCost }
}

const OperatingExpenses = (props: IOperatingExpenses) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <SectionHeader
        title="Expenses"
        sectionMonthlyCostOrIncome={state.totalMonthlyCost}
      />
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text>Insurance:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="insurance payment per month"
            onChange={e => dispatch({ type: "insurance", payload: e })}
            defaultValue={100}
          />
          <InputGroup.Text>$/month</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Cost of fuel:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="cost of fuel per month"
            onChange={e => dispatch({ type: "fuel", payload: e })}
            defaultValue={100}
          />
          <InputGroup.Text>$/month</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Maintainance:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="cost of maintainance per month"
            onChange={e => dispatch({ type: "maintainance", payload: e })}
            defaultValue={50}
          />
          <InputGroup.Text>$/month</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Micellaneous:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="miscellaneous costs per month"
            onChange={e => dispatch({ type: "misc", payload: e })}
            defaultValue={25}
          />
          <InputGroup.Text>$/month</InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  )
}

export default OperatingExpenses
