import React from 'react';
import { Card, CardTitle, Col, CardImg, CardGroup } from 'reactstrap'
import andrew from '../assets/andrew'
import earl from '../assets/earl'
import jack from '../assets/jack'


export default function AboutUs () {
        return (
            <center>
                <Col className="about-page">
                    <CardGroup className='cardgroup'>
                    <Card className='about-card'>
                        <CardImg src={jack} className='cardimage'/>
                        <CardTitle className='cardtext'>
                            <h3>Jack Mades</h3>
                            <h4>Product/Project Manager</h4>
                            <p>I am a full stack software developer with a passion for enriching people’s lives through technology. As a Marine Corps veteran, I have extensive experience planning and leading complex IT infrastructure projects.</p>
                        </CardTitle>
                    </Card>
                        <Card className='about-card'>
                        <CardImg src={earl} className='cardimage'/>
                        <CardTitle>
                            <h3>Earl Nicholson</h3>
                            <h4>Tech Lead</h4>
                            <p>A Navy Vet and a Chicago native. I am a full stack developer, with a passion for learning new skills, as well as meeting new people and traveling the world.</p>
                        </CardTitle>
                    </Card>
                        <Card className='about-card'>
                        <CardImg src={andrew} className='cardimage'/>
                        <CardTitle>
                            <h3>Andrew Luna</h3>
                            <h4>Design Lead</h4>
                            <p>I am a Full Stack Web Developer with a drive towards solving problems and developing applications that will positively impact the lives of many.</p>
                        </CardTitle>
                    </Card>
                    </CardGroup>
                </Col>
            </center>
        );
    }



