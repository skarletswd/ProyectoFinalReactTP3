import { createContext, useCallback, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [propiedades, setPropiedades] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);
    const [opciones, setOpciones] = useState({});
    const [metros, setMetros] = useState();
    const [cotizacion, setCotizacion] = useState();


    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
          .then((response) => response.json())
          .then((todos) => setPropiedades(todos));
    }, []);
    
    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
          .then((response) => response.json())
          .then((todos) => setUbicaciones(todos));
      }, []);


    const handleInput = useCallback(
      ({ target: { value } }) => {
        setOpciones({ ...opciones, metros: Number(value) });
      },
      [opciones, metros]);


    const handleChange = useCallback(
        ({ target: { value, name } }) => {
          const array = name === "propiedad" ? propiedades : ubicaciones;
          const item = array.find(({ id }) => id == value);
          setOpciones({ ...opciones, [name]: item });
        },
        [opciones, propiedades, ubicaciones]
      );


    const handleSubmit = useCallback(() => {
      const resultado =
        35.86 * opciones.propiedad.factor * opciones.ubicacion.factor * opciones.metros;
      const historial = JSON.parse(
        window.localStorage.getItem("historial") || "[]"
      );
      window.localStorage.setItem("historial", JSON.stringify([
        ...historial,
        {
          fecha: new Date().toLocaleString(),
          propiedad: opciones.propiedad.tipo,
          ubicacion: opciones.ubicacion.tipo,
          metros2: opciones.metros,
          cotizacion: resultado.toFixed(2),
        },
      ]));

      setCotizacion(resultado.toFixed(2));
      console.log(opciones, resultado);
    }, [opciones]);
    
    
    //dentro del contexto tengo los arrays, objetos y funciones  
    const data ={propiedades, ubicaciones, opciones, setOpciones, cotizacion, setCotizacion, handleSubmit, handleChange, metros, setMetros, handleInput};

    return <AppContext.Provider value={data}>
      {children}
      </AppContext.Provider>;
};