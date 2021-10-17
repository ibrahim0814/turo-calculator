import React from "react"
import { IPillBadge } from "../../interfaces/interfaces"

const PillBadge = (props: IPillBadge) => {
  return (
    <span
      style={{
        backgroundColor: "gray",
        padding: "7px 10px 7px 10px",
        borderRadius: "15px",
        color: "white",
        fontSize: ".85rem",
      }}
    >
      {" "}
      {props.text}
    </span>
  )
}

export default PillBadge
