import React, { useReducer } from "react"
import { InputGroup, FormControl, Form } from "react-bootstrap"
import { ILeaseDetails, ILeaseDetailsState } from "../../interfaces/interfaces"
import { LeaseTypes } from "../../interfaces/enums"

const initialState: ILeaseDetailsState = {
  down: 2000,
  monthly: 200,
  leaseLength: LeaseTypes.ThirtySixMonth,
}

const reducer = (state: ILeaseDetailsState, action) => {
  let value = action.payload.target.value
  switch (action.type) {
    case "down":
      return { ...state, down: value }
    case "monthly":
      return { ...state, monthly: value }
    case "lease":
      return { ...state, leaseLength: value }
    default:
      throw new Error()
  }
}

const LeaseDetails = (props: ILeaseDetails) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <hr style={{ padding: "2.5px" }} />
      <h3>Lease Details</h3>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Down Payment:</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Down payment input"
            onChange={e => dispatch({ type: "down", payload: e })}
            value={state.down}
          />
          <InputGroup.Text id="basic-addon2">$</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">Lease Payment</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Monthly payment input"
            onChange={e => dispatch({ type: "monthly", payload: e })}
            value={state.monthly}
          />
          <InputGroup.Text id="basic-addon2">$/month</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">Length of Lease</InputGroup.Text>
          <FormControl
            type="number"
            aria-label="Length of lease input"
            onChange={e => dispatch({ type: "lease", payload: e })}
            value={state.leaseLength}
          />
          <InputGroup.Text id="basic-addon2"># months</InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  )
}

export default LeaseDetails
