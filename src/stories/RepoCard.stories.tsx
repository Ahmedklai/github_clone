import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RepoCardUi } from "./RepoCard";

export default {
  title: "Example/RepoCard",
  component: RepoCardUi,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof RepoCardUi>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RepoCardUi> = (args) => (
  <RepoCardUi {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "id",
  name: "Repo Name",
  url: "Repo URL",
  descriptionHTML: "<p>Description of the current repo </p>",
  primaryLanguage: "Type Script",
  owner: "Ahmed Klai",
  stargazers: 5,
  forks: 3,
};
