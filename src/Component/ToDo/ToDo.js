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
            selecktedTask: new Set(),
            // checked: false,
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


        const newElement = {
            id: idGenerator(),
            title: inputValue,
        }

        const tasks = [...this.state.tasks, newElement];

        this.setState({
            tasks,
            inputValue: '',
        })
    }

    delTask = (taskId) => {
        let fil = this.state.tasks.filter((filterTask) => {
            return filterTask.id !== taskId
        });
        // Delete taskId for id

        // const selecktedTask = this.state.selecktedTask;  
        // if (selecktedTask.has(taskId)) {
        //     selecktedTask.delete(taskId);
        // }

        this.setState({
            tasks: fil,
            // selecktedTask: selecktedTask,
        });
    }

    toggleTask = (element) => {
        const selecktedTask = new Set(this.state.selecktedTask);
        if (selecktedTask.has(element)) {
            selecktedTask.delete(element);
        }
        else {
            selecktedTask.add(element);
        }

        this.setState({
            selecktedTask: selecktedTask,
        })
    }

    removeSelekted = () => {
        const { selecktedTask, tasks } = this.state;
        const newTasks = tasks.filter((ele) => {
            if (selecktedTask.has(ele.id)) {
                return false;
            }
            else
                return true;
        });

        this.setState({
            tasks: newTasks,
            selecktedTask: new Set(),
        })
    }

    hendelKeyDown = (event) => {
        if (event.key === "Enter") {
            this.clearText();

        }
    }

    allChecked = (element) => {
      
        // const {selecktedTask} = this.state;
        // if(selecktedTask.has(element)) {
        //     this.setState ({
        //         checked : true,
        //     })
        // }
        // else {
        //     this.setState ({
        //         checked : false,
        //     })
        // }
    }

    render() {
        const idGen = this.state.tasks.map((element) => {
            return (
                <Col key={element.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card>
                        <Card.Body>
                            <input type="checkbox" onClick= {() => {this.allChecked(element.id) }} checked={this.state.checked} onChange={() => { this.toggleTask(element.id) }}  />
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="danger" disabled={!!this.state.selecktedTask.size} onClick={() => { this.delTask(element.id) }}>DeL</Button>
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
                        <Col>
                            <InputGroup className="mb-3" >
                                <FormControl maxLength="10" placeholder="" disabled={!!this.state.selecktedTask.size}
                                    value={this.state.inputValue} onChange={this.handeleChange} onKeyDown={this.hendelKeyDown} />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" disabled={!this.state.inputValue} onClick={this.clearText}>Click here</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">    
                        <Button variant="danger" disabled={!this.state.selecktedTask.size} onClick={this.removeSelekted}>DeLete Seleckted</Button>
                             &nbsp;
                            <Button variant="danger" onClick={this.allChecked}>All Checked</Button>
                    </Row>
                    <br />
                    <Row>
                        {idGen}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ToDo;

