import { LeaseTypes } from "./enums";

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

export interface ILeaseDetailsState {
    down: number,
    monthly: number,
    leaseLength: LeaseTypes
}

