import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RepoCardUi } from "./RepoCard";
import { ProfileDataUI } from "./ProfileData";

export default {
  title: "Example/Profile",
  component: ProfileDataUI,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ProfileDataUI>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileDataUI> = (args) => (
  <ProfileDataUI {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  username: "AhmedKlai",
  name: "Ahmed klai",
  avatarUrl: "https://avatars.githubusercontent.com/u/60032213?v=4",
  followers: 12,
  following: 13,
  company: "MVST",
  location: "TUNIS, El KEF",
  email: "ahmed@mvst.de",
  blog: "simple blog Link",
};
