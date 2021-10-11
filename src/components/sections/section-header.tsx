import React from "react"

interface ISectionTemplate {
  title: string
  sectionMonthlyCostOrIncome: number
  children?: JSX.Element | JSX.Element[]
}

const SectionHeader = (props: ISectionTemplate) => {
  return (
    <div>
      <hr style={{ padding: "2.5px" }} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3 style={{ flexGrow: 1 }}>{props.title}</h3>
        <div
          style={{
            flexGrow: 1,
            textAlign: "right",
          }}
        >
          <p>
            <span
              style={{
                backgroundColor: "gray",
                padding: "10px",
                borderRadius: "5px",
                color: "white",
                fontSize: ".9rem",
              }}
            >
              {" "}
              ${props.sectionMonthlyCostOrIncome.toFixed(2)} /month
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader
