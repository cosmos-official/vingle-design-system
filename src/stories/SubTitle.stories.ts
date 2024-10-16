import type { Meta, StoryObj } from '@storybook/react';

import SubTitle from '../components/SubTitle/SubTitle';

const meta = {
  title: 'Components/SubTitle',
  component: SubTitle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SubTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubTitle1: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const SubTitle2: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
    is: 'sub2',
  },
};

export const SubTitle3: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
    is: 'sub3',
  },
};
