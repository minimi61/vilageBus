import React, {createContext,useState} from 'react';
import { useContext } from 'react';

export const myContext = createContext();


export const useMyContext = () => {
    return useContext(myContext)
}
  

export const OpenSideBarMenu = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false)

  
    const value = {
       openMenu, setOpenMenu
    };

    return (
        <myContext.Provider value={value} >
            {children}
        </myContext.Provider >
    )
};