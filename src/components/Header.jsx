import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import "../styles/global.css"

function Header({route}) {
  return (
    <header>
        <Container fluid>
            <Row>
                {/* Img */}
                <Col sm={3} md={3} lg={4} xl={5} xxl={5} >
                    <Image fluid src={ require('../assets/logo.png') } />
                </Col>
                {/* H1 */}
                <Col sm={12} md={12} lg={12} xl={7} xxl={7} className='centerContent' >
                    <h1>Compra-Venta de vehiculos</h1>
                </Col>
            </Row>
        </Container>
    </header>
  )
}

export default Header