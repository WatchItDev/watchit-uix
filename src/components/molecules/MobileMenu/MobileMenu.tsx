import React, { FC } from "react";
import { withTheme } from '@src/hoc/withTheme'
import { styled, Box, BoxProps } from "@mui/material";
import { MobileMenuItem, MobileMenuItemProps } from "@atoms/MobileMenuItem";

export type MobileMenuProps = {
  items: MobileMenuItemProps[]
  active: string,
  onItemChange?: (id: string) => void
}

export const MobileMenu: FC<MobileMenuProps> = (props): JSX.Element => {
  return (
    <MobileMenuWrapper>
      {
        props.items.map((el) => {
          return (
            <MobileMenuItem
                key={el.id}
                {...el}
                active={el.id === props.active}
                onClick={props.onItemChange} />
          )
        })
      }
    </MobileMenuWrapper>
  )
}

export const MobileMenuWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '65px',
  backgroundColor: '#1A1C20'
}))

export default withTheme<MobileMenuProps>(MobileMenu)
