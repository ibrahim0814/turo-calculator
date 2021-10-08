export interface IAlertWithLinkBootstrap {
    page: string
    color: string
    text: string
}

export interface ILeaseDetails {
    total: number,
    setTotal: ()=>{}
}

export interface IColoredALink {
    color: string,
    text: string
    link: string
}