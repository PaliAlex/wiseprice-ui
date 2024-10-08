import { makeAutoObservable } from 'mobx';
import {IPropertyValuation} from "../common/models/ValuationResponse";
import {formatDate} from "../common/utils/formatDate";

class PropertyValuationStore {
    propertyValuation: IPropertyValuation | null = null;

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
