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
// import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css"
import "./custom.scss"
import "./layout.css"

const sections = [
  {
    tag: "self",
    title: "نوجوانان",
  },
  { tag: "family", title: "خانواده و دوستان" },
  // { tag: "intervension", title: "مداخله در بحران" },
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
      logo: file(relativePath: { regex: "/.*favicon.*/" }) {
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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <Img
            fixed={data.logo.childImageSharp.fixed}
            className="d-inline-block align-top round"
          />
          <span style={{ paddingRight: 7 }}>الاکنگ</span>
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
                      {node.frontmatter.title}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>

      <Container as="footer">
        <Row>
          <Col>
            <span className="text-muted">{data.site.siteMetadata.author}</span>
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
