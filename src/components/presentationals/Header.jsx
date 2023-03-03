//Assets
import logo from "../../assets/logo.png";
//Bts
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Header = () => (
  <header id="headerSection">
    <Container fluid>
      <Row>
        {/* Img */}
        <Col sm={3} md={3} lg={3} xl={2} xxl={1} id="logoContainer">
          <Image src={logo} alt="Logo de or automotores" />
        </Col>
        {/* H1 */}
        <Col sm={9} md={9} lg={7} xl={7} xxl={6}>
          <h1>Compra-Venta de vehículos</h1>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
