import React, { FC } from "react";
import {styled, Box, BoxProps, Typography, TypographyProps} from "@mui/material";
import { withTheme } from '@src/hoc/withTheme'
import { PlayArrow } from "@mui/icons-material";
import ContentLoader from 'react-content-loader'

import CustomButton from '@atoms/CustomButton'
import ProgressBar from "@atoms/ProgressBar";
import RoundProgress from "@atoms/RoundProgress";

export type PosterProps = {
  img: string
  title: string
  progress?: number
  loved?: boolean
  rate?: number
  year?: number
  canHover?: boolean
  empty?: boolean
  end?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onPlayClick?: React.MouseEventHandler<HTMLButtonElement>
  size?: {
    width?: string,
    height?: string
  }
}

const primaryRateColors: { [key: string]: string } = {
  'success': '#037015',
  'warning': '#f59e0b',
  'danger': '#ef4444'
}

const secondaryRateColors: { [key: string]: string } = {
  'success': '#81ba83',
  'warning': '#fef3c7',
  'danger': '#fee2e2'
}

const rateColor = [
  'danger',
  'danger',
  'warning',
  'success',
  'success'
]

export const Poster: FC<PosterProps> = ( props ) : JSX.Element => {
  const color = rateColor[(props?.rate ?? 1) - 1]

  return (
    <PosterWrapper
      sx={{
        width: props.size?.width ? `${props.size?.width}` : '181px',
        height: props.size?.height ? `${props.size?.height}` : '273px',
        pointerEvents: (props.size || !props.canHover) ? 'none' : 'all'
      }}
      data-testid='poster-wrapper'
    >
      {props.empty && !props.end && <LoaderPoster />}

      <PosterImage
          component='img' src={props.img}
          data-testid='poster-image' onClick={props.onClick}
          sx={{ opacity: props.empty ? 0 : 1, pointerEvents: props.empty ? 'none' : 'all' }}
      />

      <PosterRateWrapper
          className='hover-show hover-show-flex'
          sx={{ opacity: props.empty ? 0 : 1, pointerEvents: props.empty ? 'none' : 'all' }}
      >
        <RoundProgress
            text={`${props.rate}`}
            percentage={((props.rate ?? 0) / 5) * 100}
            progressBackgroundColor={secondaryRateColors[color]}
            progressBarColor={primaryRateColors[color]}
            textColor={primaryRateColors[color]}
            size={30}
        />
      </PosterRateWrapper>

      <PosterInfo
          className='info'
          sx={{ opacity: props.empty ? 0 : 1, pointerEvents: props.empty ? 'none' : 'all' }}
      >
        <Box sx={{ marginBottom:'0.5rem',width:'calc(100% - 1rem)', display:'flex', flexDirection:'column', alignItems:'center', height:'100%', justifyContent:'center' }}>
        <Box className='hover-show hover-show-flex' display='flex' alignItems='flex-end' justifyContent='space-between' sx={{ marginBottom: '5px', width:'100%' }}>
          <Typography variant='text12bold'>
            {props.year}
          </Typography>
          <CustomButton width='35px' height='35px' variant='primary' icon={<PlayArrow style={{ color: '#D1D2D3' }}/>} onClick={props.onPlayClick} data-testid='play-button' />
        </Box>
        <PosterTitle variant='text16bold' className='hover-show'>
          {props.title}
        </PosterTitle>
        {
          props.progress ? (
            <ProgressBar onNewPercentage={(value:any)=>console.log('increse:'+value)} percentage={props.progress} barColor='#fff' showBullet={false} />
          ) : <></>
        }
        </Box>
      </PosterInfo>
    </PosterWrapper>
  )
}

export const LoaderPoster = (): React.JSX.Element => {
  return (
      <ContentLoader
          style={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', zIndex: 1 }}
          backgroundColor="#FFF"
          foregroundColor="#ecebeb"
          width={'100%'}
          height={'100%'}
          opacity={0.8}
      >
        { /* Create a rectangle full size */}
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
      </ContentLoader>
  )
}

const PosterWrapper = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: '10px',
  overflow: 'hidden',
  border:'none',
  '.hover-show': {
    display: 'none'
  },
  '&:hover': {
    '.hover-show.hover-show-flex': {
      display: 'flex'
    },
    '.hover-show': {
      display: 'block'
    }
  }
}))

const PosterRateWrapper = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 10,
  right: 10
}))

const PosterInfo = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 73%, rgba(0,0,0,0) 100%)',
  pointerEvents: 'none',
  '*': {
    pointerEvents: 'none'
  },
  'button': {
    pointerEvents: 'all !important'
  }
}))

const PosterTitle = styled( Typography )<TypographyProps>(() => ({
  marginBottom: '10px',
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))

export const PosterImage = styled( Box )<BoxProps & { src: string }>(() => ({
  width: '100%',
  height: '100%',
  position: 'relative'
}))

export default withTheme<PosterProps>(Poster)
