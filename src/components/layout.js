import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Img from "gatsby-image"
import Colors from "./colors"
import "./custom.scss"
import "./layout.css"

const sections = [
  {
    tag: "self",
    title: "نوجوانان",
  },
  { tag: "family", title: "خانواده و دوستان" },
  { tag: "intervension", title: "مداخله در بحران" },
  { tag: "resources", title: "منابع مفید" },
  { tag: "mood-tracking", title: "پایش خلق" },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      logo: file(relativePath: { regex: "/.*favicon-apple.*/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      posts: allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <div className="rtl">
      {/* <Colors /> */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Img
            fixed={data.logo.childImageSharp.fixed}
            className="d-inline-block align-top round logo"
          />
          <span className="text-primary font-weight-bold">الاکنگ</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {sections.map(section => (
              <NavDropdown
                title={section.title}
                id={section.title}
                key={section.title}
              >
                {data.posts.edges
                  .filter(({ node }) =>
                    (node.frontmatter.tags || []).includes(section.tag)
                  )
                  .map(({ node }) => (
                    <NavDropdown.Item key={node.id} href={node.fields.slug}>
                      <span className="text-secondary">
                        {node.frontmatter.title}
                      </span>
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>

      <Container fluid as="footer">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="align-items-center">
              <Col md={{ span: "auto" }}>
                <span className="text-muted">درباره ما</span>
              </Col>
              <Col md={{ span: "auto" }}>
                <span className="text-muted">ارتباط با ما</span>
              </Col>
              <Col md={{ span: "auto" }}>
                <span className="text-muted">باز نشر مطالب آزاد است.</span>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <a href="https://instagram.com/parisa.pedraam/">
                  <Img
                    fixed={data.instagram.childImageSharp.fixed}
                    className="d-inline-block align-top "
                  />
                </a>
                <a href="https://www.linkedin.com/in/parisa-pedram">
                  <Img
                    fixed={data.linkedin.childImageSharp.fixed}
                    className="d-inline-block align-top "
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
