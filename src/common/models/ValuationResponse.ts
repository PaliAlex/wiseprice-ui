export interface IPropertyValuation {
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
