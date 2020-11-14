import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'

const Footer = () => {
    return (

        <>
            <div className="foot1">
                <Container fluid>
                    <Row>
                        <Col  lg={7}>

                            <div className="Gridd">

                                <ul>
                                    <h4> <li><b> POPULAR CATEGORIES </b> </li> </h4>
                                    <li>Cars</li>
                                    <li>Flats and Rent</li>
                                    <li>Jobs</li>
                                    <li>Mobile Phone</li>

                                </ul>
                                <ul>
                                    <h4> <li><b> TRENDING SEARCHES </b></li> </h4>
                                    <li>Bikes</li>
                                    <li>Watches</li>
                                    <li>Books</li>
                                    <li>Dogs</li>


                                </ul>

                                <ul>
                                    <h4> <li> <b>About Us </b></li> </h4>
                                    <li>About OLX Group</li>
                                    <li>OLX Blog</li>
                                    <li>Contact Us</li>
                                    <li>OLX for Businesses</li>

                                </ul>

                            </div>


                        </Col>
                        <Col >

                            <div className="Gridd">
                                <ul>
                                    <h4> <li><b> OLX </b> </li> </h4>
                                    <li>Help</li>
                                    <li>Sitemap</li>
                                    <li>Legal & Privacy information</li>


                                </ul>
                                <ul>
                                    <h4> <li><b> Follow Us </b> </li> </h4>
                                    <div className="Griddd">
                                        <li><i class="fa fa-facebook-official" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-play-circle-o" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                                    </div>

                                </ul>


                            </div>





                        </Col>
                    </Row>

                </Container>

            </div>

        </>
    )
}

export default Footer