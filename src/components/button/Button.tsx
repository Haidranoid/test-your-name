import React, {FC} from "react"
import clsx from "clsx";

import "./styles.sass"

interface ButtonProps {
    type?: 'default' | 'primary' | 'danger'
    onSubmit: () => void;
}

const Button: FC<ButtonProps> = ({type = "default", children}) => {
    return <span className={clsx("button", "bordered", {
        "button-default": type === "default",
        "button-danger": type === "danger",
        "button-primary": type === "primary",
    })}>
        {children}
    </span>
}

export default Button