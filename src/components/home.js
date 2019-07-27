import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Jumbotron from "react-bootstrap/Jumbotron"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Home = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Home {
      site {
        siteMetadata {
          title
          description
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
            }
          }
        }
      }
    }
  `)
  console.log("data", data.posts.edges[0])

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Img
            fixed={{
              src: "src/images/favicon-32x32.png",
              width: 30,
              height: 30,
              srcSet: "",
            }}
            className="d-inline-block align-top"
          />
          الاکنگ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="نوجوانان" id="basic-nav-dropdown">
              {data.posts.edges.map(({ node }) => (
                <NavDropdown.Item key={node.id} href={node.fields.slug}>
                  {node.frontmatter.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="خانواده و دوستان" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">چی نگیم؟</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron>
        <p>{data.site.siteMetadata.description}</p>
      </Jumbotron>
      <main>{children}</main>

      <footer>پریسا پدرام، دکترای روان‌شناسی</footer>
    </>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home
