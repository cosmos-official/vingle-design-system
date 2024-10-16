import type { Meta, StoryObj } from '@storybook/react';
import Caption from '../components/Caption/Caption';

const meta = {
  title: 'Components/Caption',
  component: Caption,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Caption1: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Caption2: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
    is: 'c2',
  },
};
