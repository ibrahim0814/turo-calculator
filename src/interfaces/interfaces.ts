export interface IAlertWithLinkBootstrap {
    page: string
    color: string
    text: string
}

export interface ILeaseDetails {
    setLeaseOutput: Function
}

export interface IColoredALink {
    color: string,
    text: string
    link: string
}

export interface ILeaseDetailsState {
    down: number,
    monthlyLeasePayment: number,
    leaseLength: number
    totalMonthlyCost: number
}

