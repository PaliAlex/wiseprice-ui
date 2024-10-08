import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {SelectComponentContainer} from "./styles";
import {InputLabel} from "@mui/material";

interface IPropsSelectComponent {
    options: string[],
    label: string,
    register: any,
    error: boolean
}

export const SelectComponent = ({options, label, register, error}: IPropsSelectComponent) => {
    return (
        <SelectComponentContainer>
            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Select property type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...register('type', { required: 'Select is required' })} // Регистрация поля
                    label={label}
                    defaultValue=""
                    error={error}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </SelectComponentContainer>
    );
};