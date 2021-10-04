import React from 'react';
import './Service.css'
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, price, img } = props.service
    return (
        <Col>

            {/* <Card className="container cart-details" > */}
            <Card className="container cart-details" border="secondary" style={{ width: '26rem', height: '30rem', margin: '0.5rem', padding: '1rem', backgroundColor: 'lightgray' }}>
                <div className="image">
                    <Card.Img style={{ width: '24rem' }} className="" src={img} />
                </div>
                <div className="cart-info">
                    <Card.Body style={{ marginTop: '6rem', textAlign: 'center', color: 'black', fontWeight: '700', }}>
                        <Card.Title>Course Name: {name} </Card.Title>
                        <h5>Session Fee:${price}</h5>
                        <small>Click For Addimission:</small> <br />
                        <Button variant="primary">ADDIMISSION </Button>

                    </Card.Body>
                </div>
            </Card>
        </Col >
    );
};

export default Service;