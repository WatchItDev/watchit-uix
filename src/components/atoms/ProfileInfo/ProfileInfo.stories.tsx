import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProfileInfo from "./ProfileInfo";
import {IconClock} from "@tabler/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Atoms/ ProfileInfo",
    component: ProfileInfo,
} as ComponentMeta<typeof ProfileInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileInfo> = (args) => <ProfileInfo {...args} />;

export const ProfileInfoTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileInfoTest.args = {
  icon: <IconClock />,
  title: '1h 28m',
  subTitle: 'Duration',
  onClick: () => console.log('clicked profile info')
}
