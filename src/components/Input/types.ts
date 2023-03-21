type InputProp = {
    type: "text" | "password" | "email" | "date" | "number",
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
    clearText?: boolean
}

export default InputProp;