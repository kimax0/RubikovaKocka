import { Button, Card, CardBody, CardImg, CardTitle, Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router"

const History = () => {
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <h1 className="text-center">Istorija</h1>
          <h2>Ernő Rubik</h2>
          <p>
            Ernő Rubik (Budapest, July 13, 1944) is a Hungarian inventor, sculptor, and professor of architecture. 
            He is best known for his toys—the Rubik's Snake and the Rubik's Cube, which is considered one of the 
            best-selling toys in the world, with over 300 million units sold by 2005. Born in Budapest during World 
            War II, his father was an aircraft engineer at a factory in Esztergom, and his mother was a poet. In 
            1967, he graduated from the Technical University of Budapest. In 1983, he founded his own studio (Rubik 
            Studio), and in 1987, he became a professor. In 1990, he co-founded the Hungarian Academy of Engineering 
            (*Magyar Mérnöki Akadémia*) with János Ginstler and served as its president until 1996. The first 
            Rubik's Cubes  were made in 1977 and appeared in Budapest stores that year. Three years later, the cube 
            was showcased at toy fairs in major Western cities such as London, New York, Paris, and Nuremberg. 
            Today, Ernő Rubik primarily writes about architecture and runs the Rubik Studio.
          </p>
        </Col>
        <Col className="col-xxl-2 col-lg-3 col-12">
          <Image alt="Erno Rubik." src="/istorija/erno_rubik.jpg" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xxl-2 col-xl-3 col-lg-3 col-12 mt-2">
         <Image alt="The Magic cube." src="/istorija/magicna_kocka.png" className="img-fluid" />
        </Col>
        <Col>
          <h2>The Magic cube</h2>
          <p>
            As a teacher, Rubik wanted to give his students a task that would help them understand three-dimensional 
            space. For days, he worked on creating his invention using wood, paper, glue, rubber bands, and 
            paperclips. The first cube he made was called the Magic Cube. It had no colors on it and barely held 
            together during rotations. Its purpose was simply to illustrate movement in three-dimensional space and 
            nothing more.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Puzzle</h2>
          <p>
            Rubik added a different color to each side of his invention. He noticed that turning the sides disrupted 
            the arrangement of the colors. This led him to wonder if it was possible to return the cube to its 
            original state after it was sufficiently "scrambled." Although he initially doubted that it was possible 
            to restore the colors to their original order, he managed to prove otherwise after a month of effort. At 
            that point, his invention became one of the most challenging puzzles of its time, as no one but him knew 
            how to solve it.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-xxl-2 col-lg-3 col-md-6 col-12">
          <Image alt="Rubik's cube." src="/istorija/rubikova_kocka_igracka.jpg" className="img-fluid" />
        </Col>
        <Col>
          <h2>Rubik's cube - Toy</h2>
          <p>
            As the Magic Cube gained popularity, people began to find easier ways to solve it. The first book 
            explaining the process of solving the cube was written by a thirteen-year-old boy. All of this led to 
            the Magic Cube being produced in large quantities and sold as a toy. Unfortunately, there was already 
            a patent for the "Magic Cube," so the toy was sold in stores under a new name: "Rubik's Cube."
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Other puzzles</h2>
          <p>
            Seeing the success of his first puzzle, Rubik wanted to continue working on them. He spent his free time 
            creating new three-dimensional puzzles. It seems he had a knack for it, as he managed to amaze the world 
            not just once or twice, but three times with his unique spatial riddles. In addition to the Rubik's 
            Cube, Rubik also invented "Rubik's Magic," "Rubik's Snake," and "Rubik's 360." Judging by the name of 
            the first one, I have a feeling he wasn't entirely pleased that someone beat him to patenting the term 
            "Magic Cube."
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-xxl-2 col-lg-3 col-md-4 col-12 my-1 ms-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Rubik's magic." src="/istorija/rubikova_magija.jpg" />
              <CardTitle>Rubik's magic</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xxl-2 col-lg-3 col-md-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Rubik's snake." src="/istorija/rubikova_zmija.png" />
              <CardTitle>Rubik's snake</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xxl-2 col-lg-3 col-md-4 col-12 my-1 me-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Rubik's 360." src="/istorija/rubikova_lopta.jpg" />
              <CardTitle>Rubik's 360</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-12">
          <h2 className="text-center">Competitions</h2>
          <p>
            The greatest impact of Rubik's invention on humanity is the competitions for solving the Rubik's Cube. 
            In their desire to be the best, people honed their skills and methods for solving the cube. This led to 
            an incredibly fast reduction in the record time, bringing it down to nearly 3 seconds.
          </p>
        </Col>
        <Col className="col-md-6 col-12">
          <h2 className="text-center">Variations</h2>
          <p>
            The emergence of competitions not only led to better methods but also to the invention of entirely new 
            puzzles. You can read more about this on the following page:
          </p>
          <Link to="/varijante">
            <Button variant="outline-primary">
              Learn more about the variations of the Rubik's cube
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default History