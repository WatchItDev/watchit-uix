// Imports
import React,
{
    FC,
    PropsWithChildren,
} from "react";
import {
    Box,
    BoxProps,
    ListItemIcon,
    ListItemText,
    MenuItem as MI,
    MenuItemProps as MiProps,
    styled,
} from "@mui/material";


// atom properties
export type MenuItemProps = {
    icon?: JSX.Element,
    title?: string,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}


export const MenuItem: FC<MenuItemProps> = (props) : JSX.Element => {

    return (

        <MI sx={{width:'10rem'}}>
            <MenuItemWrapper>
            <ListItemIcon>
                {props.icon}
            </ListItemIcon>
            <ListItemText>
                {props.title}
            </ListItemText>
                <ActivePin></ActivePin>
            </MenuItemWrapper>

        </MI>
    )


}

// Wrapper
const MenuItemWrapper = styled(Box)<BoxProps>((props) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'center'
}))

const ActivePin = styled(Box)<BoxProps>((props) => ({
    background: 'red',
    width: '2px',
    height: '1rem',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
}))

export default MenuItem