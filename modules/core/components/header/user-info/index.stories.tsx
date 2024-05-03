import type { Meta, StoryObj } from "@storybook/react";
import { UserInfo } from ".";

const meta = {
  title: "Components/UserInfo",
  component: UserInfo,
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    imgSrc: "abc",
    displayName: "Mark",
    email: "marktohtk@gmail.com",
  },
};

export const MissingPic: Story = {
  args: {
    imgSrc: "abc",
    displayName: "Mark",
    email: "marktohtk@gmail.com",
  },
};

export const MissingInfo: Story = {
  args: {
    imgSrc: "abc",
  },
};

export const OnlyName: Story = {
  args: {
    displayName: "Mark",
  },
};

export const OnlyEmail: Story = {
  args: {
    email: "marktohtk@gmail.com",
  },
};
