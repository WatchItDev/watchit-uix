import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Poster from "./Poster";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ Poster",
    component: Poster,
} as ComponentMeta<typeof Poster>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Poster> = (args) => <Poster {...args} />;

export const PosterDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PosterDefault.args = {
  img: 'https://cuevana3.it/img/Y1lmQ2RJeTdqcnk1S3dPcFViL1lhWG1BLzUrMmZnZlE4SW5DTGJZaHZyLzNScDIyYkFKbW1tc3F3cGVmOUNQaQ.webp',
  title: 'Reviviendo Navidad asda das dasd asdasd',
  progress: 50,
  year: 2022,
  canHover: true,
  onClick: () => console.log('on click poster'),
  onPlayClick: () => console.log('on click play')
}