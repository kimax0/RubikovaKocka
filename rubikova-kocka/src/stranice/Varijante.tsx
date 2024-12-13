import { Button, Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router"

const Varijante = () => {
  return (
    <Container className="container-fluid">
      <Row>
        <Col className="col-12">
          <h1 className="text-center">Varijante</h1>
          <h2 className="text-center">Kvadri</h2>
          <h3>Kocke različitih dimenzija</h3>
          <p>
            Prvu grupu koju bih izdvojio jesu kocke raznih dimenzija. Originalna Rubikova kocka je kocka dimnezija 
            3x3, takođe postoje i kocke dimnezija 2x2, 4x4, 5x5... Najkompleksnija kocka koja postoji je dimenzija 
            33x33. Neko je napravio i 1x1 kocku ali ne koristi se kao slagalica već kao šaljiva varijanta Rubikove 
            kocke.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 ms-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="1x1 kocka." src="/varijante/1x1x1.jpg" />
              <CardTitle>Rubikova kocka 1x1</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="2x2 kocka." src="/varijante/2x2x2.jpg" />
              <CardTitle>Rubikova kocka 2x2</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="3x3 kocka." src="/varijante/3x3x3.jpg" />
              <CardTitle>Rubikova kocka 3x3</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="4x4 kocka." src="/varijante/4x4x4.jpg" />
              <CardTitle>Rubikova kocka 4x4</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 me-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="33x33 kocka." src="/varijante/33x33x33.jpg" />
              <CardTitle>Rubikova kocka 33x33</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/uputstvo">
            <Button className="mx-auto col-12" variant="outline-primary">
              Naučite kako da složite 3x3 Rubikovu kocku.
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Nepravilni kvadri</h3>
          <p>
            Do sad sam pisao 2x2, 3x3, 4x4, podrazumevajući da je i treća dimnezija ista. 2x2 je zapravo 2x2x2, 
            3x3 je zapravo 3x3x3, itd. Šta se dogodi kad odbacimo tu pretpostavku? Tada dobijamo slagalice poput 
            Tornja (2x2x3, 2x2x4, ...) ili slagalica uzastopnih brojeva (1x2x3, 2x3x4, ...). Praktično bilo 
            koja 3 broja manja od 10 da zamislite, postoji slagalica sa tim dimenzijama koja je temeljno istražena 
            i dokumentovana.<br/>Ova tri nepravilna kvadra su meni zanimljiva:
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 ms-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="2x2x3 kocka." src="/varijante/2x2x3.jpg" />
              <CardTitle>Toranj 2x2x3</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="1x2x3 kocka." src="/varijante/1x2x3.jpg" />
              <CardTitle>Uzastopni 1x2x3</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="2x4x6 kocka." src="/varijante/2x4x6.jpg" />
              <CardTitle>Parni 2x4x6</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-2 col-lg-3 col-sm-4 col-12 my-1 me-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="3x5x7 kocka." src="/varijante/3x5x7.jpg" />
              <CardTitle>Neparni 3x5x7</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="text-center">Drugi oblici</h2>
      </Row>
      <Row>
        <h3>Piramide</h3>
        <p>
          Ove prostorne slagalice se mogu naći i u drugim oblicima pored kvadra. U ovom slučaju, one mogu biti 
          u obliku piramide. Ovaj tip slagalica je popularan zbog toga što je lakši za slaganje. Pyrminx 
          (pravilna trostrana piramida 3x3) je lako složiti potpuno intuitivno, što nije slučaj za klasičnu 
          3x3 Rubikovu kocku. Postoji i Mini pyraminx (pravilna trostrana piramida 2x2) koja je ekvivalentna 
          Rubikovoj kocki 1x1 po težini.<br/>Najpoznatije slgalice ovakvog tipa su:
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
          Pored Pyraminx slagalice, koja se može gledati kao korak unazad od Rubikove kocke, možemo otići i 
          korak unapred. Ono što je Pyraminx-u trougao, a Rubikovoj kocki kvadrat, to je Megaminx-u petougao. 
          Megaminx je zapravo zarubljeni dodekaedar, sastoji se od 12 petouglova, a svaki taj petougao ima 11 
          delova. Ljudi uglavnom uče da slože Megaminx kada im slaganje 3x3 ili 4x4 kocke postane repetitivno. 
          Kao i kod Pyraminx-a, Megaminx ima veće varijante. Njihovi nazivi prate standardne metričke prefikse 
          pa imamo i Gigaminx, Teraminx, Petaminx...
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
            Ovo je lista najpopularnijih <b>različitih</b> slagalica. Postoji previše varijanti, koje se slažu 
            na identičan način, koje nisam pomenuo. Ovo su najosnovije informacije, za manje poznate kocke 
            najbolje je da sami istražite. Kao polaznu tačku predlažem da istražite o slagalici "Square-1".
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Varijante