import { Card, CardBody, CardHeader, CardFooter, ListGroup, ListGroupItem, CardTitle, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import './ReviewPage.css';
import NextButton from "../NextButton/NextButton";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
function ReviewPage(){
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedbackReducer)
    function handleSubmit(){
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: feedback
        }).then(response => {
            dispatch({
                type: 'CLEAR'
            });
            console.log('Successfully posted feedback and cleared feedback reducer.')
        }).catch(err => {
            console.error('Error posting data.',err)
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
    // useEffect(() => {
        check()
    // }, [])
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
                        Comments: {feedback.comments?(feedback.comments.length > 0?`"${feedback.comments}"`:'N/A'):'N/A'}
                    </ListGroupItem>
                </ListGroup>

            </CardBody>
            <CardFooter className="support-footer">

            </CardFooter >
        </Card>
        <NextButton text='Go back and Change' path='/feeling' dothing={()=>{console.log('going back to the beginning')}} className='restartButton'/>
        <NextButton text={'Submit'} path='/success' dothing={handleSubmit}/>
        </Container>
    )
}
export default ReviewPage;