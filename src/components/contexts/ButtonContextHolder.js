import { ButtonContext } from "./ButtonContext";
import { useContext } from "react";

export const ButtonContextHolder = () => {
    const buttonContext = useContext(ButtonContext);

    return (
        <>
            <p>Button context:</p>
            <h2>{buttonContext}</h2>
        </>
        
    )
}