import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // setting alert
  const setAlert = function (msg, type) {
    dispatch({ type: "show_alert", payload: { msg, type } });

    setTimeout(() => dispatch({ type: "remove_alert" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert:state, setAlert}}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertContext;
