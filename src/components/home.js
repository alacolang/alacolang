import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Jumbotron from "react-bootstrap/Jumbotron"
import Layout from "./layout"
import Story from "./story"

const Home = ({ data }) => (
  <Layout>
    <Jumbotron fluid className="d-flex justify-content-center">
      <p className="lead align-self-center">
        {data.site.siteMetadata.description}
      </p>
    </Jumbotron>
    <Story images={data.images} />
  </Layout>
)

export default Home
