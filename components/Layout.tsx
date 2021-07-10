
import React, { useState, createContext, Dispatch } from 'react'

export interface ColorProps {
    changeColor: boolean
    setChangeColor: Dispatch<React.SetStateAction<boolean>>
}
export const ColorContext = createContext({} as ColorProps)

const Layout = ({ children }) => {
    const [changeColor, setChangeColor] = useState(false);
    return (
        <ColorContext.Provider value={{ changeColor, setChangeColor }} >
                {children}
        </ColorContext.Provider>
    )
}

export default Layout
