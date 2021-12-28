import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PopularComments = () => {

    const [allitems, setAllItems] = useState([]);
    useEffect(() => {
        fetch('https://floating-hollows-01861.herokuapp.com/allitems')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, []);

    const updateFunction = (id) => {

        const proced = window.confirm('Are you sure to like this ?');

        if (proced) {
            const uri = `https://floating-hollows-01861.herokuapp.com/allitems/${id}`;
            fetch(uri, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        // alert('Are you sure to like this ? ');
                        fetch('https://floating-hollows-01861.herokuapp.com/allitems')
                            .then(res => res.json())
                            .then(data => setAllItems(data))

                    }
                });
        }
    }


    return (
        <div style={{ minHeight: '100vh' }} className='py-5 bannerStyle'>
            <Container className='py-3'>
                <h2 className="App fw-bold pb-5" style={{ color: 'white' }}>Popular Item </h2>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {
                        allitems.filter(items => items.code === "popular").map(item => (
                            <Col
                                key={item._id}
                            >
                                <Card style={{ backgroundColor: '#0D0B0B', borderRadius: '5px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                        <img src={item.profile1} alt='' width="70px" className='me-1' />
                                        <div>
                                            <h5 style={{ marginBottom: '0', color: 'white' }}>{item.name}</h5>
                                            <small style={{ color: 'gray' }}>{item.surname}</small>
                                        </div>
                                    </div>
                                    <Link to={`/allitems/${item._id}`} style={{ textDecoration: 'none' }}>
                                        <Card.Img variant="top" src={item.image} className='px-2' />
                                    </Link>
                                    <Card.Body>

                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                                            <Card style={{ backgroundColor: '#000000', color: 'white', borderRadius: '50px', marginTop: '-30px', }}
                                                className='py-2, px-5' >
                                                <span style={{ color: '#00FFD4', fontWeight: 'bold' }}>${item.price}k</span>
                                            </Card>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div>
                                                <Button variant="info" size="sm"
                                                    style={{ backgroundColor: '#11A2FA', color: 'white', borderRadius: '5px' }}
                                                    className='px-3'
                                                    onClick={() => console.log('This is arro function')}
                                                >
                                                    Buy Now
                                                </Button>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                                                <i className="fas fa-heart fa-1x"
                                                    style={{ color: '#8D8D8D', marginRight: '10px' }}
                                                    onClick={() => updateFunction(item._id)}
                                                >
                                                </i>
                                                <span>{item.likes}</span>
                                            </div>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
                <div
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '57px', marginBottom: '48px' }}
                >


                    <Link to='/nfts' className='px-5'>
                        <Button
                            variant="outline-info"
                            className="px-3"
                            style={{ color: 'white' }}
                        >
                            See More
                        </Button>{' '}
                    </Link>
                </div>
            </Container>

        </div>
    );
};

export default PopularComments;