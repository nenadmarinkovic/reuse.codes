/** @jsx jsx */
import React from "react";

import { jsxPragma, mdxPragma } from "isolated-theme-ui";

export const MyThemeContext = React.createContext({
  components: {},
});

export const jsx = jsxPragma(MyThemeContext);
export const mdx = mdxPragma(MyThemeContext);
