import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryBlackButton: Story = {
  args: {
    variant: 'primaryBlack',
    onClick: () => alert('클릭하기'),
    children: '클릭하기',
  },
};

export const PrimaryPinkButton: Story = {
  args: {
    onClick: () => alert('클릭하기'),
    children: '클릭하기',
    variant: 'primaryPink',
  },
};

export const GrayButton: Story = {
  args: {
    onClick: () => alert('클릭하기'),
    children: '클릭하기',
    variant: 'gray',
  },
};
