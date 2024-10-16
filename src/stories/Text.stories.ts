import type { Meta, StoryObj } from '@storybook/react';
import Text from '../components/Text/Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextDefault: Story = {
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const ParagraphBody1: Story = {
  args: {
    is: 'b1',
    as: 'p',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const SpanBody2: Story = {
  args: {
    is: 'b2',
    as: 'span',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const DivBody3: Story = {
  args: {
    is: 'b3',
    as: 'div',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};
