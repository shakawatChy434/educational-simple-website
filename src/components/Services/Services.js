import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
  
      fetch('./education.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            
      <div className="" style={{ marginTop: '14rem', }}>
        <Row xs={1} md={3} className="g-4">
          {
            services.slice(0, 6).map(service => <Service
              key={service.courseId}
              service={service}
            ></Service>)
          }
        </Row>
      </div >
        </div>
    );
};

export default Services;