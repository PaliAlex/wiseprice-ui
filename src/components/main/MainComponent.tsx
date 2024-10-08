import React from "react";
import {InputPage} from "../input-page/InputPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ValuationPage} from "../valuation-page/ValuationPage";

export const MainComponent = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={InputPage} />

                <Route path="/valuation-page" Component={ValuationPage} />
            </Routes>
        </Router>
    )
}