import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MobileMenuItem from "./MobileMenuItem";
import {IconMenu} from "@tabler/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Atoms/ MobileMenuItem",
    component: MobileMenuItem,
} as ComponentMeta<typeof MobileMenuItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MobileMenuItem> = (args) => <MobileMenuItem {...args} />;

export const ChannelItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemTest.args = {
  icon: <IconMenu />,
  title: 'Menu',
  active: true,
  onClick: () => console.log('clicked menu item')
}
