import React from 'react';
import { Card, FloatingLabel, Form, } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.ImgOverlay className="bg-dark" style={{ height: '10rem', marginTop: '.5rem', textAlign: 'center' }} >

                    <Card.Title >Get in touch</Card.Title>
                    <Card.Text>To get more information to get in touch with us.
                        <FloatingLabel controlId="floatingTextarea" label="Search here" className="mb-3 text-black" style={{ height: '1rem', width: '50rem', textAlign: 'center', marginLeft: '20rem', }}>
                            <Form.Control as="textarea" placeholder="Search here " />
                        </FloatingLabel>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Footer;