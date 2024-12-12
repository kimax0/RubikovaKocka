import { Col, Container, Form, FormGroup, Row } from "react-bootstrap"

const Kviz = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Kviz</h1>
        </Col>
      </Row>
      <Form>
        <Form.Label>1. Kojih dimenzija je bila prva Magična kocka?</Form.Label>
        <FormGroup controlId="prvo_pitanje">
          <Form.Control placeholder="NxNxN"/>
          <Form.Text className="text-muted">Napisati u obliku NxNxN.</Form.Text>
        </FormGroup>
        <Form.Label>2. Kojih dimenzija je Rubikova kocka sa najviše dimenzija?</Form.Label>
        <FormGroup controlId="drugo_pitanje">
          <Form.Check
            inline
            label="100x100x100"
            type="radio"
          />
          <Form.Check
            inline
            label="17x17x17"
            type="radio"
          />
          <Form.Check
            inline
            label="33x33x33"
            type="radio"
          />
        </FormGroup>
        <Form.Label>3. Poređaj po rastućem poretku veličine ___minx varijante.</Form.Label>
        <FormGroup controlId="trece_pitanje">
          <Form.Select>
            <option>Najmanja</option>
            <option value="1">Teraminx</option>
            <option value="2">Petaminx</option>
            <option value="0">Gigaminx</option>
          </Form.Select>
          <Form.Select>
            <option>Između</option>
            <option value="1">Teraminx</option>
            <option value="2">Petaminx</option>
            <option value="0">Gigaminx</option>
          </Form.Select>
          <Form.Select>
            <option>Najveća</option>
            <option value="1">Teraminx</option>
            <option value="2">Petaminx</option>
            <option value="0">Gigaminx</option>
          </Form.Select>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default Kviz