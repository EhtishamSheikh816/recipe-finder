import { createContext, useState } from "react";

export const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [isError, setIsError] = useState(null);
  return (
    <ErrorContext.Provider value={{ isError, setIsError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
