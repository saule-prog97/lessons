import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

// import { Button, ButtonProps } from './Button';
import { Rating } from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const EmptyRating = () => <Rating value={0} setValue={() => 'a'}/>;
export const Rating1 = () => <Rating value={1} setValue={() => 'a'}/>;
export const Rating2 = () => <Rating value={2} setValue={() => 'a'}/>;
export const Rating3 = () => <Rating value={3} setValue={() => 'a'}/>;
export const Rating4 = () => <Rating value={4} setValue={() => 'a'}/>;
export const Rating5 = () => <Rating value={5} setValue={() => 'a'}/>;
export const ChangeRating = () => {
    let [rating, setRating] = useState<0 | 1 | 2 | 3 | 4 | 5>(3)
    return <Rating value={rating} setValue={setRating}/>
};

// export const Primary = Template.bind({});
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };