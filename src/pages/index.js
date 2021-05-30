import * as React from "react";
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following Gatsby tutorial!</p>
      <StaticImage
        alt="Husky puppy"
        src="../images/gabe-rebra.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
