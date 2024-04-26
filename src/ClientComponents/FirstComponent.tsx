"use client"
import {ComponentType, useEffect, useState} from "react";

export const FirstComponent: ComponentType = () => {
    const [state, setState] = useState<null | string>(null)
    useEffect(() => {
    const fetchData = async () => {
        const url = "http://209.38.198.12/api"
        const result = await fetch(url)
        setState(await result.text())
    }
    fetchData()
}, [])
    return (
            <div className='wrapper'>
                {state}
            </div>
    )
}
