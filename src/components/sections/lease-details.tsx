import React, { useReducer } from "react"
import { InputGroup, FormControl, Form } from "react-bootstrap"
import { ILeaseDetailsState, ISection } from "../../interfaces/interfaces"
import SectionHeader from "./section-header"

const initialState: ILeaseDetailsState = {
  down: 2000,
  monthlyLeasePayment: 200,
  leaseLength: 36,
  totalMonthlyCost: 255.55,
  totalCost: 9200,
}

const calculateTotalMonthlyLeaseCost = (
  leaseDetails: ILeaseDetailsState
): number => {
  let totalMonthlyCost: number
  if (leaseDetails.leaseLength >= 0 && leaseDetails.monthlyLeasePayment >= 0) {
    totalMonthlyCost =
      (leaseDetails.leaseLength * leaseDetails.monthlyLeasePayment +
        leaseDetails.down) /
      leaseDetails.leaseLength
  } else {
    totalMonthlyCost = 0
  }

  return totalMonthlyCost
}

const calculateTotalLeaseCost = (leaseDetails: ILeaseDetailsState): number => {
  let totalCost: number
  if (leaseDetails.leaseLength >= 0 && leaseDetails.monthlyLeasePayment >= 0) {
    totalCost =
      leaseDetails.leaseLength * leaseDetails.monthlyLeasePayment +
      leaseDetails.down
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
  let newTotalCost = calculateTotalLeaseCost(newState)

  newState = {
    ...newState,
    totalMonthlyCost: newTotalMonthlyCost,
    totalCost: newTotalCost,
  }
  return newState
}

const LeaseDetails = (props: ISection) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <SectionHeader
        title="Lease Details"
        sectionMonthlyCostOrIncome={state.totalMonthlyCost}
        totalCost={state.totalCost}
        type={props.type}
      />

      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text>Down Payment:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Down payment amount"
            onChange={e => dispatch({ type: "down", payload: e })}
            defaultValue={2000}
          />
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Lease Payment</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Monthly lease payment"
            onChange={e => dispatch({ type: "monthly", payload: e })}
            defaultValue={200}
          />
          <InputGroup.Text>$/month</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Length of Lease</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Length of lease input"
            onChange={e => dispatch({ type: "lease", payload: e })}
            defaultValue={36}
          />
          <InputGroup.Text># months</InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  )
}

export default LeaseDetails
