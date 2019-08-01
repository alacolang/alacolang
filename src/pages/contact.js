import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <>
    <SEO title="الاکلنگ: معرفی کتاب" />
    <Layout>
      <Container fluid className="contact">
        <Form
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>ایمیل شما</Form.Label>
            <Form.Control type="email" placeholder="ایمیل خود را وارد کنید" />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>درخواست شما</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            ارسال
          </Button>
        </Form>
      </Container>
    </Layout>
  </>
)

export default Contact
