import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RepoCardUi } from "./RepoCard";
import { TabContent } from "../components/TabContent/index";
import { Tab } from "../pages/Profile/styles";

export default {
  title: "Example/TabContent",
  component: TabContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TabContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabContent> = (args) => (
  <TabContent {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  numberOfRepos: 2,
};
