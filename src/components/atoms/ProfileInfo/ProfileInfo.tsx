import React, { FC } from "react";
import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps
} from "@mui/material";

export type ProfileInfoProps = {
  icon: JSX.Element
  title: string
  subTitle: string
  onClick?: () => void
}

export const ProfileInfo: FC<ProfileInfoProps> = (props) : JSX.Element => {

  return (
      <ProfileInfoWrapper onClick={props.onClick} data-testid={'profile-info-wrapper'}>
        <ProfileInfoIcon>{props.icon}</ProfileInfoIcon>
        <ProfileInfoSubTitle>{props.subTitle}</ProfileInfoSubTitle>
        <ProfileInfoTitle>{props.title}</ProfileInfoTitle>
      </ProfileInfoWrapper>
  )
}

export const ProfileInfoWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0.5rem',
  backgroundColor: '#1A1C20',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  maxWidth: '80px',
  minHeight: '80px'
}))

export const ProfileInfoIcon = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  svg: {
    width: '100%',
    height: 'auto',
    color: '#D1D2D3'
  }
}))

export const ProfileInfoTitle = styled(Typography)<TypographyProps>(() => ({
  fontSize: '14px',
  fontWeight: 500,
  color: '#D1D2D3'
}))

export const ProfileInfoSubTitle = styled(Typography)<TypographyProps>(() => ({
  fontSize: '12px',
  fontWeight: 500,
  color: '#515C67',
  padding: '0.25rem 0'
}))

export default ProfileInfo
