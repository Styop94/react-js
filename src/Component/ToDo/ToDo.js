import { Component } from "react";
import idGenerator from './helpers/idGenerator';
// import styles from './Todo.module.css';  
import { Button, Col, Container, Row } from "react-bootstrap";
import Task from './Task/Task';
import NewTask from './NewTask/NewTask';

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
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

    AddText = () => {
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
            this.AddText();

        }
    }

    // allChecked = (element) => {

    //     const {selecktedTask} = this.state;
    //     if(selecktedTask.has(element)) {
    //         this.setState ({
    //             checked : true,
    //         })
    //     }
    //     else {
    //         this.setState ({
    //             checked : false,
    //         })
    //     }
    // }

    render() {
        const idGen = this.state.tasks.map((element) => {
            return ( 
                <Col key={element.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Task data={element}
                        onToggle={this.toggleTask}
                        disabled={!!this.state.selecktedTask.size}
                        delTaskProps={this.delTask} />
                </Col>
            )
        })

        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <h2>Todo List</h2>
                        <Col>
                            <NewTask
                                disabledProps={this.state.selecktedTask.size}
                                valueProps={this.state.inputValue}
                                disabledBtn={this.state.selecktedTask.size}
                                onChangeProps={this.handeleChange}
                                onKeyDownProps={this.hendelKeyDown}
                                AddTextProps={this.AddText}
                            />
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

