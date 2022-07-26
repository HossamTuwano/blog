import { createContext } from "react";
import useFetch from "../components/hooks/useFetch";
import { get_posts } from "../API";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { data, loading, error } = useFetch(get_posts);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
