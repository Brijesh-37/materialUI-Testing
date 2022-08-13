import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';


 export const MuiButtons = () => {
  return (
    <div>
      <Stack spacing={4} direction='row' >
      {/* <ButtonGroup variant="contained" aria-label="outlined primary button group"> */}
  <Button>One</Button>
  <Button variant='contained'>Two</Button>
  <Button variant='outlined'>Three</Button>
{/* </ButtonGroup> */}
      </Stack>
     
    </div>
  )
}


