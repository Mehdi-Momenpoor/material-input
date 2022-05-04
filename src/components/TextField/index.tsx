import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from './textField'
import { InputAdornment } from '@mui/material';


const CustomizedTextField = styled(TextField)`
  
`;




export default function HBTextField({
    type,
    variant,
    value,
    onChange,
    label,
    required,
    id,
    defaultValue,
    InputProps,
    InputLabelProps,
    disabled,
    autoComplete,
    helperText,
    error,
    multiline,
    maxRows,
    rows,
    placeholder,
    startIcon,
    endIcon,
    size,
    hiddenLabel,
    margin,
    fullWidth,
    color,

}
    : TextFieldProps
) {

    return (
        <CustomizedTextField
            type={type}
            variant={variant}
            value={value}
            onChange={onChange}
            label={label}
            required={required}
            id={id}
            defaultValue={defaultValue}
            InputProps={{
                ...InputProps,
                startAdornment: (
                    <InputAdornment position="start">
                        {startIcon}
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        {endIcon}
                    </InputAdornment>
                ),
            }}
            InputLabelProps={InputLabelProps}
            disabled={disabled}
            autoComplete={autoComplete}
            helperText={helperText}
            error={error}
            multiline={multiline}
            maxRows={maxRows}
            rows={rows}
            placeholder={placeholder}
            size={size}
            hiddenLabel={hiddenLabel}
            margin={margin}
            fullWidth={fullWidth}
            color={color}
        />
    )
}
