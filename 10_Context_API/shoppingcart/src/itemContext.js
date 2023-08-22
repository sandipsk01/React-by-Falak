import { createContext, useState, useContext } from "react";

const itemContext= createContext();

function useValue(){
    const value=useContext(itemContext);
    return value;
}

export default function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    const handleAdd = (price) => {
        setTotal(total+price);
        setItem(item+1)
      };
    
    const handleRemove = (price) => {
        if(total>0){
          setTotal((prevState)=>prevState-price);
          setItem((prevState)=>prevState-1)
        } 
    };

    return(
        <itemContext.Provider value={{total, item, handleAdd, handleRemove}}>
            {children}
        </itemContext.Provider>
    )
}

export {itemContext, useValue}