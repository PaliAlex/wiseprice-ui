import {AppLogo, MainContainer} from "./styles";
import {InputForm} from "../input-form/InputForm";

export const MainComponent = () => {
    return(
        <MainContainer>
            <AppLogo>LOGO</AppLogo>
            <InputForm />
        </MainContainer>
    )
}