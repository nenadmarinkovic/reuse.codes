/** @jsx jsx */
import { jsx } from "../context";
import DefaultLayout from "./DefautLayout";
import Footer from "./Footer";
import Banner from "./Banner";

export const Layout = () => {
  return (
    <DefaultLayout>
      <Banner />
      <Footer />
    </DefaultLayout>
  );
};
