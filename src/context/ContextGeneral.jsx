import React from 'react';
import newsData from "../data/newsdata.json";

export const DataContext = React.createContext();

const ContextGeneral = (props) => {
    const { articles } = newsData;   
    
    return (
        <DataContext.Provider value= {{articles}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextGeneral;


