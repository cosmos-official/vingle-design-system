import type { Meta, StoryObj } from '@storybook/react';

import Title from '../components/Title/Title';

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title1: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Title2: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
    is: 't2',
  },
};
