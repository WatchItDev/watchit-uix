// TODO to make this king of comments separating sections using only UPPERCASE
// Imports

// REACT IMPORTS
import React, { FC } from "react";

// MUI IMPORTS
import {
    Box,
    BoxProps,
    ListItemIcon,
    ListItemText,
    MenuItem as MI,
    styled,
} from "@mui/material";


// atom properties

// ATOM PROPERTIES
export type MenuItemProps = {
    icon?: JSX.Element,
    title?: string,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

// TODO: General observation - Please make sure that the component look like the design and all the properties are working fine.

export const MenuItem: FC<MenuItemProps> = (props) : JSX.Element => {

    return (
        //  TODO instead of set a fix width set 100% to fit to the wrapper also remember to put the property onClick
        <MI sx={{width:'10rem'}}>
            <MenuItemWrapper>
                {/*TODO the color of the icon and text depends of active property*/}
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText>
                    {props.title}
                </ListItemText>
                {/*TODO show active indicator only if is active, also it doesn't have the correct properties, should be #D71F27 and add an absolute position*/}
                <ActivePin></ActivePin>
            </MenuItemWrapper>
        </MI>
    )
}

// Wrapper
// STYLED COMPONENTS

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