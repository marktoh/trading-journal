import type { Meta, StoryObj } from "@storybook/react";
import { TransactionTable } from ".";

const meta = {
  title: "Components/TransactionTable",
  component: TransactionTable,
} satisfies Meta<typeof TransactionTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
