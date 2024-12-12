import { Col, Container, Image, ListGroup, Row } from "react-bootstrap"

const Uputstva = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Uputstvo</h1>
          <h2>Priprema</h2>
          <p>
            U narednom delu ću objasniti najosnovnije stvari koje treba da znate za praćenje ovog uputstva. Pod 
            najosnovnijim mislim na standardnu notaciju pokreta i na definisanje algoritama.
          </p>
          <h3>Notacija</h3>
          <p>
            Za ovo uputstvo ću koristiti standardnu notaciju za opisivanje pokreta, odnosno okreta stranica. Dok 
            držite kocku tako da jedna njena stranica (u ovom uputstvu će to biti crvena stranica) gleda 
            direktno u vas:
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-12">
          <ListGroup>
            <ListGroup.Item>
              <li>R označava okretanje desne stranice u smeru kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=R&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>L označava okretanje leve stranice u smeru kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=L&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>U označava okretanje gornje stranice u smeru kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>D označava okretanje gornje stranice u smeru kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>F označava okretanje prednje stranice u smeru kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=F&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>B označava okretanje zadnje stranice u smeru kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=B&hover=1&flags=showalg" />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="col-md-6 col-12">
          <ListGroup>
            <ListGroup.Item>
              <li>R' označava okretanje desne stranice u smeru suprotnom od kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=R'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>L' označava okretanje leve stranice u smeru suprotnom od kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=L'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>U' označava okretanje gornje stranice u smeru suprotnom od kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>D' označava okretanje donje stranice u smeru suprotnom od kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=D'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>F' označava okretanje prednje stranice u smeru suprotnom od kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=F'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>B' označava okretanje zadnje stranice u smeru suprotnom od kazaljke na satu</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=B'&hover=1&flags=showalg" />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
        <p className="text-muted">
            Ukoliko se nalazi broj 2 nakon nekog slova, to znači da se taj pokret ponavlja dva puta. R2 onda 
            označava okretanje desne stranice u bilo kom smeru dva puta. R2 i R'2 okreću desnu stranu za 
            180 stepeni tako da je smer nebitan i zapisuje se u kraćem obliku R2. R3 isto postoji ali postiže 
            isto što i R', samo što je R' kraći za 2 pokreta. R4 ne postiže ništa jer se tada stranica okrene 
            360 stepeni. Sve isto važi i za L, U, D, F i B pokrete.
        </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Algoritmi</h3>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <p>
            U slaganju kocki, algoritam je bilo koji skup prethodno definisanih pokreta. Iako je bilo koji skup 
            pokreta tehnički algoritam, većina njih je beskorisna. Međutim, postoje algoritmi koji na veoma 
            predvidiv način mogu zameniti poziciju određenih delova, a da ne utiču na ostale delove. Ovde možete 
            videti kako izgleda algoritam koji će zameniti položaje 3 ćoška sa gornje stranice, tako da ne utiče 
            na prednji-gornji-desni ćošak (pošto crvena boja gleda u nas) i na ostatak kocke.
          </p>
        </Col>
        <Col className="col-xl-3 col-lg-4 col-md-5 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U%20R%20U'%20L'%20U%20R'%20U'%20L&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <h2>Uputstvo za slaganje 3x3 Rubikove kocke</h2>
      </Row>
      <Row>
        <Col className="col-lg-6 col-12">
          <h3>Beli krst</h3>
          <p>
            Za slaganje belog krsta ne postoje nikakvi specijalni algoritmi jer je to prvi korak, a na početku 
            nema razloga očuvati stanje ostalih delova kad su svakako van svog mesta. Slaganje belog krsta je dobra 
            prilika da se upoznate sa kockom i sa promenama koje svaki pokret donosi. Malo je kontradiktorno ovo 
            reći u uputstvu, ali probajte da složite beli krst samostalno tako da se boje poklapaju kao na prvoj 
            slici, druga slika je primer lošeg belog krsta.
          </p>
        </Col>
        <Col className="col-lg-3 col-sm-6 col-12">
          <Image alt="Primer pravilnog krsta." src="/uputstvo/krst_dobar.svg" width="250" height="250" />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-12">
          <Image alt="Primer pravilnog krsta." src="/uputstvo/krst_los.svg" width="250" height="250" />
        </Col>
      </Row>
      <Row>
        <Col className="col-12">
          <h3>Beli ćoškovi</h3>
          <p>
            Većina ljudi može složiti i bele ćoškove intuitivno, ali to može postati komplikovano pri kraju kada 
            postoji rizik da slaganjem jednog ćoška uklonimo drugi. Zato postoje kratki algoritmi za to. Bitno je 
            napomenuti da se ćoškovi moraju složiti tako da na primer ćošak sa belom, zelenom i narandžastom bojom 
            završi između belog, zelenog i naradžastog centra, i između belo-naradžaste i belo-zelene ivice. Postoje 
            tri algoritma za nameštanje ivica kada se mesto na koje želite da ubacite ivicu nalazi u prednjem-
            gornjem-desnom ćošku, a sama ivica nalazi odmah ispod u prednjem-donjem-desnom ćošku. Ti algoritmi 
            izgledaju ovako.
          </p>
        </Col>
        <Col className="col-md-4 col-sm-6 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=R'%20D'%20R&colored=U*%20F%20R%20L%20B%20D&hover=1&flags=showalg&colors=F:o%20U:w%20R:g%20B:r%20L:b%20D:y" />
        </Col>
        <Col className="col-md-4 col-sm-6 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=F%20D%20F'&colored=U*%20F%20R%20L%20B%20D&hover=1&flags=showalg&colors=F:o%20U:w%20R:g%20B:r%20L:b%20D:y" />
        </Col>
        <Col className="col-md-4 col-sm-6 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=F%20L%20D2%20L'%20F'&colored=U*%20F%20R%20L%20B%20D&hover=1&flags=showalg&colors=F:o%20U:w%20R:g%20B:r%20L:b%20D:y" />
        </Col>
      </Row>
      <Row>
        <Col className="col-lg-6 col-12">
          <h3>Drugi sloj</h3>
          <p>
            Trenutno bi kocka trebala da ima složenu belu stranicu i da se oko te bele stranice nalazi prsten, 
            odnosno sloj boja koje odgovaraju boji svog centra. Sada je neophodno dopuniti 4 preostale ivice koje 
            nemaju žutu boju na sebi tako da se oko složene bele stranice nalaze 2 sloja složenih boja, i da 
            ostane samo žuta stranica nesložena. Za to postoje dva algoritma, i razlikuju se u tome da li "ubacujemo 
            u levo" ili "ubacujemo u desno". Potrebno je izabrati bilo koju ivicu koja nema žutu boju na sebi, staviti 
            je na stranicu koja gleda ka nama, i onda okretati donja dva reda dok se ne poklope sa bojom ivice koja 
            gleda u nas. Tada gledamo koja je druga boja odabrane ivice, i u zavisnosti da li je trenutno ta boja levo 
            ili desno, uradimo algoritam za ubacivanje u levo ili u desno. Ako je neka ivica "zaglavljena" u pogrešnom 
            mestu, ili je pogrešno orijentisana, samo ubacite neku ivicu sa žutom bojom na sebi kako bi ona izbacila tu 
            koja vama treba. Algoritmi izgledaju ovako.
          </p>
        </Col>
        <Col className="col-lg-3 col-sm-6 col-12">
          <p>Ubacivanje u levo</p>
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U'%20L'%20U%20L%20U%20F%20U'%20F'&colored=D*%20F%20R%20L%20B%20D%20FR%20FL%20BL%20BR&tweaks=X:LF&hover=1&flags=showalg&colors=F:o%20U:y%20R:b%20B:r%20L:g%20D:w" />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-12">
          <p>Ubacivanje u desno</p>
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U%20R%20U'%20R'%20U'%20F'%20U%20F&colored=D*%20F%20R%20L%20B%20D%20FR%20FL%20BL%20BR&tweaks=X:RF&hover=1&flags=showalg&colors=F:o%20U:y%20R:b%20B:r%20L:g%20D:w" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <h3>Žuti krst</h3>
          <p>
            Ovo je najdalje što neko može stići čistom intuicijom jer sada algoritmi postaju rotacije delova, i prestaju 
            da budu izbegavanje složenog dela jer su dve trećine kocke već složene. Trenutno je samo bitno da na žutoj 
            stranici dobijemo žuti krst, nije bitno da se boje sa strane poklope kao što je bio slučaj sa belim krstom. 
            Za ovaj korak je bitno znati samo jedan algoritam, ali zato morate znati kako okrenuti kocku da bi taj 
            algoritam bio efektivan. Mogući rasporedi koje možemo da imamo na žutoj ivici su "tačka" (samo centar gleda ka 
            gore, sve ivice gledaju u stranu), "latinično slovo L" (centar i dve susedne ivice gledaju ka gore, druge dve 
            susedne ivice gledaju u stranu), "linija" (centar i dve ivice sa suprotnih strana gledaju ka gore, druge dve 
            suprotne ivice gledaju u stranu) i "krst" (centar i sve ivice gledaju ka gore). Algoritam i ispravnu poziciju 
            kocke za svaki oblik na žutoj stranici možete videti svaki put kada se kocka okrene (slobodno pauzirajte 
            animaciju i idite korak po korak).
          </p>
        </Col>
        <Col className="col-xl-3 col-lg-4 col-md-5 col-12">
          <iframe width="250" height="400" src="https://ruwix.com/widget/3d/?alg=F%20R%20U%20R'%20U'%20F'%20y2%20F%20R%20U%20R'%20U'%20F'%20y2%20F%20R%20U%20R'%20U'%20F'&colored=D*%20F*/me%20R*/me%20L*/me%20B*/me%20U/m&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <h3>Žute ivice</h3>
          <p>
            Sada treba da namestimo da se ivice krsta poklapaju sa svim bojama oko sebe. Za ovo postoji jedan algoritam 
            koji će zameniti mesta prednje i leve žute ivice. Orijentaciju kocke namestite vi tako da odgovara situaciji 
            koja se nalazi na kocki. Bitno je stalno imati u glavi sliku toga koje dve ivice se menjaju.
          </p>
        </Col>
        <Col  className="col-xl-3 col-lg-4 col-md-5 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=R%20U%20R'%20U%20R%20U2%20R'%20U&colored=D*%20F*/me%20R*/me%20L*/me%20B*/me%20U/m&tweaks=X:FU%20X:LU&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <h3>Raspoređivanje žutih ćoškova</h3>
          <p>
            Ovo je još jedan korak gde je bitnija orijentacija kocke od samog algoritma jer je samo 4 delića ostalo 
            nesloženo i mora da se vodi računa oko dosta stvari. Ovaj algoritam menja lokacije 3 ćoška sa žute stranice, 
            ćošak koji se nalazi gore-desno u odnosu na pogled spreda ostaje nepromenjen. Na tu lokaciju je bitno 
            staviti ćošak koji je na svom mestu, nije bitno da li je rotiran kako treba. Kada taj ćošak "sačuvamo" na 
            mestu koje ostaje nepromenjeno, možemo ponavljati algoritam dok se preostale tri ne rasporede gde treba. 
            Ukoliko nijedan ćošak nije na svom mestu izvršite algoritam jednom u bilo kojoj orijentaciji.
          </p>
        </Col>
        <Col className="col-xl-3 col-lg-4 col-md-5 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U%20R%20U'%20L'%20U%20R'%20U'%20L&setupmoves=U2%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D&tweaks=X:UFL%20X:UBR%20X:UBL&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <h3>Orijentacija žutih ćoškova</h3>
          <p>
            I u ovom koraku je bitno znati samo jedan algoritam koji treba uraditi dva ili četiri puta za svaku ivicu 
            koja nije lepo orijentisana. Ovo je deo gde se najviše dešavaju greške jer nema bezbednih mesta između 
            svakog izvršavanja algoritma. Kada jednom počnete ovaj korak morate biti fokusirani i da vodite računa. 
            U ovom koraku je bitno da nikako ne okrećete kocku u rukama. Samo namestite loše rotiran ćošak na gornji-
            desni ugao od spreda i ponavljajte ga dok se taj ćošak ne orijentiše tako da žuta gleda ka gore. Kada 
            završite sa jednim ćoškom, drugi dovedite na gornju-desnu pozicijom isključivo pokretima U i U' (i U2 
            naravno). Kada uspešno orijentišete sve ćoškove i donji deo kocke će se vratiti u složeno stanje. Još 
            jednom ponavljam ne gubite fokus i pazite da ne okrenete kocku u rukama.
          </p>
        </Col>
        <Col className="col-xl-3 col-lg-4 col-md-5 col-12">
        <iframe width="250" height="410" src="https://ruwix.com/widget/3d/?alg=U2%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U2&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center">KOCKA JE SLOŽENA!</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Uputstva