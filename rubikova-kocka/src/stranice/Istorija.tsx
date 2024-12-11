import { Button, Card, CardBody, CardImg, CardTitle, Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router"

const Istorija = () => {
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <h2>Ernő Rubik</h2>
          <p>
            Ernő Rubik (Budimpešta, 13. jul 1944) je mađarski pronalazač, vajar i profesor arhitekture. 
            Poznat je pre svega po svojim igračkama — Rubikova zmija i Rubikova kocka, koja se smatra jednom od 
            najprodavanijih igračaka u svetu, jer je do 2005. godine prodata u više od 300 miliona primeraka. Rođen 
            je u Budimpešti tokom Drugog svetskog rata. Njegov otac je bio avio-inženjer u fabrici u Estergomu, a 
            majka je pesnikinja. Godine 1967. je diplomirao na Tehničkom univerzitetu u Budimpešti. Godine 1983, 
            osnovao je svoj studio (Rubik studio), a 1987. dobio je zvanje profesora. 1990. sa Janošem Ginstlerom 
            je osnovao akademiju Magyar Mérnöki Akadémia i bio je njen predsednik do 1996. Prve Rubikove kocke su 
            napravljene 1977. godine, kada su se i pojavile u radnjama Budimpešte. Tri godine kasnije kocka je 
            predstavljena na sajmovima igračaka u Zapadnim metropolama – Londonu, Njujorku, Parizu i Nirnbergu. 
            Danas Ernő Rubik uglavnom piše tekstove o arhitekturi i vodi Rubik studio. 
          </p>
        </Col>
        <Col className="col-xxl-2 col-lg-3 col-12">
          <Image alt="Erno Rubik." src="/erno_rubik.jpg" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xxl-2 col-xl-3 col-lg-4 col-12 mt-2">
         <Image alt="Magična kocka" src="/magicna_kocka.png" className="img-fluid" />
        </Col>
        <Col>
          <h2>Magična kocka</h2>
          <p>
            Kao nastavnik, Rubik je hteo da svojim učenicima da zadatak koji bi im pomogao oko razumevanja 
            trodimenzionalnog prostora. Danima je pokušavao da napravi taj svoj izum od drvetam, papira, lepka, 
            gumica i spajalica. Prva kocka koju je napravio zvala se Magična kocka. Nije imala boje na sebi i jedva 
            je ostajala u jednom komadu prilikom vrtenja. Njen cilj je bio da ilustruje kretanje u 
            trodimenzionalnom prostoru i ništa više.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Slagalica</h2>
          <p>
            Rubik je svakoj stranici svog izuma dodao po jednu boju. Primetio je da se okretanjem stranica 
            raspored tih boja narušava. Tada se zapitao da li je moguće vratiti kocku u prvobitno stanje nakon 
            što se ona dovoljno dobro "izmeša". Iako sam nije verovao da je moguće "složiti" boje nazad 
            u prvobitni redosled, nakon mesec dana je uspeo da dokaže suprotno. Tada je ovaj njegov izum 
            postao i jedna od najtežih slagalica u to vreme, jer niko sem njega nije umeo daje složi.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-2 col-lg-3 col-12">
          <Image alt="Rubikova kocka" src="/rubikova_kocka_igracka.jpg" className="img-fluid" />
        </Col>
        <Col>
          <h2>Rubikova kocka - Igračka</h2>
          <p>
            Kako je Magična kocka dobijala na popularnosti, ljudi su počeli da pronalaze sve lakše načine da 
            slože kocku. Prva knjiga koja objašnjava proces slaganja kocke je napisana od strane 
            trinaestogodišnjeg dečaka. Sve ovo je dovelo do toga da Magična kocka krene da se proizvodi u 
            masovnim količinama i da se prodaje kao igračka. Nažalsot je već postojao patent za "Magičnu kocku", 
            zbog toga igračka stiže na izloge prodavnica pod novim nazivom: "Rubikova kocka".
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Druge slagalice</h2>
          <p>
            Videvši uspeh svoje prve slagalice, Rubik je želeo da nastavi da se bavi time. Svoje slobodno vreme 
            je koristio tako što je pravio nove trodimenzionalne slagalice. Izgleda da mu je to išlo za rukom 
            jer nije uspeo samo jednom, ni dva puta, već je tri puta uspeo da oduševi svet sa svojim neobičnim 
            prostornim zagonetkama. Pored Rubikove kocke, Rubik je izmislio i "Rubikovu magiju", "Rubikovu zmiju" 
            i "Rubikov 360". Sudeći po imenu prve, imam osećaj da nije baš zadovoljan što ga je neko preduhitrio 
            u patentiranju izraza "Magična kocka".
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-3 col-md-4 col-12 my-1 ms-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Rubikova magija" src="/rubikova_magija.jpg" />
              <CardTitle>Rubikova magija</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-3 col-md-4 col-12 my-1">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Rubikova zmija" src="/rubikova_zmija.png" />
              <CardTitle>Rubikova zmija</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-3 col-md-4 col-12 my-1 me-auto">
          <Card>
            <CardBody>
              <CardImg variant="top" alt="Rubikova lopta" src="/rubikova_lopta.jpg" />
              <CardTitle>Rubikova lopta</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-12">
          <h2 className="text-center">Takmičenja</h2>
          <p>
            Najveći trag koji je Rubikov izum ostavio na čovečanstvo jesu takmičenja u slaganju Rubikove kocke. 
            U želji da budu najbolji, ljudi su usavršavali svoju spretnost i svoje metode slaganje kocke. To je 
            dovelo do neverovatno brzog spuštanja rekordnog vremena na skoro 3s.
          </p>
        </Col>
        <Col className="col-md-6 col-12">
          <h2 className="text-center">Varijante</h2>
          <p>
            Pojava takmičenja nije dovela samo do boljih metoda, već i do izmišljanja potpuno novih slagalica. 
            Više o tome možete pročitati na sledećoj stranici:
          </p>
          <Link to="/varijante">
            <Button variant="outline-primary">
              Saznaj više o varijantama Rubikove kocke
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Istorija