import React from "react";
import MainMarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
const preClasas = createGenerateClassName({
    productionPrefix: "co"
})
export default () => {
    return <BrowserRouter>
        <StylesProvider generateClassName={preClasas}>
            <div>
                <Header />
                <MainMarketingApp />
            </div>
        </StylesProvider>
    </BrowserRouter>
}