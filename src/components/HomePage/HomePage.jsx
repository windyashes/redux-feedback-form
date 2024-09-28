import { Card, CardBody, CardHeader, Col, Row  } from "react-bootstrap";
import './Homepage.css'
function HomePage(){
    return(
        <div className="container text-center">
                <Row>
                    <div className="col d-flex justify-content-center">
            <div className="jumbotron" id='welcome'>
               Welcome Neumann Cohort!
            </div>
                </div>
                </Row>
                <Row>
                <Col>
            <Card>
                <CardHeader>
                    We are accepting feedback for your weekend projects.
                </CardHeader>
                <CardBody>
                    {/*     Lorem ipsum dolor sit amet... yadda yadda yadda blah blah blah
                        having more text makes it look nice lol */}
                    <p className="text-left">Feedback will help us at EDA to recognize things we could do better,
                     and celebrate things we've done right. As a team, we are always striving to provide the best
                     education experience as possible. Part of that is surveying students and reviewing responses 
                     to find areas where we can improve.</p>
                    <div  className="d-flex justify-content-center">
                        <div className="card" id='inner-card'>
                            <div className="card-header text-left" id='inner-card-header'>
                                You will be answering the following:
                            </div>
                            {/*     I love how this whole assignment could just be done with a form right here and now,
                                but I guess that wouldn't be in the spirit of REDUX and REACT ROUTING... 
                                lol */}
                            <ul className="list-group list-group-flush text-left">
                                <li className="list-group-item">- How you felt about the redux feedback loop assignment</li>
                                <li className="list-group-item">- How well you understood the material</li>
                                <li className="list-group-item">- How well you were supported by teachers and peers</li>
                                <li className="list-group-item">- Any additional comments or things you would like us to know.</li>
                            </ul>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </Col>
                </Row>
        </div>
    )
}
export default HomePage;