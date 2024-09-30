import { Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import { Form, ListGroup } from "react-bootstrap";
import './Feeling.css'
import { useState } from "react";
import NextButton from '../../NextButton/NextButton';
import { useDispatch, useSelector } from "react-redux";
function Feeling(){
    const answers = useSelector(store => store.feedbackReducer);
    const feelingAnswers = [
        {
            num: '1',
            desc: `I felt like it was a complete waste of time`
        },
        {
            num: '2',
            desc: `I felt like I didn't get much out of it`
        },
        {
            num: '3',
            desc: 'I felt that it was okay'
        },
        {
            num: '4',
            desc: `I felt like the project helped me learn`
        },
        {
            num: '5',
            desc: 'I felt that the project challenged me and helped me develop my skills'
        }
    ]
    const dispatch = useDispatch();
    const [selectedRadio, setSelectedRadio] = useState(answers.feeling||'3');
    const handleChange = (event) => {
        setSelectedRadio(event.target.value)
    }
    function submitFeeling(){
        dispatch({
            type: 'SUBMIT',
            payload: {
                part: '1',
                info: selectedRadio
            }
        })
    }
    return (
        <Container>
        <Card className="feelingCard">
            <CardHeader className="feelingHeader">
                Feeling
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className="text-left">
                        <CardTitle className="feelingTitle">
                            How do you feel about the redux feedback assignment?
                        </CardTitle>
                        <CardSubtitle className="feelingSubtitle">
                            <i>*On a scale of 1 to 5</i>
                        </CardSubtitle>
                        <CardText className="feelingListLabel">
                            Take into account the following:
                        </CardText>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                - How did it challenge you?
                            </ListGroup.Item>
                            <ListGroup.Item>
                                - Were you able to learn anything?
                            </ListGroup.Item>
                            <ListGroup.Item>
                                - Was it fun?
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>


                    <Col className="text-left">
                        <Form className="feeling-form">
                            {feelingAnswers.map((ansObj) => 
                                <Form.Check id={`radio-${ansObj.num}`} key={ansObj.num} className="radio-thing allign-middle">
                                    <Form.Check.Input type='radio' name='group1' isValid className="radio-input" checked={selectedRadio === ansObj.num} onChange={handleChange} value={ansObj.num} id={`radio-input-${ansObj.num}`}/>
                                    <Form.Check.Label className="radio-label">
                                        {ansObj.num}
                                    </Form.Check.Label>
                                    <Form.Control.Feedback type='valid' className="radio-desc">
                                        {ansObj.desc}
                                    </Form.Control.Feedback>
                                </Form.Check>
                            )}
                        </Form>
                    </Col>
                   

                </Row>
            </CardBody>
        </Card>
        <NextButton path='/understanding' text='Next' dothing={submitFeeling}/>
        </Container>
    )
}

export default Feeling;