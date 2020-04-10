import React from "react"
import { graphql } from "gatsby"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => (
  <>
    <SEO title="الاکلنگ: ارتباط با ما" />
    <Layout>
      <Container fluid className="contact">
        <h2 className="books-title text-primary text-center">ارتباط با ما</h2>
        <Row className="no-gutters">
          <Col md={{ span: 6, offset: 3 }}>
            <Img
              className="books-image"
              fluid={data.image.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p className="text-secondary">
              شما می توانید از طریق فرم زیر با ما در ارتباط باشید. پیام‌تان را
              بگذارید و ما در اسرع وقت به شما پاسخ خواهیم داد. در ضمن شما
              می‌توانید از طریق{" "}
              <a href="https://www.instagram.com/alacolang/">
                صفحه اینستاگرام الاکلنگ
              </a>{" "}
              ما را دنبال کنید.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form
              name="contact"
              method="post"
              // netlify-honeypot="bot-field"
              // data-netlify="true"
              action="https://getform.io/f/779968ae-0be2-4b49-9734-adc6cbd38c7c"
            >
              {/* <input type="hidden" name="bot-field" /> */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  <span className="text-secondary">ایمیل شما</span>
                </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>
                  <span className="text-secondary">پیام شما</span>
                </Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                ارسال
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export const query = graphql`
  query contact {
    image: file(relativePath: { eq: "contact-us.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Contact
