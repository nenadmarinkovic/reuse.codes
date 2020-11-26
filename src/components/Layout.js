/** @jsx jsx */
import { jsx } from "../context";
import DefaultLayout from "./DefautLayout";
import Footer from "./Footer";
import Banner from "./Banner";
import Details from "./Details";
import { Helmet } from "react-helmet";

export const Layout = () => {
  return (
    <DefaultLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        ♺ Reuse | Reusable code snippets for web developers and designers.
        </title>
      </Helmet>
      <Banner />
      <Details />
      <Footer />
    </DefaultLayout>
  );
};
