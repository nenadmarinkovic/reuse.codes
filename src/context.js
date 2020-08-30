/** @jsx jsx */
import React from "react";

import { jsxPragma, mdxPragma } from "isolated-theme-ui";
import theme from "./theme";

export const MyThemeContext = React.createContext({
  theme,
  components: {},
});

export const jsx = jsxPragma(MyThemeContext);
export const mdx = mdxPragma(MyThemeContext);
