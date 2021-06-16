import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { Code } from "./src/components/pageElements/Code";

const components = {
  "p.inlineCode": (props) => (
    <code {...props} style={{ backgroundColor: "#F3F5F9" }}></code>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <div style={{ position: "relative" }}>
          <Code
            codeString={props.children.trim()}
            language={
              props.className && props.className.replace("language-", "")
            }
            {...props}
          />
        </div>
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
