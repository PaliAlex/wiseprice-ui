import {IOption} from "../../common/models/IOption";
import {PropertyType} from "../../common/models/PropertyType";

export const propertyTypeOptions: IOption[] = [
    {
        value: PropertyType.Detached,
        label: 'Detached',
    },
    {
        value: PropertyType.SemiDetached,
        label: 'Semi-Detached',
    },
    {
        value: PropertyType.Terraced,
        label: 'Terraced',
    },
    {
        value: PropertyType.FlatsMaisonettes,
        label: 'Flats/Maisonettes',
    },
    {
        value: PropertyType.Other,
        label: 'Other',
    },
];