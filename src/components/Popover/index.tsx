import { ReactNode, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts";
import "./index.light.scss";
import "./index.dark.scss";
//
type PopoverProps = {
    children?: ReactNode,
    width?: string,
    style?: object,
    className?: string,
    hidden?: boolean,
    button?: ReactNode,
    subFunction?: () => void
};

const Popover = ({ children, width, style, className, hidden, button, subFunction }: PopoverProps) => {
    //
    const [show, setShow] = useState(hidden);
    const refDiv = useRef(null);
    useOnClickOutside(refDiv, () => {
        setShow(false);
        subFunction && subFunction()
    });
    //
    return (
        <div ref={refDiv} className="popover__container">
            {show ? <div className={`popover ${className}`}
                style={style ? { ...style, width } : { width }}>
                {children}
            </div> : <></>}
            {<div className="button_popover" onClick={() => {
                setShow(!show)
            }}>{button}</div>}
        </div>
    )
}

export default Popover