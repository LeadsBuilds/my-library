import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CstOptionGroup, CstOptionGroupProps } from "../src/components/CstOptionGroup"

export default {
    title: 'Components/CstOptionGroup',
    component: CstOptionGroup
} as ComponentMeta<typeof CstOptionGroup>;

const Template: ComponentStory<typeof CstOptionGroup> = (args) => <CstOptionGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
    options: [
        {
            id: 1,
            title: 'E-book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            title: 'Impresso',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        }
        ,{
            id: 3,
            title: 'Impresso + E-book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        }
    ]
} as CstOptionGroupProps