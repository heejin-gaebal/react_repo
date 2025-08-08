import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const CustomBtn = ({ children }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          bgcolor: 'orange',
          mt: '200px',
          ':hover': { bgcolor: 'pink' },
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomBtn;
