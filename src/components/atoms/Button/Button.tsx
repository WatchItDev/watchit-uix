import React, {FC, PropsWithChildren} from "react";
import {ButtonProps as MuiButtonProps, styled, Button as MuiButton, Box} from "@mui/material";

type ButtonVariant = 'primary' | 'secondary' | 'flat'

export type ButtonProps = {
  variant: ButtonVariant
  icon?: JSX.Element
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  backgroundColor?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) : JSX.Element => {

  const getButtonVariant = (v:ButtonVariant) => {
    const variants = { 'primary': 'contained', 'secondary': 'outlined', 'flat': 'text' }
    return variants[v] as MuiButtonProps['variant']
  }

  return (
    <ButtonWrapper
      onClick={props.onClick} variant={getButtonVariant(props.variant)}
      sx={{ padding: props.children ? '0.3rem 1rem' : '0.3rem 0.5rem' }}
    >
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {
          props.icon ? (
            <Box
              display={'flex'} alignItems={'center'} justifyContent={'center'}
              sx={{ mr: props.children ? '0.5rem' : '0' }} data-testid={'icon'}
            >
              { props.icon }
            </Box>
          ) : <></>
        }
        {
          props.children ? (
            props.children
          ) : <></>
        }
      </Box>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled(MuiButton)<MuiButtonProps & { backgroundColor?: string }>((props) => ({
  backgroundColor: props.backgroundColor
}))

export default Button
