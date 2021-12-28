import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import videofile from '../../../Images/video/video.mp4';
import './VideoSection.css';

const VideoSection = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <video autoPlay loop muted
                        src={videofile} type="video/mp4"
                        style={{ height: '80vh', width: '100%', objectFit: "cover", }}
                        className="d-block w-100"
                    ></video>
                    <Carousel.Caption>
                        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col xs={12} sm={12} md={9}
                                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <h1 >The Best Place to Collect NFs</h1>
                                <p className="py-3" style={{ width: '62%', textAlign: 'center' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis.</p>
                                <div>
                                    <Button className="me-2 ps-4 text-light pe-4" variant="info">Create</Button>{' '}
                                    <Button className="text-light" variant="outline-info">Connect Wallet</Button>{' '}
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default VideoSection;