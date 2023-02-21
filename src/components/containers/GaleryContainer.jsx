// Bts
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import GaleryMapper from "../mappers/GaleryMapper";
import FiltersContainer from "./FiltersContainer";
// Context
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";

function GaleryContainer() {


  return (
    <section id="galerySection">
      <Container fluid>
        <Row>
          {/* Filters */}
          <Col sm={11} md={11} lg={4} xl={4} xxl={3} className="galeryCols">
            <QyParamsCtxtProvider>
              <FiltersContainer />
            </QyParamsCtxtProvider>
          </Col>

          {/* Cards */}
          <Col sm={11} md={11} lg={7} xl={7} xxl={6} className="galeryCols">
            <GaleryMapper  />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GaleryContainer;
