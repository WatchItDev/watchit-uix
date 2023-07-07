import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SliderVolumen from "./SliderVolumen";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ SliderVolumen",
    component: SliderVolumen,
} as ComponentMeta<typeof SliderVolumen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SliderVolumen> = (args) => <SliderVolumen {...args}/>;

export const Slider = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Slider.args = {
  alwaysShow: true,
  defaultVolume: 10
}
