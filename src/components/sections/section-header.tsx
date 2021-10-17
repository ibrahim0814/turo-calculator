import React from "react"
import { ISectionTemplate } from "../../interfaces/interfaces"
import PillBadge from "../shared/pill-badge"

const SectionHeader = (props: ISectionTemplate) => {
  return (
    <div>
      <hr style={{ padding: "2.5px" }} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3 style={{ flexGrow: 1, fontSize: "1.2rem" }}>{props.title}</h3>
        <div
          style={{
            flexGrow: 1,
            textAlign: "right",
          }}
        >
          <p>
            <PillBadge
              text={`$${props.sectionMonthlyCostOrIncome.toFixed(2)} /month`}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader
