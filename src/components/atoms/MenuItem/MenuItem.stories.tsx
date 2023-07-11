import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuItem from "./MenuItem";
import { IconMenu } from "@tabler/icons";
import { Box } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Atoms/ MenuItem",
    component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuItem> = (args) => 
  <Box sx={{width:'100px'}}>
    <MenuItem {...args} />;
  </Box>

export const MenuItemTest = Template.bind({});
MenuItemTest.args = {
  id: '1',
  icon: <IconMenu />,
  title: 'Menu 1',
  active: true,
  onClick: () => console.log('clicked menu item')
}
