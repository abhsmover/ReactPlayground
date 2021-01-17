import React, {useState} from "react"
import Child from "./Child"

export default function (props) {
    const [status, setStatus] = useState("Initial State")
    const handleUpdateStatus = (str) => {
        setStatus(str)
        setTimeout(()=>{
            setStatus("Please press the button!")
        },2000)
    }
    
    return(
        <>
            <Child propsFromParent={handleUpdateStatus}/>
            <p>This is updated status : {status}</p>
        </>
    )
}