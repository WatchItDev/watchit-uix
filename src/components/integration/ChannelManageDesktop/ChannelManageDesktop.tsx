import React, { FC } from "react";
import { styled, Box, BoxProps, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import Logo from "../../atoms/Logo";
import ChannelItem from "../../atoms/ChannelItem";
import Button from "../../atoms/Button";
import { globalOverrides } from "@src/styles/theme";

export const ChannelManageDesktop: FC = (props) : JSX.Element => {
  const users = [ 'Austin', 'Brooklyn','Chicago']

  return (
    <ChannelManageDektopWrapper>
      <Box sx={{ display: 'flex',marginTop:'2rem' }}>
        <Logo size={150}/>
      </Box>
      <Box sx={{ display: 'flex',alignItems:'center',minWidth:'300px' }}>
        <Grid container justifyContent={'center'} spacing={2}>
          { users.map( (user, index) => {
            return(
              <CustomGrid index={index} item xs={6} sm={3} md={3}>
                <ChannelItem 
                  innerLetter={user} 
                  label={user} 
                  size={100} 
                  labelLetterSize={'0.8rem'}
                  innerLetterSize={35} 
                  selected={index == 0 ? true : false} 
                  borderWidth={3}
                />
              </CustomGrid>
            )
          })}
          <CustomGrid alignItems={'start'} index={(users.length)} item xs={6} sm={3} md={3}>
            <AddChannelWrapper>
              <Button 
                margin="5px" 
                height="100px" 
                width="100px" 
                borderRadius="19px !important" 
                icon={<Add />} 
                variant={'secondary'} 
                backgroundColor={'transparent'} 
              />
            </AddChannelWrapper>
          </CustomGrid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Button  variant={'secondary'} children={<span>MANAGE CHANNELS</span>} />
      </Box>
    </ChannelManageDektopWrapper>
  )
}

export const ChannelManageDektopWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  height:'calc(100vh - 3rem)',
}))

export const AddChannelWrapper = styled(Box)<BoxProps>(() => ({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  cursor:'pointer',
}))

type CustomGridProps = { index: number; };
const CustomGrid = styled(Grid)<CustomGridProps>(({index, theme},) => ({
  [theme.breakpoints.only('xs')]: {
    display:'flex',
    justifyContent:`${ (index%2) > 0 ? 'start' : 'end'}`
  }
}));



export default ChannelManageDesktop
