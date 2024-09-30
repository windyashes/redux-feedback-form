import { Card, CardBody, CardHeader, CardFooter, ListGroup, ListGroupItem, CardTitle, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import './ReviewPage.css';
import NextButton from "../NextButton/NextButton";
import axios from "axios";
function ReviewPage(){
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedbackReducer)
    function handleSubmit(){
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: {
                feeling: feedback.feeling,
                understanding: feedback.understanding,
                support: feedback.support,
                comments: feedback.comments
            }
        }).then(response => {
            dispatch({
                type: undefined
            });
            console.log('Successfully posted feedback and cleared feedback reducer.')
        }).catch(err => {
            console.error('Error posting data.',err)
        })
    }
    return(
        <Container>
        <Card className="feelingCard">
            <CardHeader className="feelingHeader">
                Review
            </CardHeader>
            <CardBody>
                <CardTitle className="reviewTitle">
                    Your Feedback:
                </CardTitle>
                <ListGroup variant='flush' className="reviewAnswers">
                    <ListGroupItem>
                        Feeling: {feedback.feeling}/5
                    </ListGroupItem>
                    <ListGroupItem>
                        Understanding: {feedback.understanding}/5
                    </ListGroupItem>
                    <ListGroupItem>
                        Support: {feedback.support}/5
                    </ListGroupItem>
                    <ListGroupItem>
                        Comments: {feedback.comments.length > 0?`"${feedback.comments}"`:'N/A'}
                    </ListGroupItem>
                </ListGroup>

            </CardBody>
            <CardFooter className="support-footer">

            </CardFooter >
        </Card>
        <NextButton text={'Submit'} path='/success' dothing={handleSubmit}/>
        </Container>
    )
}
export default ReviewPage;