import React from 'react';
import { Card } from 'react-bootstrap';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.ImgOverlay className="bg-dark" style={{ marginTop: '0rem', height: '15rem', textAlign: 'center' }} >
                    <Card.Title > <h1>Study In USA</h1> </Card.Title>
                    <Card.Title >Archice Your Heigher Education In USA</Card.Title>
                    <Card.Text>
                        We ensure your heigher education with our full responsibilities. We take your full responsibility till you are graduate.
                    </Card.Text>
                    <Card.Text>Addmission Going On</Card.Text>
                </Card.ImgOverlay>
            </Card>
            {/* Rendering Service & Footer part */}
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;