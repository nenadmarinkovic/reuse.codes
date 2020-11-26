import React from "react";
import { Global, css } from "@emotion/core";

const DefaultLayout = ({ children }) => (
  <>
    <Global
      styles={css`
        @font-face {
          font-family: "Proxima Nova";
          src: url("../fonts/ProximaNovaBold.woff2") format("woff2"),
            url("../fonts/ProximaNovaBold.woff") format("woff");
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: "Proxima Nova";
          src: url("../fonts/ProximaNovaThin.woff2") format("woff2"),
            url("../fonts/ProximaNovaThin.woff") format("woff");
          font-weight: light;
          font-style: normal;
        }

        @font-face {
          font-family: "Proxima Nova";
          src: url("../fonts/ProximaNovaRegular.woff2") format("woff2"),
            url("../fonts/ProximaNovaRegular.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }

        ::placeholder {
          font-family: 'Proxima Nova';
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Proxima Nova";
          text-decoration: none;
        }

        .prism-code {
          margin-top: 60px !important;
        }

        a {
          color: #55aad4;
          font-weight: bold;
        }

        body {
          scroll-behavior: smooth;
          overflow-y: scroll;
          overflow-x: hidden;
          height: 100%;
          background-color: #f5f7fa;
        }
      `}
    />
    {children}
  </>
);

export default DefaultLayout;
