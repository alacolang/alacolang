import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Layout from "./layout"
import Story from "./story"
import seesaw from "../gifs/seesaw-2.gif"

const Home = ({ data }) => (
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
)

export default Home
