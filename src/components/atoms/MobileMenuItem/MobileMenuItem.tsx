import React, { FC } from "react";
import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps
} from "@mui/material";

export type MobileMenuItemProps = {
  icon: JSX.Element
  title: string
  active?: boolean
  onClick?: () => void
}

export const MobileMenuItem: FC<MobileMenuItemProps> = (props) : JSX.Element => {

  return (
      <MobileMenuItemWrapper onClick={props.onClick} data-testid={'mobile-menu-item-wrapper'}>
        <MobileMenuItemIcon active={props.active}>{props.icon}</MobileMenuItemIcon>
        <MobileMenuItemText active={props.active}>{props.title}</MobileMenuItemText>
      </MobileMenuItemWrapper>
  )
}

export const MobileMenuItemWrapper = styled(Box)<BoxProps>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
}))

export const MobileMenuItemIcon = styled(Box)<BoxProps & { active?: boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  svg: {
    width: '100%',
    height: 'auto',
    color: props.active ? '#D1D2D3' : 'rgba(209,210,211, 0.6)'
  }
}))

export const MobileMenuItemText = styled(Typography)<TypographyProps & { active?: boolean }>((props) => ({
  fontSize: '10px',
  fontWeight: 500,
  color: props.active ? '#D1D2D3' : 'rgba(209,210,211, 0.6)'
}))

export default MobileMenuItem
