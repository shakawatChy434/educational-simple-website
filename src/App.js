// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Service from './components/Service/Service';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {

    fetch('./education.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div>
        <Home />
        <BrowserRouter>
          <Header></Header>
        </BrowserRouter>
        <Footer></Footer>
      </div>
      <div className="" style={{ marginTop: '0rem', }}>
        <Row xs={1} md={3} className="g-4">
          {
            services.slice(0,6).map(service => <Service
              key={service.courseId}
              service={service}
            ></Service>)
          }
        </Row>
      </div >

    </div>
  );
}

export default App;
