import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CstButton, CstButtonProps } from "../src/components/CstButton"

export default {
    title: 'Components/CstButton',
    component: CstButton
} as ComponentMeta<typeof CstButton>;

const Template: ComponentStory<typeof CstButton> = (args) => <CstButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'Primary Button',
    type: 'primary'
} as CstButtonProps

export const Secondary = Template.bind({});

Secondary.args = {
    text: 'Secondary Button',
    type: 'secondary'
} as CstButtonProps
