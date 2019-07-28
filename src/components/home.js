import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Jumbotron from "react-bootstrap/Jumbotron"
import Layout from "../components/layout"

const Home = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Home {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <Jumbotron fluid className="d-flex justify-content-center">
        <p className="lead align-self-center">
          {data.site.siteMetadata.description}
        </p>
      </Jumbotron>
    </Layout>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home
