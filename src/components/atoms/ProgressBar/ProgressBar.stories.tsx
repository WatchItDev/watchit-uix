import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from "./ProgressBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Atoms/ ProgressBar",
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const ProgressBarDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProgressBarDefault.args = {
  percentage: 50,
  showBullet: true
}

export const ProgressBarWhite = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProgressBarWhite.args = {
  percentage: 50,
  barColor: '#fff',
  showBullet: false
}