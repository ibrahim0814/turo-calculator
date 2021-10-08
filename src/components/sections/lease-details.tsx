import * as React from "react"
import { InputGroup, FormControl, Form, Button } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { ILeaseDetails } from "../../interfaces/interfaces"

const LeaseDetails = (props: ILeaseDetails) => {
  const [total, setTotal] = React.useState(0)

  return (
    <>
      <hr style={{ padding: "2.5px" }} />
      <h3>Lease Details</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Down Payment:</InputGroup.Text>
        <FormControl
          type="number"
          aria-label="USD"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon2">$</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Lease Payment</InputGroup.Text>
        <FormControl
          type="number"
          aria-label="Monthly payment"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">$/month</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">Length of Lease</InputGroup.Text>
        <FormControl
          type="number"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
        <InputGroup.Text id="basic-addon2"># months</InputGroup.Text>
      </InputGroup>
    </>
  )
}

export default LeaseDetails
