import { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NextButton from "../../NextButton/NextButton";
import './Comments.css' ;
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Comments(){
    const [commentsValue, setCommentsValue] = useState('');
    const dispatch = useDispatch();
    function handleSubmit(){
        dispatch({
            type: 'SUBMIT',
            payload: {
                part: '4',
                info: commentsValue
            }
        })
    }
    const history = useHistory();
    const answers = useSelector(store => store.feedbackReducer);
    function check(){
        if(!answers.feeling){
            history.push('/feeling')
        } else if(!answers.understanding){
            history.push('/understanding')
        } else if(!answers.support){
            history.push('/support')
        }
    }
    useEffect(() => {
        check()
    }, [])
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
                    
                        <Form className="commentsForm">
                            <textarea 
                                placeholder="Type here..."
                                className="commentsInput" 
                                value={commentsValue} 
                                onChange={(event) => {setCommentsValue(event.target.value)}} 
                                />
                        </Form>

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