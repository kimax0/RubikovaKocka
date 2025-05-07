import { useState } from "react"
import {
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Button,
  Alert,
} from "react-bootstrap"

const Kviz = () => {
  const [odgovori, setOdgovori] = useState<{
    prvo: string
    drugo: string
    trece: string[]
  }>({
    prvo: "",
    drugo: "",
    trece: ["", "", ""],
  })

  const [rezultat, setRezultat] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOdgovori({ ...odgovori, prvo: e.target.value })
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOdgovori({ ...odgovori, drugo: e.target.value })
  }

  const handleSelectChange = (index: number, value: string) => {
    const novaTrece = [...odgovori.trece]
    novaTrece[index] = value
    setOdgovori({ ...odgovori, trece: novaTrece })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let tacni = 0
    if (odgovori.prvo.trim().toLowerCase() === "3x3x3") tacni++
    if (odgovori.drugo === "17x17x17") tacni++

    const ispravnaTrece = ["0", "2", "1"] // Gigaminx < Petaminx < Teraminx
    if (JSON.stringify(odgovori.trece) === JSON.stringify(ispravnaTrece))
      tacni++

    setRezultat(`Tačno ste odgovorili na ${tacni} od 3 pitanja.`)
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Kviz</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Label>1. Kojih dimenzija je bila prva Magična kocka?</Form.Label>
        <FormGroup controlId="prvo_pitanje">
          <Form.Control
            placeholder="NxNxN"
            value={odgovori.prvo}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            Napisati u obliku NxNxN.
          </Form.Text>
        </FormGroup>

        <Form.Label>
          2. Kojih dimenzija je Rubikova kocka sa najviše dimenzija?
        </Form.Label>
        <FormGroup controlId="drugo_pitanje">
          {["100x100x100", "17x17x17", "33x33x33"].map((opcija, i) => (
            <Form.Check
              key={i}
              inline
              label={opcija}
              type="radio"
              name="drugo"
              value={opcija}
              checked={odgovori.drugo === opcija}
              onChange={handleRadioChange}
            />
          ))}
        </FormGroup>

        <Form.Label>
          3. Poređaj po rastućem poretku veličine ___minx varijante.
        </Form.Label>
        <FormGroup controlId="trece_pitanje">
          {[0, 1, 2].map((index) => (
            <Form.Select
              key={index}
              onChange={(e) => handleSelectChange(index, e.target.value)}
              value={odgovori.trece[index]}
            >
              <option value="">Izaberi...</option>
              <option value="0">Gigaminx</option>
              <option value="1">Teraminx</option>
              <option value="2">Petaminx</option>
            </Form.Select>
          ))}
        </FormGroup>

        <Button variant="primary" type="submit">
          Pošalji
        </Button>

        {rezultat && (
          <Alert className="mt-3" variant="info">
            {rezultat}
          </Alert>
        )}
      </Form>
    </Container>
  )
}

export default Kviz
