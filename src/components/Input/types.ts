type InputProps = {
    type: "text" | "password" | "email" | "date" | "number" | "checkbox" | "radio",
    className?: string,
    style?: object,
    classNameParent?: string,
    styleParent?: object,
    placeholder?: string,
    icon?: string,
    validation?: {
        regex?: string,
    },
    search?: "innerLeft" | "innerRight" | "button",
    error?: object,
    name: string,
    defaultValue?: string,
    clearText?: boolean,
    register?: any,
    errors?: any
}

export default InputProps;