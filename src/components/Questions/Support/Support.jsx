import { Container, Row, Col, Card, CardBody, CardHeader, CardFooter, CardText, CardTitle, Form, CardSubtitle, ListGroup, ListGroupItem, CardImg } from "react-bootstrap";
import NextButton from "../../NextButton/NextButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import './Support.css'
function Support(){
    const dispatch = useDispatch();
    const [supportLevel, setSupportLevel] = useState('3')

    function handleChange(event){
        setSupportLevel(event.target.value);
    }

    function submitSupport(){
        dispatch({
            type: 'SUBMIT',
            payload: {
                part: '3',
                info: supportLevel
            }
        })
    }
    return (
        <Container>
        <Card className="feelingCard">
            <CardHeader className="feelingHeader">
                Support
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className="text-left">
                        <CardTitle className="feelingTitle">
                            Did you feel supported by your teachers and peers?
                        </CardTitle>
                        <CardSubtitle className="feelingSubtitle">
                            <i>*On a scale of 1 to 5</i>
                        </CardSubtitle>
                    </Col>
                    <Col>
                        <CardImg src='public/images/support.png' className="supportImage"/>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>
                                What to think about:
                            </h3>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Interactions with peers</ListGroup.Item>
                                <ListGroup.Item>How you were taught</ListGroup.Item>
                                <ListGroup.Item>Meetups outside of class</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <blockquote className="blockquote mb-0">
                                <p className="quoteText">
                                    {/* those are some long-ass quote marks... */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                                    </svg>
                                {`  `}Whether it's encouragement from teachers or positive interactions with classmates, feeling supported can inspire students to persevere through challenges and stay focused on their goals.
                                {`  `}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                                    </svg>
                                </p>
                                <footer className="blockquote-footer">
                                    Institute of Technology in <cite title={`https://www.iot.edu/why-is-student-support-needed/#:~:text=Whether%20it's%20encouragement%20from%20teachers,contributes%20to%20overall%20personal%20development.`}>
                                        Why is Student Support Needed?
                                        </cite>
                                </footer>
                            </blockquote>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                    <Col className="col-4">
                        <CardTitle className="supportLabel">
                        Select Level of Support:
                        </CardTitle>
                    </Col>
                    <Col className="text-left col-7">
                        <Form className="support-form">
                            <Form.Select value={supportLevel} onChange={handleChange} className="selectInput float-end d-flex justify-content-center">
                                <option value="1">I did not feel supported by anyone, even when I asked for help.</option>
                                <option value="2">Support was limited, and I felt ignored sometimes.</option>
                                <option value="3">The level of support was okay.</option>
                                <option value="4">My teachers and peers supported me well.</option>
                                <option value="5">My teachers and peers went above and beyond with support.</option>
                            </Form.Select>
                        </Form>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter className="support-footer">

            </CardFooter>
        </Card>
        <NextButton path='/comments' text='Next' dothing={submitSupport}/>
        </Container>
    )
}

export default Support;