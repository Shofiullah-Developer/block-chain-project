import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {

    return (
        <div>
            <Container className="pb-3">
                <div className="py-5">
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Col xs={12} sm={12} md={10}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <h1 className="" style={{ width: '70%', fontWeight: 'bold', color: "#fff", textAlign: 'center' }}>Create Digital Items, Sell Them
                                Yourself Or Keep Collecting</h1>
                            <small className="py-4" style={{ width: '50%', textAlign: 'center', color: "#fff", }}>The world is clear. Our aim is to become the first NFT generator on the
                                Binance Smart Chain & Ethereum Blockchain.</small>

                            <Button variant="info" style={{ width: '150px', fontWeight: 'bold', color: 'white' }}>BUY $TRAP</Button>{' '}
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Banner;