// IMPORTS
import React from "react"
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react";
import MenuItem from "./MenuItem";
import { IconBrandSafari } from "@components/atoms/Icons";

export default {
    title: "Watchit Atoms/ MenuItem",
    component: MenuItem,
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />

export const MenuItemTest = Template.bind({});

MenuItemTest.args = {
    title:"Browse",
    icon:<IconBrandSafari/>,
}