import { makeAutoObservable } from 'mobx';
import {IPropertyValuation} from "../common/models/ValuationResponse";
import {formatDate} from "../common/utils/formatDate";

class PropertyValuationStore {
    propertyValuation: IPropertyValuation | null = {
        paidPrice: [
            {
            date: '2024-01-06',
            price: 50000
            },
            {
                date: '2024-01-07',
                price: 60000
            },
            {
                date: '2024-01-08',
                price: 40000
            }
        ],
        valuation: {
            desc: 'The outcome of the model why it thinks the valuation.price is correct,The outcome of the model why it thinks the valuation.price is correctThe outcome of the model why it thinks the valuation.price is correct',
            price: 100000
        }
    }

    constructor() {
        makeAutoObservable(this);
    }

    updatePropertyValuation(propertyValuation: IPropertyValuation) {
        this.propertyValuation = this.mapPropertyValuation(propertyValuation);
    }

    clearPropertyValuation() {
        this.propertyValuation = null;
    }

    private mapPropertyValuation(propertyValuation: IPropertyValuation): IPropertyValuation {
        return ({
            valuation: propertyValuation.valuation,
            paidPrice: propertyValuation.paidPrice.map(it => {
                return({
                    price: it.price,
                    date: formatDate(it.date)
                })
            })
        })
    }
}

const propertyValuationStore = new PropertyValuationStore();
export default propertyValuationStore;
