//Bts
import { Container, Row, Col } from "react-bootstrap";
//Comp
import ContactUl from "./ContactUl.jsx";

const ContactUsContainer = () => (
  <footer>
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={5} xl={5} xxl={6} id="contactDataContainer">
          <div>
            <h2>Contacto</h2>
            <ContactUl />
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default ContactUsContainer;
