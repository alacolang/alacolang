import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import { GatsbyImage } from "gatsby-plugin-image";

const sections = [
  { tag: "self", title: "نوجوانان" },
  { tag: "family", title: "خانواده و دوستان" },
  { tag: "intervention", title: "مداخله در بحران" },
  { tag: "resources", title: "منابع مفید" },
  { tag: "mood-tracking", title: "پایش خلق" },
]

const getOrder = node =>
  Number(node.frontmatter && node.frontmatter.order) || 10 ** 6
const byOrder = (a, b) => getOrder(a) - getOrder(b)

const Header = () => {
  const data = useStaticQuery(graphql`query Header {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
  logo: file(relativePath: {regex: "/.*favicon-apple.*/"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
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
          shortTitle
          tags
          order
        }
      }
    }
  }
}
`)

  const edges = [
    ...data.posts.edges,
    {
      node: {
        id: 'books',
        fields: { slug: "/books" },
        frontmatter: { title: "معرفی کتاب", tags: ["resources"] },
      },
    },
  ]

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <GatsbyImage
          image={data.logo.childImageSharp.gatsbyImageData}
          className="d-inline-block align-top round logo" />
        <span className="text-primary font-weight-bold">الاکلنگ</span>
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
              {edges
                .map(({ node }) => node)
                .filter(node =>
                  (node.frontmatter.tags || []).includes(section.tag)
                )
                .sort(byOrder)
                .map(node => (
                  <NavDropdown.Item key={node.id} href={node.fields.slug}>
                    <span className="text-secondary">
                      {node.frontmatter.shortTitle || node.frontmatter.title}
                    </span>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header
