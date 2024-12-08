import { mount } from "marketing/MarketingApp"
import React, { useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"

export default function MainMarketingApp() {
    const ref = useRef(null)
    const history = useHistory()
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = history.location
                if (pathname !== nextPathName) {
                    history.push(nextPathName)
                }
            }
        })
        
        history.listen(onParentNavigate)
    }, [])
    return <div ref={ref} />
}
