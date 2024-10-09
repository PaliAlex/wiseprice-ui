import {Content, EmptyContentLabel, EmptyContentWrapper, Header, HeaderItem, TableWrapper} from "./styles";
import {IPaidPrice} from "../../../common/models/ValuationResponse";
import ExclamationSign from "../../../common/icons/ExclamationSign";
import {formatToGBP} from "../../../common/utils/formatCurrency";

interface IHistoryTable {
    array?: IPaidPrice[]
}

export const HistoryTable = ({array}: IHistoryTable) => {
    const isEmptyContent = !array || array.length === 0;

    return(
        <TableWrapper>
            <Header>
                <HeaderItem>Date</HeaderItem>
                <HeaderItem>Price</HeaderItem>
            </Header>
            {isEmptyContent && <EmptyContent />}
            {
                !isEmptyContent && array.map(it => (
                    <Content>
                        <HeaderItem>{it.date}</HeaderItem>
                        <HeaderItem>{formatToGBP(it.price)}</HeaderItem>
                    </Content>
                ))
            }
        </TableWrapper>
    )
};

export const EmptyContent = () => {
    return(
        <EmptyContentWrapper>
            <ExclamationSign />
            <EmptyContentLabel>
                No price history
            </EmptyContentLabel>
        </EmptyContentWrapper>
    )
}
