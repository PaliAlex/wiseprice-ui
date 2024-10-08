import {
    ButtonWrapper,
    DescriptionStyled, HistoryLabel,
    LabelStyled,
    PaidPriceWrapper,
    PriceWrapper,
    ValuationPageContainer, ValuationPart,
    ValueStyled
} from "./styles";
import {observer} from "mobx-react-lite";
import propertyValuationStore from "../../store/store";
import {HistoryTable} from "./history-table/Historytable";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


export const ValuationPage = observer(() => {
    const propertyValuation = propertyValuationStore.propertyValuation;
    const navigate = useNavigate();

    const onClick = () => {

        navigate('/');
    }
    return(
        <>
            <ValuationPageContainer>
                <ValuationPart>
                    <PriceWrapper>
                        <LabelStyled>
                            Valuation price
                        </LabelStyled>
                        <ValueStyled>
                            £{propertyValuation?.valuation.price}
                        </ValueStyled>
                    </PriceWrapper>
                    <PriceWrapper>
                        <LabelStyled>
                            Description:
                        </LabelStyled>
                        <DescriptionStyled>
                            {propertyValuation?.valuation.desc}
                        </DescriptionStyled>
                    </PriceWrapper>
                </ValuationPart>
                <PaidPriceWrapper>
                    <HistoryLabel>
                        Price history
                    </HistoryLabel>
                    <HistoryTable array={propertyValuation?.paidPrice} />
                </PaidPriceWrapper>
            </ValuationPageContainer>
            <ButtonWrapper>
                <Button variant="outlined" size="large" onClick={onClick}>
                    Go back to calculating
                </Button>
            </ButtonWrapper>
        </>
    )
});
