import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    //setea el array
    const [propiedades, setPropiedades] = useState([]);

    //setea el objeto
    const [opciones, setOpciones] = useState({});

    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
          .then((response) => response.json())
          .then((propiedades) => setPropiedades(propiedades));
    }, []);

    const [ubicaciones, setUbicaciones] = useState([]);
    
    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
          .then((response) => response.json())
          .then((ubicaciones) => setUbicaciones(ubicaciones));
      }, []);

    //dentro del contexto tengo los arrays, objetos y funciones  
    const data ={propiedades, ubicaciones, opciones, setOpciones};

    return <AppContext.Provider value={data}>
      {children}
      </AppContext.Provider>;
};