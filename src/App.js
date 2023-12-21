import './App.css';
import { Row,Col,Container } from 'react-bootstrap';
import FeatureBoxDetails from './components/FeatureBoxDetails';

function App() {
  return (
    <Container>
      <Row>
        <Col md="12">
        <FeatureBoxDetails/>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
