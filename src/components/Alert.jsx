import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

function Alert() {
    const {alert} = useContext(AlertContext);
    return <p>{alert?.msg}</p>;
}

export default Alert;