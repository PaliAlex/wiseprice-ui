import {
    ButtonWrapper,
    DescriptionStyled, ChapterLabel,
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
import {LeftArrow} from "../../common/icons/LeftArrow";
import {AveragePriceChart} from "./chart/AveragePriceChart";
import {formatToGBP} from "../../common/utils/formatCurrency";


export const ValuationPage = observer(() => {
    const propertyValuation = propertyValuationStore.propertyValuation;
    const navigate = useNavigate();

    const onClick = () => {

        navigate('/');
    }
    return(
        <>
            <ButtonWrapper>
                <Button variant="text" size="large" onClick={onClick}>
                    <LeftArrow /> Go back to calculating
                </Button>
            </ButtonWrapper>
            <ValuationPageContainer>
                <ValuationPart>
                    <PriceWrapper>
                        <LabelStyled>
                            Valuation price
                        </LabelStyled>
                        <ValueStyled>
                            {formatToGBP(propertyValuation?.valuation.price)}
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
                    <ChapterLabel>
                        Price history
                    </ChapterLabel>
                    <HistoryTable array={propertyValuation?.paidPrice} />
                </PaidPriceWrapper>
            </ValuationPageContainer>
            <AveragePriceChart />
        </>
    )
});
