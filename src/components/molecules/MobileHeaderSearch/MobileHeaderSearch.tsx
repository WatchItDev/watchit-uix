import React, { useState, FC } from "react";
import { styled, Box, BoxProps  } from "@mui/material";
import Button from "../../atoms/Button";
import { Search, Close } from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";

export type MobileHeaderSearchProps = {
  value: string,
  onBack?: () => void
  onClick?: () => void
  onFocusIn?: () => void
  onFocusOut?: () => void
  onChange?: (text:string) => void
}

export const MobileHeaderSearch: FC<MobileHeaderSearchProps> = (props) : JSX.Element => {
  const [ showInput, setShowInput ] = useState(false)

  return (
      <>
        <Box sx={{ display: 'flex' }}>
          { showInput == true && 
            <TextField 
                placeholder="Search"
                sx={{
                  border:'0',
                  '.css-zypm09-MuiInputBase-input-MuiOutlinedInput-input':{
                    backgroundColor:'transparent',
                    color:'#D1D2D3',
                    padding: '10px 14px'
                  },
                  '.css-1lc5s07-MuiInputBase-root-MuiOutlinedInput-root':{
                    borderRadius:'20px',
                    border:'1px solid #D1D2D3',
                  },
                  "& fieldset": { border: 'none' }
                }}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              /> 
            }
          <Button variant={'flat'} icon={showInput == true ? <Close /> : <Search /> } onClick={/* props.onForward */ ()=> showInput == false ? setShowInput(true) : setShowInput(false)} backgroundColor={'transparent'} />
        </Box>
      </>
  )
}

export default MobileHeaderSearch
