import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChannelItem from "./ChannelItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Base/ ChannelItem",
    component: ChannelItem,
} as ComponentMeta<typeof ChannelItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChannelItem> = (args) => <ChannelItem {...args} />;

export const ChannelItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemTest.args = {
  innerLetter: 'austin',
  label: 'austin',
  selected: true,
  size: 100,
  onClick: () => console.log('clicked channel item')
}

export const ChannelItemSmall = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemSmall.args = {
  innerLetter: 'austin',
  size: 50,
  innerLetterSize: 20,
  selected: true,
  borderWidth: 3,
  onClick: () => console.log('clicked channel item')
}