import * as React from "react";
import { Button as MButton, ButtonProps as MButtonProps } from "@mui/material";

type omittedProps = "color" | "size" | "variant";
export type ButtonVariant = "danger" | "ghost" | "outline" | "primary" | "success" | "warning";
export type ButtonSize = "normal" | "small";

export type ButtonProps = Omit<MButtonProps, omittedProps> & {
    size?: ButtonSize,
    variant?: ButtonVariant
}

const
    getColor = (variant: ButtonVariant) => {
        switch (variant) {
            case "danger":
                return "error";
            case "primary":
                return "primary";
            case "success":
                return "success";
            case "warning":
                return "warning";
            default:
                return "secondary";
        }
    },
    getSize = (size: ButtonSize) => (
        size === "normal" ? "medium" : "small"
    ),
    getVariant = (variant: ButtonVariant) => {
        switch (variant) {
            case "ghost":
                return "text";
            case "outline":
                return "outlined";
            default:
                return "contained";
        }
    };

function Button({ children, size = "normal", variant = "ghost", ...others }: ButtonProps): JSX.Element {
    return (
        <MButton
            color={getColor(variant)}
            size={getSize(size)}
            variant={getVariant(variant)}
            {...others}
        >
            {children}
        </MButton >
    )
}

export default Button;