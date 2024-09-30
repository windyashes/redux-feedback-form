import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Container } from "react-bootstrap";
import './SuccessPage.css'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SuccessPage(){
    const history = useHistory();
    const [secondsRemaining, setSecondsRemaining] = useState(10)
   
        
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setSecondsRemaining(prevSeconds => {
            if (prevSeconds <= 0) {
              clearInterval(intervalId);
              history.push('/');
              return 0;
            } else {
                console.log('intimer')
              return prevSeconds - 1;
            }
          });
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    return(
        <div className="confetti">
            <Container className="successContainer">
                <Card className="successCard">
                    <CardHeader className="successHeader">

                    </CardHeader>
                    <CardBody className="successBody">
                        <CardTitle className="successTitle">
                            Success!
                        </CardTitle>
                        <CardText>
                            Returning to home page in {secondsRemaining}...
                        </CardText>
                    </CardBody>
                    <CardFooter className="successFooter">

                    </CardFooter>
                </Card>
            </Container>
        </div>
    )
}
export default SuccessPage;