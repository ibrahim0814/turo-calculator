import React, { useReducer } from "react"
import { InputGroup, FormControl, Form } from "react-bootstrap"
import { ILeaseDetails, ILeaseDetailsState } from "../../interfaces/interfaces"
import SectionHeader from "./section-header"

const initialState: ILeaseDetailsState = {
  down: 2000,
  monthlyLeasePayment: 200,
  leaseLength: 36,
  totalMonthlyCost: 255.55,
}

const calculateTotalMonthlyLeaseCost = (
  leaseDetails: ILeaseDetailsState
): number => {
  let totalCost: number
  if (leaseDetails.leaseLength >= 0 && leaseDetails.monthlyLeasePayment >= 0) {
    totalCost =
      (leaseDetails.leaseLength * leaseDetails.monthlyLeasePayment +
        leaseDetails.down) /
      leaseDetails.leaseLength
  } else {
    totalCost = 0
  }

  return totalCost
}

const reducer = (state: ILeaseDetailsState, action): ILeaseDetailsState => {
  let value = Number(action.payload.target.value)

  let newState: ILeaseDetailsState = state

  if (action.type === "down") {
    newState = {
      ...state,
      down: value,
    }
  } else if (action.type === "monthly") {
    newState = {
      ...state,
      monthlyLeasePayment: value,
    }
  } else if (action.type === "lease") {
    newState = {
      ...state,
      leaseLength: value,
    }
  }

  let newTotalMonthlyCost = calculateTotalMonthlyLeaseCost(newState)

  newState = {
    ...newState,
    totalMonthlyCost: newTotalMonthlyCost,
  }
  return newState
}

const LeaseDetails = (props: ILeaseDetails) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <SectionHeader
        title="Lease Details"
        sectionMonthlyCostOrIncome={state.totalMonthlyCost}
      />

      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Down Payment:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Down payment input"
            onChange={e => dispatch({ type: "down", payload: e })}
            defaultValue={2000}
          />
          <InputGroup.Text id="basic-addon2">$</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">Lease Payment</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Monthly payment input"
            onChange={e => dispatch({ type: "monthly", payload: e })}
            defaultValue={200}
          />
          <InputGroup.Text id="basic-addon2">$/month</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">Length of Lease</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Length of lease input"
            onChange={e => dispatch({ type: "lease", payload: e })}
            defaultValue={36}
          />
          <InputGroup.Text id="basic-addon2"># months</InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  )
}

export default LeaseDetails
