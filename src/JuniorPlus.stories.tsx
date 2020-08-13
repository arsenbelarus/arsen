import React from 'react';
import {Meta} from '@storybook/react/types-6-0';

import JuniorPlus from './JuniorPlus';
import {JuniorPlusDecorator} from "./stories/decorators/JuniorPlusDecorator";

export default {
    title: 'Example/JuniorPlus',
    component: JuniorPlus,
    decorators: [JuniorPlusDecorator],
} as Meta;

export const JuniorPlusBaseExample = (props: any) => {
    return (
        <JuniorPlus/>
    )
}