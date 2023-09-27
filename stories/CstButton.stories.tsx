import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CstButton } from "../src/components/CstButton"

export default {
    title: 'Components/CstButton',
    component: CstButton
} as ComponentMeta<typeof CstButton>;

const Template: ComponentStory<typeof CstButton> = () => <CstButton />;

export const Primary = Template.bind({});