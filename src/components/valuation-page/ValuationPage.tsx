import {DescriptionWrapper, PriceWrapper, ValuationPageContainer} from "./styles";

export interface IValuationPage {
    price: number,
    description: string,
}

export const ValuationPage = () => {
    return(
        <ValuationPageContainer>
            <PriceWrapper>
                100,000$
            </PriceWrapper>
            <DescriptionWrapper>

            </DescriptionWrapper>
        </ValuationPageContainer>
    )
}