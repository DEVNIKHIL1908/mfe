import {mount} from "marketing/MarketingApp"
import React, { useEffect, useRef } from "react"


export default function MainMarketingApp(){
    const ref = useRef(null)
    useEffect(()=>{
        mount(ref.current)
    },[])
    return <div ref={ref}/>
}
