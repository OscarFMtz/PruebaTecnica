import './App.css';
import {useDispatch} from "react-redux";
import TodoInput from './components/Todo/TodoInput';
import { addTodo } from './redux/todo/action';
import Header from './components/Header';
import { Row, Col, Container } from 'react-bootstrap';

import TodoList from "./components/Todo/TodoList";
import InprogressList  from './components/Inprogress/InprogressList';
import DoneList from "./components/Done/DoneList";

function App() {

  let dispatch = useDispatch();

  const create = (newTodo) => {
    dispatch(addTodo(newTodo));
  }
  
  return (
    <div >
      <Header  />  
      <div className="App">
      <Container>
        <Row className="head justify-content-md-center" >
          <Col sm={12} md={12} className="separados"><TodoList /></Col>
          <Col sm={12} md={12} className="separados"><InprogressList /></Col>
          <Col sm={12} md={12} className="separados"><DoneList /></Col>
        </Row>
        <TodoInput createTodo={create}/>  
      </Container>
      </div>
  
  
    </div>
    
  );
}

export default App;
