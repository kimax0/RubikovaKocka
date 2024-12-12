import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router"

const Glavna = () => {
  return (
      <Container className="container-fluid">
        <Row>
          <Col className="col-xl-3 col-md-6 col-12">
            <Image alt="Slika sa različitim kockama." src="/glavna/glavna_banner.jpg" className="img-fluid" />
          </Col>
          <Col className="mt-2">
            <p>
              Dobrodošli na moj sajt. Ovde se možete informisati o jednom neshvaćenom hobiju koji je često žrtva 
              predrasuda. Taj hobi je slaganje Rubikovih kocki. Teško je objasniti zašto ljudi pogrešno pretpostave 
              da se ovim bave samo "štreberi", ali možda se odgovor krije u samoj priči kako je nastala čuvena 
              3x3 Rubikova kocka.
            </p>
            <Link to="/istorija">
              <Button variant="outline-primary" className="m-0">
                Pogledaj istoriju Rubikove kocke
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <h2 className="text-center m-3">Zanimljive činjenice</h2>
        </Row>
        <Row>
          <Col className="col-xl-3 col-md-6 col-12">
            <Card className="my-1">
              <Card.Img variant="top" alt="Magična kocka." src="/glavna/prvobitno_ime.jpg" />
              <Card.Header>
                <Card.Title>Prvobitno ime</Card.Title>
              </Card.Header>
              <Card.Body>
                Kada je prvi put izašla na tržište kao igračka, Rubikova kocka se zvala "Hungarian magic cube". Ime 
                je promenjeno zbog problema sa patentiranjem.
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-xl-3 col-md-6 col-12">
            <Card className="my-1">
              <Card.Img variant="top" alt="Slika univerzuma." src="/glavna/broj_kombinacija.jpg" />
              <Card.Header>
                <Card.Title>Broj kombinacija</Card.Title>
              </Card.Header>
              <Card.Body>
                Broj svih mogućih permutacija 3x3 kocke je 43.252.003.274.489.856.000, odnosno malo više od 43 
                kvintiliona 252 kvadriliona.
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-xl-3 col-md-6 col-12">
            <Card className="my-1"> 
              <Card.Img variant="top" alt="Tajmer Rubikova kocka." src="/glavna/svetski_rekord.jpg" />
              <Card.Header>
                <Card.Title>Svetski rekord</Card.Title>
              </Card.Header>
              <Card.Body>
                Trenutni svetski rekord za slaganje 3x3 Rubikove kocke je 3,13s i pripada Max Park-u iz SAD. Pre 
                toga je rekord bio 3,47s i pripadao je Yusheng Du-u iz Kine.
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-xl-3 col-md-6 col-12">
            <Card className="my-1">
              <Card.Img variant="top" alt={`Knjiga "You Can Do the Cube".`} src="/glavna/prvo_uputstvo.jpg" />
              <Card.Header>
                <Card.Title>Prvo uputstvo</Card.Title>
              </Card.Header>
              <Card.Body>
                Prvu uputstvo za slaganje 3x3 Rubikove kocke je napisao Patrick Bossert u knjizi "You Can Do the 
                Cube". Patrick je tada imao 13 godina.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default Glavna