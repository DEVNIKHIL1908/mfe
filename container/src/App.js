import React from "react";

import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { Suspense } from "react";
import { lazy } from "react";
const preClasas = createGenerateClassName({
    productionPrefix: "co"
})

import Progress from "./components/Progress";
import { useState } from "react";
const MainMarketingApp = lazy(() => import("./components/MarketingApp"))
const MainAuthApp = lazy(() => import("./components/AuthApp"))

export default () => {
    const [isSignedIn, setIsSignedIn] = useState("")
    return <BrowserRouter>
        <StylesProvider generateClassName={preClasas}>
            <div>
                <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth" >
                            <MainAuthApp onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MainMarketingApp} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </BrowserRouter>


}