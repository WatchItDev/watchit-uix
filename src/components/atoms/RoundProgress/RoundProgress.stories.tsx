import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RoundProgress from "./RoundProgress";
import {PlayArrow} from "@mui/icons-material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Atoms/ RoundProgress",
    component: RoundProgress,
} as ComponentMeta<typeof RoundProgress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RoundProgress> = (args) => <RoundProgress {...args} />;

export const RoundProgressTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RoundProgressTest.args = {
  percentage: 80,
    text: 9,
}

export const RoundProgressTest2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RoundProgressTest2.args = {
    percentage: 50,
    size:150,
    textColor: 'red',
    progressBarColor: 'pink',
}

