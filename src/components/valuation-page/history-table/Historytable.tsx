import {Content, EmptyContentLabel, EmptyContentWrapper, Header, HeaderItem, TableWrapper} from "./styles";
import {IPaidPrice} from "../../../common/models/ValuationResponse";
import ExclamationSign from "../../../common/icons/ExclamationSign";

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
                        <HeaderItem>£{it.price}</HeaderItem>
                    </Content>
                ))
            }
        </TableWrapper>
    )
};

const EmptyContent = () => {
    return(
        <EmptyContentWrapper>
            <ExclamationSign />
            <EmptyContentLabel>
                No price history
            </EmptyContentLabel>
        </EmptyContentWrapper>
    )
}
