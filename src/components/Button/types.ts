import { ReactNode } from "react";

type ButtonProp = {
    link?: string,
    children?: ReactNode,
    type: "submit" | "button" | "reset",
    handleClick?: (params: any) => {
    },
    params?: object,
    loading?: boolean,
    className?: string,
    transition?: boolean
};

export default ButtonProp;