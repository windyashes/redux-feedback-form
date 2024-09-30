import { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import NextButton from "../../NextButton/NextButton";
import './Comments.css' ;

function Comments(){
    const [commentsValue, setCommentsValue] = useState('');
    const dispatch = useDispatch();
    function handleSubmit(){
        if(!(commentsValue.length > 0)){
            setCommentsValue('N/A')
        }
        dispatch({
            type: 'SUBMIT',
            payload: {
                part: '4',
                info: commentsValue
            }
        })
    }
    
    return (
        <Container>
            <Card className="feelingCard">
                <CardHeader className="feelingHeader">
                    Comments
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col className="text-left commentsStuffCol">
                            <CardTitle className="comTitle">
                                Anything you'd like us to know?
                            </CardTitle>
                            <CardSubtitle className="commentsSubtitle">
                                We'd love to hear it!
                            </CardSubtitle>
                        </Col>
                        <Col>
                    <CardText className="commentsTextbox">
                        <Form className="commentsForm">
                            <textarea 
                                placeholder="Type here..."
                                className="commentsInput" 
                                value={commentsValue} 
                                onChange={(event) => {setCommentsValue(event.target.value)}} 
                                />
                        </Form>
                    </CardText>
                        </Col>
                </Row>
                </CardBody>
                <CardFooter className="support-footer">
                    See you again soon!
                </CardFooter>
            </Card>
            <NextButton path='/review' text='Review' dothing={handleSubmit} />
        </Container>
    )
}

export default Comments;