import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
    return (
        <div>


            <Card className="bg-dark text-white">
                <Card.ImgOverlay className="bg-dark" style={{ height: '15rem', textAlign: 'center' }} >
                    <Card.Title > <h1>Study In USA</h1> </Card.Title>
                    <Card.Title >Archice Your Heigher Education In USA</Card.Title>
                    <Card.Text>
                        We ensure your heigher education with our full responsibilities. We take your full responsibility till you are graduate.
                    </Card.Text>
                    <Card.Text>Addmission Going On</Card.Text>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default Home;