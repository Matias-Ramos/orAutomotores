//Bts
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Comp
import ContactUl from '../presentationals/ContactUl';

function ContactUsContainer() {
  return (
    <section id="contactSection">
       <Container fluid>

            {/* String Data */}
            <Row>
              <Col sm={12} md={12} lg={5} xl={5} xxl={6} id="contactDataContainer">
                  <div>
                    <h2>Contacto</h2>
                    <ContactUl />
                  </div>
              </Col>

              {/* Google maps */}
              <Col sm={12} md={12} lg={5} xl={5} xxl={4}>
                
                <iframe title="GoogleMapIframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.94416542291!2d-58.38390898511296!3d-34.605573365102615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacfdd1fa037%3A0xf1b1f26b0eab3053!2sAv.%209%20de%20Julio%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1676514572653!5m2!1ses-419!2sar" loading="lazy"></iframe>
              </Col>
            </Row>

        </Container>
    </section>
  )
}

export default ContactUsContainer