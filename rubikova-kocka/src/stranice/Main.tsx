import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router"

const Main = () => {
  return (
      <Container className="container-fluid">
        <Row>
          <Col className="col-xl-3 col-md-6 col-12">
            <Image alt="A lot of cubes." src="/glavna/glavna_banner.jpg" className="img-fluid" />
          </Col>
          <Col className="mt-2">
            <p>
              Welcome to my website. Here, you can learn about a misunderstood hobby that is often a victim of 
              prejudice. That hobby is solving Rubik's cubes. It's hard to explain why people mistakenly assume 
              that only "nerds" engage in this activity, but perhaps the answer lies in the story of how the famous 
              3x3 Rubik's Cube was created.
            </p>
            <Link to="/history">
              <Button variant="outline-primary" className="m-0">
                Check out the history of the Rubik's cube
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <h2 className="text-center m-3">Fun facts</h2>
        </Row>
        <Row>
          <Col className="col-xl-3 col-md-6 col-12">
            <Card className="my-1">
              <Card.Img variant="top" alt="The Magic cube." src="/glavna/prvobitno_ime.jpg" />
              <Card.Header>
                <Card.Title>Original name</Card.Title>
              </Card.Header>
              <Card.Body>
                When it was first released on the market as a toy, the Rubik's Cube was called the "Hungarian Magic 
                Cube." The name was changed due to patenting issues.
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-xl-3 col-md-6 col-12">
            <Card className="my-1">
              <Card.Img variant="top" alt="Image of the universe." src="/glavna/broj_kombinacija.jpg" />
              <Card.Header>
                <Card.Title>Number of permutations</Card.Title>
              </Card.Header>
              <Card.Body>
                The total number of possible permutations of a 3x3 Rubik's Cube is 43,252,003,274,489,856,000, or a 
                little over 43 quintillion 252 quadrillion.
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-xl-3 col-md-6 col-12">
            <Card className="my-1"> 
              <Card.Img variant="top" alt="Rubik's cube timer" src="/glavna/svetski_rekord.jpg" />
              <Card.Header>
                <Card.Title>World record</Card.Title>
              </Card.Header>
              <Card.Body>
                The current world record for solving a 3x3 Rubik's Cube is 3.13 seconds, held by Max Park from the 
                USA. Before that, the record was 3.47 seconds and was held by Yusheng Du from China.
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-xl-3 col-md-6 col-12">
            <Card className="my-1">
              <Card.Img variant="top" alt={`Book "You Can Do the Cube".`} src="/glavna/prvo_uputstvo.jpg" />
              <Card.Header>
                <Card.Title>First guide</Card.Title>
              </Card.Header>
              <Card.Body>
                The first guide for solving the 3x3 Rubik's Cube was written by Patrick Bossert in the book 
                "You Can Do the Cube". Patrick was 13 years old at the time.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default Main