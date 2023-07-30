import React, { FC, useState, useRef, useEffect } from "react";
import { styled, Box, BoxProps, Typography } from "@mui/material";
import ProgressBar from "../../atoms/ProgressBar";
import { PlayArrow, Pause, RefreshSharp, Translate, Close, Cast } from "@mui/icons-material";
import Grid from '@mui/material/Grid';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';
//import { Button } from "../index";
import CustomButton from "../../atoms/Button";
import SliderVolumne from "../SliderVolumen"
import { PopUpOptions ,PosterListItem } from "../PopUpOptions";

export type VideoPlayerProps = {
  src: string
  titleMovie: string
  preview: boolean
  defaultVolumen: number
  currentTime?: number
  onClose?: () => void
  autoPlay: boolean
}

const item = [
  {
    title:'',
    list:[
      {
        id:'t1',
        title:'Samsung Smart TV S6'
      },
      {
        id:'t2',
        title:'Samsung Smart TV S10'
      }
    ]
  }
]

const item2 = [
  {
    title:'Audio',
    list:[
      {
        title:'English',
        onClick:()=>console.log('test'),
        selected:true
      },
      {
        title:'Spanish',
        onClick:()=>console.log('test'),
        selected:false
        
      },
      {
        title:'German',
        onClick:()=>console.log('test'),
        selected:false
      }
    ]
  },
  {
    title:'Subtitles',
    list:[
      {
        title:'English',
        onClick:()=>console.log('test'),
        selected:false
      },
      {
        title:'Spanish',
        onClick:()=>console.log('test'),
        selected:false
      },
      {
        title:'German',
        onClick:()=>console.log('test'),
        selected:true
      },
      {
        title:'Chinese',
        onClick:()=>console.log('test'),
        selected:false
      },
      {
        title:'Corean',
        onClick:()=>console.log('test'),
        selected:false
      }
    ]
  },
]

