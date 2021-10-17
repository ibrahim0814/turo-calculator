import * as React from "react"
import LeaseDetails from "../components/sections/lease-details"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import OperatingExpenses from "../components/sections/operating-expenses"
import ExpectedIncome from "../components/sections/expected-income"
import Spacer from "../components/shared/spacer"
import SecondBanner from "../components/second-banner"
import { SectionType } from "../interfaces/enums"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Turo Earnings Calculator" />

      <SecondBanner />

      <ExpectedIncome type={SectionType.IncomingMoney} />

      <Spacer />

      <LeaseDetails type={SectionType.OutgoingMoney} />

      <Spacer />

      <OperatingExpenses type={SectionType.OutgoingMoney} />

      <Spacer />
    </Layout>
  )
}

export default IndexPage
