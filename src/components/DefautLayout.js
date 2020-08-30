import React from "react";
import { Global, css } from "@emotion/core";

const DefaultLayout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Open Sans";
          text-decoration: none;
        }

        body {
          scroll-behavior: smooth;
          overflow-y: scroll;
          overflow-x: hidden;
          height: 100%;
        }
      `}
    />
    {children}
  </>
);

export default DefaultLayout;
