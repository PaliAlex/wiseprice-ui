export interface IPropertyValuation {
    hpiIndex: IHpiIndex[],
    paidPrice: IPaidPrice[]
    valuation: {
        price: number,
        desc: string
    }
}

export interface IPaidPrice {
    date: string,
    price: number
}

export interface IHpiIndex {
    averagePrice: number,
    date: string,
    index: number,
    oneMonthChange: number,
    twelveMonthChange: number,
}
