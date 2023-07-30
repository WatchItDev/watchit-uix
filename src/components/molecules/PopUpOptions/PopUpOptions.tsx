import React, { FC } from "react";
import { styled, Box, BoxProps, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";

export type PosterListItem = {
  id: string
  title: string
}

export type PosterList = PosterListItem & {
  list: PosterListItem[]
}

export type PosterProps = {
  children:any
  position:string
  list:PosterList[]
  selected:PosterList[]
  width?:string
  open:boolean
  onChange:( listId: string, item: PosterListItem )=> void
}

export const PopUpOptions: FC<PosterProps> = (props) : JSX.Element => {
  return (
    <PosterWrapper>
        {props.children}
        {props.open &&
        <PosterInfo className={props.position} width={props.width}>
        {props.list.map((x:PosterList,index)=>{
          return(
            <Box  sx={{paddingRight:'18px'}}>
          <ItemListTitles fontSize={'0.8rem'} fontWeight={'bold'} margin={x.title ? ' 0 0 10px 0' :''}>{x.title}</ItemListTitles>
          {x.list.map((j:any,index)=>{
          return(
            <Box onClick={()=>props.onChange(x.id,j)} display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{paddingLeft:x.title ? '16px' : '0'}}>
            <ItemListTitles fontSize={'0.8rem'} fontWeight={'regular'} margin={'5px 0'} >{j.title}</ItemListTitles>
            { props.selected[] && <Check sx={{width:'20px',height:'20px', color: '#D1D2D3 !important',paddingLeft:'16px'}}/>}
          </Box>
            )})}
          </Box>
          )
        })}
        </PosterInfo>
        }
    </PosterWrapper>
  )
}

const PosterWrapper = styled(Box)<BoxProps >(() => ({
  display: 'flex',
  position: 'relative',
}))

const PosterInfo = styled(Box)<BoxProps & {width?:string}>((props) => ({
  background:'#212328',
  borderRadius:'10px',
  padding:'1rem 2rem',
  position:'absolute',
  zIndex:'99',
  display: 'flex',
  justifyContent:'center',
  alignItems:'start',
  width:props.width,
  boxShadow: '4px 4px 4px 1px rgba(33, 35, 40, .1)',
  '&.top':{
    bottom:`calc( 100% - -5px)`
  },
  '&.topleft':{
    bottom:`calc( 100% - -5px)`,
    right:'calc(100% - 30px)'
  },
  '&.topright':{
    bottom:`calc( 100% - -5px)`,
    lef:'calc(100% - 30px)'
  },
  '&.bottom':{
    top:`calc( 100% - -5px)`
  },
  '&.bottomleft':{
    top:`calc( 100% - -5px)`,
    right:'calc(100% - 30px)'
  },
  '&.bottomright':{
    top:`calc( 100% - -5px)`,
    left:'calc(100% - 30px)'
  },

}))

export const ItemListTitles = styled(Typography)<{ 
  fontSize?: string, 
  fontWeight?: string,
  margin?:string  
}>((props) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  color: '#D1D2D3',
  margin: props.margin,
  whiteSpace: 'nowrap'
}))

export default PopUpOptions
