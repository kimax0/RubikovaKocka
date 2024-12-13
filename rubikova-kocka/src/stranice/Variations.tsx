import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "react-bootstrap"

const Variations = () => {
  return (
    <Container className="container-fluid">
      <Row>
        <Col className="col-12">
          <h1 className="text-center">Variations</h1>
          <h2 className="text-center">Rectangular cuboids</h2>
          <h3>Cubes</h3>
          <p>
            The first group I would highlight is cubes of various dimensions. The original Rubik's Cube is a 3x3 
            cube, but there are also cubes of dimensions 2x2, 4x4, 5x5, and so on. The most complex cube that 
            exists is the 33x33 cube. Someone also made a 1x1 cube, but it is not used as a puzzle; rather, it 
            serves as a humorous variant of the Rubik's Cube.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 ms-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="1x1 kocka." src="/varijante/1x1x1.jpg" />
              <CardTitle>Rubik's 1x1</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="2x2 kocka." src="/varijante/2x2x2.jpg" />
              <CardTitle>Rubik's 2x2</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="3x3 kocka." src="/varijante/3x3x3.jpg" />
              <CardTitle>Rubik's 3x3</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="4x4 kocka." src="/varijante/4x4x4.jpg" />
              <CardTitle>Rubik's 4x4</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 me-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="33x33 kocka." src="/varijante/33x33x33.jpg" />
              <CardTitle>Rubik's 33x33</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Non-cubes</h3>
          <p>
            Until now, I’ve been referring to 2x2, 3x3, 4x4, assuming that the third dimension is the same. So, 2x2 
            is actually 2x2x2, 3x3 is 3x3x3, and so on. What happens when we discard that assumption? We get 
            puzzles like the Tower (2x2x3, 2x2x4, ...) or puzzles with consecutive numbers (1x2x3, 2x3x4, ...). 
            Practically any three numbers smaller than 10 that you can imagine, there’s a puzzle with those 
            dimensions that has been thoroughly researched and documented.<br/>These three non-cubes are 
            particularly interesting to me:
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 ms-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="2x2x3 cube." src="/varijante/2x2x3.jpg" />
              <CardTitle>Tower 2x2x3</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="1x2x3 cube." src="/varijante/1x2x3.jpg" />
              <CardTitle>Consecutives 1x2x3</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="2x4x6 cube." src="/varijante/2x4x6.jpg" />
              <CardTitle>Evens 2x4x6</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 me-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="3x5x7 kocka." src="/varijante/3x5x7.jpg" />
              <CardTitle>Odds 3x5x7</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="text-center">Other shapes</h2>
      </Row>
      <Row>
        <h3>Pyramids</h3>
        <p>
          These spatial puzzles can also be found in other shapes besides cuboids. In this case, they can be in 
          the shape of a pyramid. This type of puzzle is popular because it is easier to solve. Pyraminx (a regular 
          tetrahedron 3x3) is easy to solve intuitively, which is not the case with the classic 3x3 Rubik's Cube. 
          There is also a Mini Pyraminx (a regular tetrahedron 2x2), which is equivalent to a 1x1 Rubik's Cube in 
          terms of difficulty.<br/>The most well-known puzzles of this type are:
        </p>
      </Row>
      <Row>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 ms-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Mini Pyraminx." src="/varijante/2x2.jpg" />
              <CardTitle>Mini Pyraminx</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Pyraminx" src="/varijante/3x3.jpg" />
              <CardTitle>Pyraminx</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 me-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Master Pyraminx." src="/varijante/4x4.jpg" />
              <CardTitle>Master Pyraminx</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <h3>Megaminx</h3>
        <p>
          In addition to the Pyraminx puzzle, which can be seen as a step back from the Rubik's Cube, we can also 
          \take a step forward. What the Pyraminx has as a triangle, and the Rubik's Cube has as a square, the 
          Megaminx has as a pentagon. The Megaminx is essentially a truncated dodecahedron, consisting of 12 
          pentagons, and each pentagon has 11 pieces. People usually learn to solve the Megaminx when solving 3x3 
          or 4x4 cubes becomes repetitive. Like the Pyraminx, the Megaminx also has larger variants. Their names 
          follow standard metric prefixes, so we have Gigaminx, Teraminx, Petaminx...
        </p>
      </Row>
      <Row>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 ms-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Megaminx." src="/varijante/3x3_minx.jpg" />
              <CardTitle>Megaminx</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Gigaminx." src="/varijante/5x5_minx.jpg" />
              <CardTitle>Gigaminx</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Teraminx." src="/varijante/7x7_minx.png" />
              <CardTitle>Teraminx</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 me-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Petaminx." src="/varijante/9x9_minx.png" />
              <CardTitle>Petaminx</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-muted">
            This is a list of the most popular <s>different</s> puzzles. There are too many variants that are 
            solved in the same way, which I haven't mentioned. These are the most basic details; for lesser-known 
            cubes, it's best to do your own research. As a starting point, I suggest you look into the puzzle 
            "Square-1."
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Variations