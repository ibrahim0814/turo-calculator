export interface IAlertWithLinkBootstrap {
  page: string
  color: string
  text: string
}

export interface ILeaseDetails {
  setLeaseOutput: Function
}

export interface IColoredALink {
  color: string
  text: string
  link: string
}

export interface ILeaseDetailsState {
  down: number
  monthlyLeasePayment: number
  leaseLength: number
  totalMonthlyCost: number
  totalCost: number
}

export interface ISectionTemplate {
  title: string
  sectionMonthlyCostOrIncome: number
  children?: JSX.Element | JSX.Element[]
  totalCost?: number
}

export interface IOperatingExpenses {
  setOpExpensesOutput: Function
}

export interface IOperatingExpensesState {
  insurance: number
  maintainance: number
  fuel: number
  misc: number
  totalMonthlyCost: number
}

export interface IExpectedIncome {
  setExpectedIncomeOutput: Function
}

export interface IExpectedIncomeState {
  costPerDay: number
  daysRented: number
  totalMonthlyIncome: number
}

export interface IPillBadge {
  text: string
}
