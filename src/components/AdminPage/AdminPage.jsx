import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import './AdminPage.css'
function AdminPage(){
    const [feedbackList, setFeedbackList] = useState([{
        feeling: '1',
        understanding: '2',
        support: '3',
        comments: 'grahhh'
    }]);
    function fetchFeedback(){
        axios.get('/api/feedback').then(response => {
            console.log(response.data);
            setFeedbackList(response.data)
    })
        .catch(err => console.error('Unable to fetch feedback',err));
    }
    useEffect(() =>{
        fetchFeedback()
    },[]
    )
    function TableRow({item}){
        
        return(
            <tr id={item.id} key={item.id}>
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                <td><button onClick={() => {deleteFeedback(item.id)}}>Delete</button><button className={item.flagged?'flagged':''} onClick={() => {flagForReview(item.id)}}>Flag for Review</button></td>
            </tr>
        )
    }
    const [logged, setLogged] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        if(password === 'feedback1234'){
            setLogged(true);
            setUserName('');
            setPassword('');
        } else {
            alert('Incorrect username and password.');
        }
    }
    function deleteFeedback(id){
        if(confirm('Are you sure you want to delete this from the database?')){
            axios.delete(`/api/feedback/${id}`).then(response => {
                console.log('successfully deleted');
                fetchFeedback();
            }).catch(err => {
                console.error('Error deleting',err);
            })
        } else {
            alert('Deletion cancelled.')
        }
    }
    function flagForReview(id){
        axios.put(`/api/feedback/${id}`).then(response =>{
            alert('Flagged for review.');
            fetchFeedback();
        }).catch(err => {
            console.error('Error with PUT', err);
        });
    }

    return(
        <Container>
            {logged?
                <Table id="adminTable">
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {feedbackList.map((item) => (
                        <TableRow item={item} key={item.id}/>
                    ))}
                    </tbody>
                </Table>
                :
                <form onSubmit={handleSubmit}>
                    <input placeholder='Admin Username' value={userName} onChange={(event) => {setUserName(event.target.value)}} required class='adminInput'/>
                    <input placeholder="password" value={password} onChange={(event) => {setPassword(event.target.value)}} required type='password' class='adminInput'/>
                    <button>Log in</button>
                </form>
            }   
        </Container>
    )
}
export default AdminPage;