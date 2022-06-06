import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Story from "../components/story"
import seesaw from "../gifs/seesaw-2.gif"

const IndexPage = ({ data }) => (
  <>
    <SEO title="الاکلنگ" />
    <Layout>
      <Jumbotron fluid>
        <Container className="align-items-center justify-content-center">
          <Row>
            <Col className="d-flex  justify-content-center">
              <img src={seesaw} className="home-seesaw" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-primary align-self-center text-center">
                {data.site.siteMetadata.description}
              </h2>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Story images={data.images} />
    </Layout>
  </>
)

export const query = graphql`query home {
  site {
    siteMetadata {
      description
    }
  }
  images: allFile(filter: {relativePath: {regex: "/story/"}}) {
    edges {
      node {
        id
        name
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
    }
  }
}
`

export default IndexPage
