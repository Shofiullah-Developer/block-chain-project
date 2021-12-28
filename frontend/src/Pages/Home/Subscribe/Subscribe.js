import React from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div style={{ backgroundColor: '#0B172E' }} className='py-5'>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='pb-5'>
                <Card style={{ height: '50vh', width: '70%', backgroundColor: '#253149', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                    <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Never miss a drop</h1>
                    <p style={{ textAlign: 'center', paddingLeft: '5px', paddingRight: '5px' }}>Subscribe for the latest news, drops & collectibles</p>

                    <InputGroup className="mb-3 " style={{ width: '60%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#0B172E', borderRadius: '5px' }}>
                        <Row style={{ width: '100%' }}>
                            <Col xs={12} sm={12} md={7}
                                style={{ display: 'flex', justifyContent: 'center' }}
                                className='px-0'
                            >
                                <FormControl
                                    placeholder="Enter your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    style={{ backgroundColor: '#0B172E', border: 'none', color: 'white', marginTop: '5px', width: '100%' }}
                                    className='px-3 form'
                                />
                            </Col>
                            <Col xs={12} sm={12} md={5} style={{ display: 'flex', justifyContent: 'center', padding: '1px' }}>
                                <Button id="button-addon2"
                                    style={{
                                        backgroundColor: '#11A2FA', color: 'white', margin: '5px',
                                        borderRadius: '5px', width: '100%', border: '0px'
                                    }}
                                    className='px-0'>
                                    Subscription
                                </Button>
                            </Col>
                        </Row>
                    </InputGroup>

                </Card>
            </Container>
        </div>
    );
};

export default Subscribe;