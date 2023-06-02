import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './fan';

export default {
  title: '机器零件/旋桨式搅拌器',
  tags: ['机器零件'],
  component: 'matjs-fan',
  render: ({ width, speed }) => html`<matjs-fan width=${width} speed=${speed}></matjs-fan>`,
  argTypes: {
    speed: {
      control: { type: 'select' },
      options: ['stop', 'slow', 'normal', 'fast'],
    },
  },
} as Meta;

export const Fan = { args: { width: '200px', speed: 'slow' } };
