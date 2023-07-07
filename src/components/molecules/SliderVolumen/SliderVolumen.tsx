import React, { useState, FC } from "react";
import { styled, Box, BoxProps, Slider   } from "@mui/material";
import Button from "../../atoms/Button";
import { VolumeUp } from "@mui/icons-material";
import TextField from "@mui/material/TextField";


export type SliderVolumenProps = {
  defaultVolume: number,
  alwaysShow: boolean, 
  onChange?: (value:number) => void
}

export const SliderVolumen: FC<SliderVolumenProps> = (props) : JSX.Element => {
  const { defaultVolume, alwaysShow = false, onChange } = props
  const [ hidden, setHidden ] = useState( alwaysShow )

  return (
    <>
      <Box sx={{ display: 'flex',flexDirection:'column',width:'2rem',justifyContent:'center',alignItems:'center' }}>  
        { hidden == false && 
          <Box sx={{ display: 'flex',height:'10rem',justifyContent:'center',alignItems:'center', marginBottom:'0.6rem', }}>          
                <Slider
                  aria-label="Temperature"
                  orientation="vertical"
                  defaultValue={ defaultVolume || 0 }
                  sx={{
                    '& .MuiSlider-thumb': {
                      color: "white"
                    } ,
                    '& .MuiSlider-track': {
                        color: "white"
                    },
                    '& .MuiSlider-rail': {
                      color: "#acc4e4"
                    },
                    '& .MuiSlider-active': {
                        color: "green"
                    }
                  }}
              />
          </Box>
        }
        <Button 
          variant={'flat'} 
          icon={ <VolumeUp /> } 
          onClick={ ()=> hidden == true 
              ? setHidden(false) 
              : setHidden(true)
            } 
          backgroundColor={'transparent'} />
      </Box>
    </>
  )
}

export default SliderVolumen
