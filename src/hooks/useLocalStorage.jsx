import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }, 1000); // ⏱️ 1s para simular delay (puede ser 0 si no lo necesitás)
  }, [itemName, initialValue]);

  const saveitem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    item,
    saveitem,
    loading,
  };
}

export { useLocalStorage };
