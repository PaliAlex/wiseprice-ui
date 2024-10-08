import React from 'react';
import './App.css';
import {MainComponent} from "./components/main/MainComponent";
import {AppLogo, MainContainer} from "./components/main/styles";

const App = () => {
    return (
        <MainContainer>
            <AppLogo>LOGO</AppLogo>
            <MainComponent/>
        </MainContainer>
    );
};
export default App;
