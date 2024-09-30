import { Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './NextButton.css'
function NextButton({ path, text, dothing}){
    const history = useHistory();
    function handleClick(){
        dothing();
        history.push(path);
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
    return(
        <div className="container-fluid" id="button-container">
            <Row className={text==='Go back and Change'?"justify-content-end button-row2":"justify-content-end button-row"}>
             <Button onClick={handleClick} id={text==='Go back and Change'?'restartButton':'nextButton'}>
                {text}
             </Button>    
            </Row>
        </div>
        
    )
}
export default NextButton;