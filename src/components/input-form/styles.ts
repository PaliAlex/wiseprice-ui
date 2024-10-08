import styled from "styled-components";
import {Button, TextField} from "@mui/material";
import InfoIcon from "../../common/icons/Info";

export const FormContainer = styled.div`
  display: flex;
  
  width: 900px;
  margin-top: 40px;
`;

export const InputWrapper = styled.div`
  margin-right: 20px;
  flex: 3;
`;
export const InfoWrapper = styled.div`
  display: flex;
  background: rgb(58, 65, 70);
  border-radius: 8px;
  border: 2px solid rgb(227, 221, 209);
  flex: 2;
  color: aliceblue;
  font-size: 20px;
  font-family: NeueSingularD, sans-serif;
  text-align: left;
`;

export const InfoIconStyled = styled(InfoIcon)`
  flex: 1;
  padding: 10px;
  margin-top: 10px;
`;

export const TextContainer = styled.div`
  flex: 9;
  padding-right: 20px;
`;

export const TextFieldStyled = styled(TextField)`
  width: 100%
`;

export const ButtonStyled = styled(Button)`
  background-color: red;
`;