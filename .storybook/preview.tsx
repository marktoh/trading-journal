import type { Preview } from "@storybook/react";
import { FontDecorator } from "./decorators/font";

import "../app/globals.css";

const preview: Preview = {
  decorators: [FontDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
