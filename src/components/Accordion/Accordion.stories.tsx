import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions'

import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const collapsedAccordion = () => <Accordion title={'Story Accordion'} accordionCollapsed={true} setAccordionCollapsed={action('click')} />;
export const UncollapsedAccordion = () => <Accordion title={'Story Accordion'}  accordionCollapsed={false} setAccordionCollapsed={action('click')}/>;
export const ChangeAccordion = () => {
    let [accordion, setAccordion] = useState<boolean>(true)
    return <Accordion title={'Story Accordion'} accordionCollapsed={accordion} setAccordionCollapsed={setAccordion}/>
};