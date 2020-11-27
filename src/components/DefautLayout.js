import React from "react";
import { Global, css } from "@emotion/core";

const DefaultLayout = ({ children }) => (
  <>
    <Global styles={css``} />
    {children}
  </>
);

export default DefaultLayout;
