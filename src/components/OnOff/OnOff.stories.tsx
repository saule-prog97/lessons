import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions'
import OnOff from "./OnOff";


export default {
    title: 'OnOff stories',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const OnMode = () => <OnOff on={true} setOn={action('click')} />;
export const OffMode = () => <OnOff on={false} setOn={action('click')}/>;
export const ChangeOnOff = () => {
    let [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} setOn={setValue}/>
};