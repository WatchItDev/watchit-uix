import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "./Logo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Base/ Logo",
    component: Logo,
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LogoTest.args = {
  size: 200,
  onClick: () => {
    console.log('clicked icon button')
  }
}