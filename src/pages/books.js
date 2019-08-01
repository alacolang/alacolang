import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const find = (edges, name) => edges.find(edge => edge.node.name === name)

const books = [
  {
    id: 1,
    image: "book1",
    authors: ["فیروزه ضرغامی", "دکتر زهرا شهریور"],
    translators: [],
    title: "اختلال خلقی دوقطبی، راهنمای آموزش بیماری برای نوجوانان",
    publisher: "گیسا",
    link: "https://www.adinehbook.com/gp/product/6006885379",
  },
  {
    id: 2,
    image: "book2",
    authors: ["شری فان دیک", "کارما گیندون"],
    translators: ["بهروز افشاری"],
    title:
      "رفتار درمانی دیالکتیکی برای اختلال دوقطبی نوجوانان (کتاب کار نوجوان)",
    publisher: "ارجمند",
    link: "https://www.arjmandpub.com/Product/Details/9005/1",
  },
  {
    id: 3,
    image: "book3",
    authors: ["دکتر مژگان خادمی"],
    translators: [],
    title:
      "اختلال دوقطبی در کودکان و نوجوانان، آنچه والدین باید درباره «افسردگی-شیدایی» بدانند",
    publisher: "قطره",
    link: "https://www.adinehbook.com/gp/product/6001190452",
  },
  // {
  //   image: "book1.jpg",
  //   authors: ["", ""],
  //   translators: [],
  //   title: "",
  //   publisher: "",
  // },
]

const byId = (a, b) => a.id - b.id
const join = arr => arr.join("، ")

const Books = ({ data }) => (
  <>
    <SEO title="الاکلنگ: معرفی کتاب" />
    <Layout>
      <Container fluid className="books">
        <h2 className="books-title text-primary text-center">معرفی کتاب‌</h2>
        <Row className="no-gutters">
          <Col md={{ span: 6, offset: 3 }}>
            <Img
              className="books-image"
              fluid={
                find(data.images.edges, "books").node.childImageSharp.fluid
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-secondary text-center">
              در این صفحه شما با کتاب‌های مربوط به اختلال دوقطبی در کودکان و
              نوجوانان آشنا خواهید شد.
            </p>
          </Col>
        </Row>
        {books.sort(byId).map(book => (
          <a
            key={book.id}
            target="_blank"
            rel="noopener noreferrer"
            href={book.link}
          >
            <Row className="book">
              <Col xs={12} md={{ span: 2, offset: 3 }}>
                <Img
                  className="content-image"
                  fluid={
                    find(data.images.edges, book.image).node.childImageSharp
                      .fluid
                  }
                />
              </Col>
              <Col xs={12} md={{ span: 6 }}>
                <li>{book.title}</li>
                <li>
                  {book.authors.length > 1 ? "نویسندگان" : "نویسنده"}:{" "}
                  {join(book.authors)}
                </li>
                {book.translators.length > 0 && (
                  <li>
                    {book.translators.length > 1 ? "مترجم‌ها" : "مترجم"}:{" "}
                    {join(book.translators)}
                  </li>
                )}
                <li>ناشر: {book.publisher}</li>
              </Col>
            </Row>
          </a>
        ))}
      </Container>
    </Layout>
  </>
)

export const query = graphql`
  query books {
    site {
      siteMetadata {
        description
      }
    }
    images: allFile(filter: { relativePath: { regex: "/book/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Books
