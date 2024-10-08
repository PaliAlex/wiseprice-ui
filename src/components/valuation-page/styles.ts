import styled from "styled-components";
import {Button} from "@mui/material";

export const ValuationPageContainer = styled.div`
  display: flex;
  
  width: 900px;
  margin-top: 40px;
`;

export const ValuationPart = styled.div`
    flex: 2;
`;

export const PaidPriceWrapper = styled.div`
    flex: 3;
`;

export const PriceWrapper = styled.div`
  border: 1px solid #807f7f;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #3a4146;
  justify-content: center;
  padding: 24px 16px;
`;
export const LabelStyled = styled.div`
  font-family: neueSingular-D, sans-serif;
  font-size: 1.25rem;
  color: #E3DDD6FF;
  margin-bottom: 15px;
`;

export const ValueStyled = styled.div`
  font-family: neueSingular-D, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
`;

export const DescriptionStyled = styled.div`
  font-family: neueSingular-D, sans-serif;
  font-size: 1rem;
  color: #ffffff;
`;

export const HistoryLabel = styled.h2`
  text-align: center;
  font-family: neueSingular-D, sans-serif;
  margin-bottom: 15px;
`;
export const ButtonWrapper = styled.div`
    margin-top: 30px;
`;
