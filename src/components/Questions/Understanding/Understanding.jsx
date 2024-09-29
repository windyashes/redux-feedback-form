import { Row, Col, Card, Container, CardHeader, CardTitle, CardSubtitle, CardText, CardBody } from "react-bootstrap";
import { Form } from "react-bootstrap";
import NextButton from "../../NextButton/NextButton";
import './Understanding.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
function Understanding(){
    const dispatch = useDispatch();
    const [understandingValue, setUnderstandingValue] = useState('3')
    function handleChange (event) {
        setUnderstandingValue(event.target.value)
    }
    function handleSubmit(){
        dispatch({
            type: 'SUBMIT',
            payload: {
                part: '2',
                info: understandingValue
            }
        })
    }
    
    return (
        <Container>
        <Card className="feelingCard">
            <CardHeader className="feelingHeader" id='understandingimg'>
                Understanding
            </CardHeader>
            <CardBody className="understandingBody">
                <Row>
                    <Col className="text-center">
                        <CardTitle className="understandingTitle">
                            How well do you understand the material?
                        </CardTitle>
                        <CardSubtitle className="feelingSubtitle">
                            <i>*On a scale of 1 to 5</i>
                        </CardSubtitle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardText className="understandingText">
                            This week we learned a lot about react page routing with ​
                            <span className='highlight'>react-router-dom</span>, 
                            and react reducers with <span className='highlight'>redux</span>. 
                            How well did you understand these concepts?
                        </CardText>
                        <hr />
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-2">
                        <p className="rangeLabel text-right">Do Not Under​stand</p>
                    </Col>
                    <Col className="col-8">
                    <Form className="understanding-form">
                            <Form.Range className="rangeInput" 
                                min='1' max='5' 
                                id={`unders-${understandingValue}`} 
                                value={understandingValue} 
                                onChange={handleChange}/>
                    </Form>
                    </Col>
                    <Col className="col-2">
                        <p className="rangeLabel text-left">Mastery</p>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        <NextButton path='/support' text='Next' dothing={handleSubmit}/>
        </Container>
    )
}

export default Understanding;