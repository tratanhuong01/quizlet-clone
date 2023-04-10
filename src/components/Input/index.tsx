import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import "./index.light.scss";
import "./index.dark.scss";
import InputProps from "./types";
//
const Input = ({ type, className, classNameParent, styleParent, style, placeholder, search, name, icon, clearText, defaultValue, register, errors }: InputProps) => {
    //
    const [typeState, setTypeState] = useState(type);
    const [loading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useState<any>(defaultValue);
    const [showClearText, setShowClearText] = useState(false);
    const refInputParent = useRef(null);
    useOnClickOutside(refInputParent, () => {
        setShowClearText(false);
    });
    //
    return (
        <div className={classNameParent ? classNameParent : ""} style={styleParent ? styleParent : {}}>
            <div ref={refInputParent} className={`input input__${icon && type !== "password" ?
                "innerLeft" : type !== "password" ? search : "innerRight"} ${clearText ? 'clear__text' : ''}`}>
                <div className="input__container">
                    {((search && search !== "button" && type !== "password") || icon) &&
                        <i className={icon || "fa-solid fa-magnifying-glass"} />}
                    {(register) ? <input type={typeState}
                        className={`${className || ''} ${errors && (errors[name] ? 'error' : '')}`}
                        style={style}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        name={name}
                        spellCheck={false}
                        disabled={loading}
                        onChange={(e) => {
                            setValue(typeState !== "checkbox" ? e.target.value : e.target.checked);
                            if (typeState !== "checkbox") {
                                setShowClearText(e.target.value.length > 0);
                                register(name, { required: true }).onChange(e)
                            }
                        }}
                        onClick={() => {
                            if (!clearText) return;
                            setShowClearText(true);
                        }}
                        value={value}
                        {...register(name, { required: true })}
                    /> : <input type={typeState}
                        className={className || ''}
                        style={style}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        name={name}
                        spellCheck={false}
                        disabled={loading}
                        onChange={(e) => {
                            setValue(e.target.value);
                            setShowClearText(e.target.value.length > 0);
                        }}
                        onClick={() => {
                            if (!clearText) return;
                            setShowClearText(true);
                        }}
                        value={value}
                    />}
                    {type === "password" && <i
                        onClick={() => setTypeState(typeState === "password" ? "text" : "password")}
                        style={{ cursor: "pointer" }}
                        className={`fa-solid fa-eye${typeState === "password" ? "-slash" : ""}`}
                    />}
                </div>
                {search === "button" && <button onClick={() => {
                    if (loading) return;
                    setLoading(true);
                }} className={loading ? "disabled" : ""} type="button">
                    <i className={`fa-solid ${loading ? "fa-circle-notch rotate-360" : "fa-magnifying-glass"}`} />
                </button>}
                {clearText && showClearText && <span onClick={() => {
                    setShowClearText(false);
                    setValue("");
                }} className="icon">&times;</span>}
            </div>
            {!(typeState === "checkbox" || typeState === "radio") && <p className="input__error">{errors && errors[name] ? errors[name].message : ""}</p>}
        </div>
    )
}

export default Input