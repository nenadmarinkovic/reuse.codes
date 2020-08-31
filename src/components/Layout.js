/** @jsx jsx */
import { jsx } from "../context";
import DefaultLayout from "./DefautLayout";
import Footer from "./Footer";
import Banner from "./Banner";
import Details from "./Details";

export const Layout = () => {
  return (
    <DefaultLayout>
      <Banner />
      <Details />
      <Footer />
    </DefaultLayout>
  );
};
