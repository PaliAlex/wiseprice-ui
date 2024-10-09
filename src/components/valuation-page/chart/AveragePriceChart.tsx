import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Label,
} from "recharts";
import {ChartLabel, PriceChartContainer} from "./styles";
import {observer} from "mobx-react-lite";
import propertyValuationStore from "../../../store/store";
import {EmptyContent} from "../history-table/Historytable";


export const AveragePriceChart = observer(() => {
    const data = propertyValuationStore.propertyValuation?.hpiIndex;

    if(!data || data.length === 0) {
        return (
            <PriceChartContainer>
                <ChartLabel>
                    Changing price by date
                </ChartLabel>
                <EmptyContent />
            </PriceChartContainer>
        )
    }
    return (
        <PriceChartContainer>
            <ChartLabel>
                Changing price by date
            </ChartLabel>
            <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{ top: 40, right: 30, left: 50, bottom: 20 }}
            >
                <CartesianGrid strokeDasharray="2 2"/>
                <XAxis dataKey="date" padding={{left: 30, right: 30}} />
                <YAxis>
                    <Label
                        value="Price, £"
                        position="insideTopLeft"
                        offset={-30}
                    />
                </YAxis>
                <Tooltip/>
                <Line type="monotone" dataKey="averagePrice" stroke="#82ca9d"/>
            </LineChart>
        </PriceChartContainer>
    );
})
