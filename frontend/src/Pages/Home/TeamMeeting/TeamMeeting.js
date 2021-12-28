import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const TeamMeeting = () => {
    const features = [
        {
            id: 1,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Meet the Team"

        },
        {
            id: 2,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Irene Jara Art Designer"

        },
        {
            id: 3,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Jeff Mori Marketing Manager"

        },
        {
            id: 4,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Mike Gavrilos Finance"

        },
        {
            id: 5,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Michael Kim Chief Operating Officer"

        },
        {
            id: 6,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Michael McMath Chief Exec.Officer"
        }
    ];
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0B172E' }} className='pt-3 pb-5'>
            <Container className='py-5'>

                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col xs={12} sm={8} md={6} lg={5}>
                        <h1 className="App fw-bold" style={{ color: 'white' }}>Meet the team </h1>
                        <p className="App pb-5 " style={{ color: 'white', textAlign: 'center' }}>
                            For us, it’s all about introducing you to our team! Providing transparency and sort of a personal touch.
                        </p>
                    </Col>
                </Row>


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Row xs={1} sm={1} md={2} lg={3} className="row gy-5" style={{ width: '65%' }}>
                        {
                            features.map(feature => (
                                <Col
                                    key={feature.id}
                                    className="mx-auto"
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <Card style={{ backgroundColor: '#0D0B0B', borderRadius: '5px', width: '100%' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Card.Img variant="top" src={feature.image} style={{ width: '110px' }} className='pt-3' />
                                        </div>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white', textAlign: 'center' }} className='mb-3'>{feature.name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default TeamMeeting;