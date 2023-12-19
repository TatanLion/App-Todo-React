import { useEffect, useState } from "react";

//Esto es un Custom Hook que nos permite crear nuestros propios estados y demás cosas
function useLocalStorage(itemName, initialValue) {
  //Estado para la carga y error
  const [sincronizedItem, setSincronizedItem] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        //Obtener los Todos desde el localStorage
        const localStorageItem = localStorage.getItem(itemName);

        //Variable para inicializar un arreglo de Todos vacios
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 3000);
  }, [sincronizedItem]);

  //Función para guardar el nuevo estado de los Todos, para ello llamados el setTodos y guardamos en localStorage las funciones de completar y borrar cambiaremos el nombre de la función a saveTodos que hace ambos procesos
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  //Es necesario retornar de los custom hooks lo que vayamos a necesitar
  return { 
    item, 
    saveItem, 
    loading, 
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };
