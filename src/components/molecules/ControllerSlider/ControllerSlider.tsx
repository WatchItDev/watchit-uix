import React, { FC } from 'react'
import { styled, Box, BoxProps, Typography } from '@mui/material'
import Poster from '../Poster'
import { withTheme } from '../../../hoc/withTheme'

export type MoviesProps = {
  img: string
  title: string
}

export type ControllerSliderProps = {
  title?: string
  movies: MoviesProps[]
  onClick: any
}

export const ControllerSlider: FC<ControllerSliderProps> = ( props ) : JSX.Element => {
  return (
    <Box sx={{ width:'100%' }}>
      <Box sx={{ marginBottom: '15px' }}>
        <Typography variant='text20bold'>
          {props.title}
        </Typography>
      </Box>
      <SliderControllerWrapper>
        <SliderControllerBox>
          { 
            props.movies.map( (movie:MoviesProps, index: number) => {
              return(
                <Poster
                  key={`${movie.title.replaceAll(' ', '').toLowerCase()}${index}`}
                  img={movie.img}
                  title={movie.title}
                  progress={50}
                  year={2022}
                  canHover={true}
                  onClick={ props.onClick }
                />
              )
            })
          }
        </SliderControllerBox>
      </SliderControllerWrapper>
    </Box> 
  )
}

export const SliderControllerWrapper = styled( Box )<BoxProps>(() => ({
  position: 'relative',
  width: '100%',
}))

export const SliderControllerBox = styled( Box )<BoxProps>(() => ({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '16px',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollBarWidth: 'none',
  '&::-webkit-scrollbar':{
    display: 'none'
  }
}))

export default withTheme<ControllerSliderProps>(ControllerSlider)
