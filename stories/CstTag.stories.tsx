import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CstTag } from "../src/components/CstTag"

export default {
    title: 'Components/CstTag',
    component: CstTag
} as ComponentMeta<typeof CstTag>;

const Template: ComponentStory<typeof CstTag> = (args) => <CstTag {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: 'Android'
}