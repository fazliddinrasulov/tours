import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
const url = "https://course-api.com/react-tours-project";

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({ children }) => {
  const [tours, setTours] = useState(null);
  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setTours(data);
      } catch (error) {
        console.log("error occured while fetching data: " + error);
      }
    };
    fetchData();
  }, []);
  return (
    <GlobalContext.Provider value={{ tours, removeTour }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
