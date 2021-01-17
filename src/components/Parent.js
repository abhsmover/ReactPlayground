import React, {useState} from "react"
import Child from "./Child"

export default function (props) {
    const [status, setStatus] = useState("Initial State")
    const handleUpdateStatus = (str) => {
        setStatus(str)
    }
    
    return(
        <>
            <Child propsFromParent={handleUpdateStatus}/>
            <p>{status}</p>
        </>
    )
}