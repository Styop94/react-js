import { Component } from "react";
import idGenerator from './helpers/idGenerator';
// import styles from './Todo.module.css';  
import { Card, Button, InputGroup, FormControl, Col, Container, Row } from "react-bootstrap";

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            tasks: [],
        }
    }

    handeleChange = (event) => {
        this.setState({
            inputValue: event.target.value,

        })
    }
    clearText = () => {
        const inputValue = this.state.inputValue.trim();
        if (!inputValue) {
            return;
        }


        const newTask = {
            id: idGenerator(),
            title: inputValue,
        }
        const tasks = [...this.state.tasks, newTask];

        this.setState({
            tasks,
            inputValue: '',
        })
    }
    delTask = (taskId) => {
        let fil = this.state.tasks.filter((filterTask) => {
            return taskId !== filterTask.id
        });
        this.setState({ tasks: fil });
    }

    render() {
        const idGen = this.state.tasks.map((element) => {
            return (
                <Col key={element.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="primary" onClick={() => { this.delTask(element.id) }}>DeL</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        return (
            <div>
                <Container>
                <Row className="justify-content-center">
                    <h2>Todo List</h2>
                    <InputGroup className="mb-3" >
                        <FormControl maxLength="10" placeholder="" value={this.state.inputValue} onChange={this.handeleChange} />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.clearText}>Click here</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Row>
                    <Row>
                        {idGen}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ToDo;

