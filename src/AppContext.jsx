import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    //setea el array
    const [propiedades, setPropiedades,] = useState([]);


    //setea el objeto
    const [form, setForm] = useState({});

    // console.log(propiedades);

    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
          .then((response) => response.json())
          .then((todos) => setPropiedades(todos));
    }, []);

    const [ubicaciones, setUbicaciones] = useState([]);

    //   console.log(ubicaciones);
    
      useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
          .then((response) => response.json())
          .then((todos) => setUbicaciones(todos));
      }, []);
    
    //dentro del contexto tengo los arrays, objetos y funciones  
    const data ={propiedades, ubicaciones, form, setForm};

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};