import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CstCard } from "../src/components/CstCard"

export default {
    title: 'Components/CstCard',
    component: CstCard
} as ComponentMeta<typeof CstCard>;

const Template: ComponentStory<typeof CstCard> = () => <CstCard />;

export const Desktop = Template.bind({});