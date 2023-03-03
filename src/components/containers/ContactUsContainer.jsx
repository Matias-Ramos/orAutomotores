//Bts
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Comp
import ContactUl from '../presentationals/ContactUl';

const ContactUsContainer = () => 
    <section id="contactSection">
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
    </section>

export default ContactUsContainer