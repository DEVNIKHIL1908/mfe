import React from "react";
import MainMarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom"
export default () => {
    return <BrowserRouter>
        <div>
            <Header />
            <MainMarketingApp />
        </div>
    </BrowserRouter>
}