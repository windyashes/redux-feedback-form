import { Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './NextButton.css'
function NextButton({ path, text}){
    const history = useHistory();
    function handleClick(){

        history.push(path);
    }
    return(
        <div className="container-fluid" id="button-container">
            <Row className="justify-content-end button-row">
             <Button onClick={handleClick} id='nextButton'>
                {text}
             </Button>    
            </Row>
        </div>
        
    )
}
export default NextButton;