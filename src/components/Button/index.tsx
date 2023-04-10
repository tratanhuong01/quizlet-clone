import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import ButtonProps from "./types";
//
const Button = ({ link, children, type, loading, handleClick, params, className, transition, disabled }: ButtonProps) => {
    //
    const [loading_, setLoading] = useState(loading);
    //
    return (
        link ? <Link to={link} className={`button ${className ? className : ""}`}>
            {children}
        </Link> : <button onClick={async () => {
            setLoading(true);
            if (handleClick) {
                await handleClick(params);
            }
            setLoading(false);
        }} type={type}
            className={`button ${disabled ? 'disabled' : ''} ${className ? className : ""} ${transition ? transition : "transition"}`}
            disabled={disabled || loading_}>
            {loading_ ? <i className="fa-solid fa-circle-notch rotate-360"></i> : children}
        </button>
    )
}

export default Button