export const VideoPlayer: FC<VideoPlayerProps> = (props) : JSX.Element => {
  const [ show, setShow ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ currentTime, setCurrentTime ] = useState(0)
  const [ show1, setShow1 ] = useState(false)
  const [ show2, setShow2 ] = useState(false)
  const [ tvOptionSelected, setTvOptionSelected ] = useState([])
  const [ languageOptionSelected, setLanguageOptionSelected ] = useState([])
  const video = useRef<HTMLVideoElement>(null);
 
  const handleLanguageOnChange = ( listId:string, item:PosterListItem ) => {
      let newSelect = languageOptionSelected
      newSelect
  }

  const handleTvOnChange = () => {
    
  }

  const playVideo = () => {
    if((currentTime/duration)*100 < 100){
      show ? video.current && video.current.pause() : video.current && video.current.play() 
      setShow(!show)
    } else{
      if (video.current !== null) {
        video.current.currentTime = 0;
        video.current && video.current.play()
      }
    }
  };

  const nextVideo = () => {
    if (video.current !== null) {
      video.current.currentTime += 10;
    }
  };

  const prevVideo = () => {
    if (video.current !== null) {
      video.current.currentTime -= 10;
    }
  };

  const handleVolumne = ( value:number ) => {
    let volumenStep = value/100
    if (video.current !== null) {
      video.current.volume = volumenStep;
    }
  };

  useEffect(()=>{
    const videoR =  video.current
    const timeUpdateHandler =()=>{
      if (videoR !== null) {
        setCurrentTime(videoR.currentTime)
      }
    }
    const loadedMetaHandler =()=>{
      if (videoR !== null) {
        setDuration(videoR.duration)
      }
    }

    videoR?.addEventListener("timeupdate",timeUpdateHandler)
    videoR?.addEventListener("loadedmetadata",loadedMetaHandler)
    
    return()=>{
      if (videoR !== null) {
        videoR.removeEventListener("timeupdate",timeUpdateHandler)
        videoR.removeEventListener("loadedmetadata",loadedMetaHandler)  
      }
    }
    
  },[video.current])

  useEffect(()=>{
    let volumenStep = props.defaultVolumen/100;
    if (video.current !== null) {
      video.current.volume = volumenStep;
    }
  },[])

  const handleProgressVideo = (increaseValue:number) => {
    let time = duration * (increaseValue / 100)
    if (video.current !== null) {
      video.current.currentTime = time;
    }
  };

  useEffect(()=>{
    let volumenStep = props.defaultVolumen/100;
    if (video.current !== null) {
      video.current.volume = volumenStep;
      setShow(!show)
    }
  },[props.defaultVolumen])

  useEffect(()=>{
    if((currentTime/duration)*100 < 100 && props.preview){
      show ? video.current && video.current.play() : video.current && video.current.pause()
      setShow(!show)
    }
  },[duration])

  useEffect(()=>{
    if (video.current !== null) {
      props.autoPlay == true && video.current.play()
      setShow(props.autoPlay)
    }
  },[])

  return (
    <VideoPlayerWrapper>
      <video ref={video} style={{zIndex:'98',width:'100%',height:'100%',lineHeight:0,objectFit:`${props.preview ? 'cover': 'revert'}`}}>
        <source type="video/mp4" src={props.src}/>
      </video>
      <ButtonsPlayerWrapper>
        { !props.preview && 
          <TopButtonWrapper>
            <PopUpOptions position="bottomright" list={item} open={show1} >
              <CustomButton 
                width="30px" 
                variant={'flat'} 
                icon={<Cast sx={{ color: '#D1D2D3 !important'}}/>} 
                backgroundColor={'transparent'} 
                onClick={()=>setShow1(!show1)} 
              />
            </PopUpOptions>
            <CustomButton 
              width="30px" 
              variant={'flat'} 
              icon={<Close sx={{ color: '#D1D2D3 !important'}}/>} 
              backgroundColor={'transparent'} 
              onClick={props.onClose} 
            />
          </TopButtonWrapper>
        }
        { !props.preview && 
          <CustomButton 
            width="30px" 
            backgroundColor={'transparent'} 
            variant={'flat'} 
            icon={ <><Replay10Icon sx={{ color: '#D1D2D3 !important'}}/></>} 
            onClick={()=>{prevVideo()}}
          />
        }
        { !props.preview && 
          <CustomButton 
            width="30px" 
            backgroundColor={'transparent'} 
            variant={'flat'} 
            icon={ (currentTime/duration)*100 < 100 ? show ? <><Pause sx={{ color: '#D1D2D3 !important'}}/></> : <><PlayArrow sx={{ color: '#D1D2D3 !important'}}/></> : <><RefreshSharp sx={{ color: '#D1D2D3 !important'}}/></> } 
            onClick={()=>{playVideo()}}
          />
        }
        { !props.preview && 
          (currentTime/duration) * 100 < 100 &&
            <CustomButton 
              width="30px" 
              backgroundColor={'transparent'} 
              variant={'flat'} 
              icon={<><Forward10Icon sx={{ color: '#D1D2D3 !important'}}/></>} 
              onClick={()=>{nextVideo()}}
            />
        }
        <PlayerBarWrapper>
          <Grid sx={{width:'100%',display:'flex',alignItems:'center'}} container spacing={2}>
            { !props.preview && 
              <>
                <Grid item xs={9} sx={{display:'flex',alignItems:'center'}}>
                  <MoviesTitles fontSize={'40px'} fontWeight={'bold'}>{props.titleMovie}</MoviesTitles>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',alignItems:'center',justifyContent:'end'}}>
                <PopUpOptions position="topleft" list={item2} open={show2} >
                  <CustomButton 
                    width="30px" 
                    variant={'flat'} 
                    icon={<Translate sx={{ color: '#D1D2D3 !important'}}/>} 
                    backgroundColor={'transparent'} 
                    onClick={() =>setShow2(!show2)} 
                  />
                </PopUpOptions>
                <SliderVolumne 
                  alwaysShow={false} 
                  defaultVolume={props.defaultVolumen} 
                  onChange={( value:number )=>handleVolumne(value)}
                />
                </Grid>
                <Grid item xs={12} sx={{width:'100%',display:'flex',alignItems:'center'}}>
                  <ProgressBar 
                    percentage={(currentTime/duration)*100} 
                    showBullet={true}
                    onNewPercentage={(increaseValue:number)=>handleProgressVideo(increaseValue)} 
                  />
                </Grid>
              </>
            }
            {/* { props.preview && 
              <Grid item xs={12} sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'end'}}>
                <CustomButton 
                  width="30px" 
                  variant={'flat'} 
                  icon={ volumenPreview ? <VolumeUp sx={{ color: '#D1D2D3 !important'}}/> : <VolumeOff sx={{ color: '#D1D2D3 !important'}}/> } 
                  backgroundColor={'transparent'} 
                  onClick={() =>handleVolumnePreview()} 
                />
              </Grid>
            } */}
          </Grid>
        </PlayerBarWrapper>
      </ButtonsPlayerWrapper>
    </VideoPlayerWrapper>
  )
}

const VideoPlayerWrapper = styled(Box)<BoxProps>(() => ({
  width:'100%',
  height:'100%',
  position:'relative',
  backgroundSize:'cover',
  backgroundColor:'#1A1C20'
}))

const PlayerBarWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  width:'calc(100% - 2rem)',
  flexDirection:'column',
  position:'absolute',
  bottom:'19px'
}))

const TopButtonWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  width:'calc(100% - 1rem)',
  position:'absolute',
  justifyContent:'space-between',
  top:'5px'
}))

const ButtonsPlayerWrapper = styled(Box)<BoxProps>(() => ({
  top:'0',
  zIndex:'99',
  gap:'0.5rem',
  width:'100%',
  height:'100%',
  position:'absolute',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor: 'rgb(0,0,0,0.43)'
}))

export const MoviesTitles = styled(Typography)<{ 
  fontSize?: string, 
  fontWeight?: string,
  margin?:string  
}>((props) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  color: '#D1D2D3',
  margin: props.margin
}))

export const PosterImage = styled(Box)<BoxProps & { src: string }>(() => ({
  width: '100%',
  height: '100%',
  position: 'relative'
})) 

export default VideoPlayer
