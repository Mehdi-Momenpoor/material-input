import { AccountCircle } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import HBTextField from './components/TextField';

function App() {

  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <HBTextField
        type='text'
        // variant='standard'
        value={value}
        onChange={handleChange}
        label='label'
        required
        startIcon={<AccountCircle />}
        endIcon={'end icon'}
        size={'small'}
        fullWidth
        color='success'
      />
      <hr />
      <TextField InputLabelProps={{ shrink: true }} />

    </div>
  );
}

export default App;