import React from "react"

const Context = React.createContext()

const ContextProvider = (props) => {

    return(
        <Context.Provider value={{test: "TestString"}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}