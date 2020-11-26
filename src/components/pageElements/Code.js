import styled from "@emotion/styled";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "../../custom-theme";
import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { copyToClipboard } from "../../utils/copy-to-clipboard";

const Pre = styled.pre`
  text-align: left;
  padding: 1.5em;
  overflow-x: auto;
  border-radius: 5px;
  line-height: 1.4;

  & .token-lline {
    line-height: 1.3em;
    height: 1.3em;
  }

  font-size: 1em;
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 1.25rem;
  top: 0.5rem;
  border: 0;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.25em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

export const Code = ({ codeString, language, ...props }) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  const handleClick = () => {
    copyToClipboard(codeString);
  };
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
