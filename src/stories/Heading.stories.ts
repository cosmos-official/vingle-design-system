import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../components/Heading/Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Heading3: Story = {
  args: {
    as: 'h3',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};
