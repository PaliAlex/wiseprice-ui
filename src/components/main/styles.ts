import styled from "styled-components";
import {Paper} from "@mui/material";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppLogoWrapper = styled.div`
  border: 1px solid rgb(229, 229, 229);

  width: 100%;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppLogo = styled.img`
  border-radius: 20px
`;