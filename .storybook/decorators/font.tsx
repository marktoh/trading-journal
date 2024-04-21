import React from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const FontDecorator = (Story) => (
  <main className={inter.className}>
    <Story />
  </main>
);

export { FontDecorator };
