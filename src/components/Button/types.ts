import { ReactNode } from "react";

type ButtonProps = {
    link?: string,
    children?: ReactNode,
    type: "submit" | "button" | "reset",
    handleClick?: (params: any) => void,
    params?: object,
    loading?: boolean,
    className?: string,
    transition?: boolean,
    disabled?: boolean
};

export default ButtonProps;