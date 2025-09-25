import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({value, setValue}) {
    
    return (
        
            <TextField
                id="standard-basic"
                label="Nome squadra"
                variant="standard"
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                sx={{ flex: 1 }}
            />
        
    );
}
