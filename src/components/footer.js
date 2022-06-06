import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GatsbyImage } from "gatsby-plugin-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  return (
    <Container fluid as="footer">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Row className="align-items-center">
            <Col md={{ span: "auto" }}>
              <Link to="/about-us">
                <span className="text-muted">درباره ما</span>
              </Link>
            </Col>
            <Col md={{ span: "auto" }}>
              <Link to="/contact-us">
                <span className="text-muted">ارتباط با ما</span>
              </Link>
            </Col>
            <Col md={{ span: "auto" }}>
              <span className="text-muted">باز نشر مطالب آزاد است.</span>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <a href="https://www.instagram.com/alacolang/">
                <GatsbyImage
                  image={data.instagram.childImageSharp.gatsbyImageData}
                  className="d-inline-block align-top "
                />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
