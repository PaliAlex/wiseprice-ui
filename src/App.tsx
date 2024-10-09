import React from 'react';
import './App.css';
import {MainComponent} from "./components/main/MainComponent";
import {AppLogo, AppLogoWrapper, MainContainer} from "./components/main/styles";
import myImage from './common/img/logo.jpg';

const App = () => {
    return (
        <MainContainer>
            <AppLogoWrapper>
                <AppLogo src={myImage} alt="Описание изображения" width={160} height={55} />
            </AppLogoWrapper>
            <MainComponent/>
        </MainContainer>
    );
};
export default App;
