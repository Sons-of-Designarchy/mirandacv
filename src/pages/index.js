import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as Comp from "../components/layoutComponents";
import Hero from "../components/hero";
// import { HomeProjects } from "../components/homeProjects";
import Menu from "../components/menu";
import { HomeProjects } from "../components/homeProjects";
import Footer from "../components/footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Comp.Container>
      <Menu />
      <Hero />
      <HomeProjects />
    </Comp.Container>
    <Footer />
  </Layout>
);

export default IndexPage;
