import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CstTextInput } from "../src/components/CstTextInput"

export default {
    title: 'Components/CstTextInput',
    component: CstTextInput
} as ComponentMeta<typeof CstTextInput>;

const Template: ComponentStory<typeof CstTextInput> = () => <CstTextInput />;

export const Default = Template.bind({});