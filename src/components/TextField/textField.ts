
type type =
    'text'
    | 'number'
    | 'checkbox'
    | 'email'
    | 'password'
    | 'radio'
    | 'button'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'time'
    | 'url'
    | 'week';


type variant = "standard" | "filled" | "outlined";
type size = "small" | "medium";
type margin = "dense" | "normal";
type color = "warning" | "error" | "primary" | "secondary" | "info" | "success";


export interface TextFieldProps {
    type?: type,
    variant?: variant,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    required?: boolean,
    id?: string,
    defaultValue?: string,
    InputProps?: {}, // ????????????????
    InputLabelProps?: {}, // ????????????
    disabled?: boolean,
    autoComplete?: string,
    helperText?: string,
    error?: boolean,
    multiline?: boolean,
    maxRows?: number,
    rows?: number,
    placeholder?: string,
    startIcon?: string | React.ReactElement<any, any>, // ???????    چطور بگم کامپوننت یا رشته
    endIcon?: string | React.ReactElement<any, any>, // ???????    چطور بگم کامپوننت یا رشته
    size?: size,
    hiddenLabel?: boolean,
    margin?: margin,
    fullWidth?: boolean,
    color?: color,


}