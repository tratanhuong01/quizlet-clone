import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import ButtonProp from "./types";
//
const Button = ({ link, children, type, loading, handleClick, params, className, transition }: ButtonProp) => {
    //
    const [loading_, setLoading] = useState(loading);
    //
    return (
        link ? <Link to={link} className={className ? className : ""}>
            {children}
        </Link> : <button onClick={async () => {
            setLoading(false);
            if (handleClick) {
                await handleClick(params);
            }
            setLoading(false);
        }} type={type} className={`button ${className ? className : ""} ${transition ? transition : "transition"}`}>
            {loading_ ? <i className="fa-solid fa-circle-notch rotate-360"></i> : children}
        </button>
    )
}

export default Button