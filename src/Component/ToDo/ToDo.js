import React, { Component } from "react";
// import styles from './Todo.module.css';  
import { Button, Col, Container, Row } from "react-bootstrap";
import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';
import Confirm from '../Confirm/Confirm';

class ToDo extends Component {
    state = {
        tasks: [],
        selecktedTask: new Set(),
        showConfirm: false,
    }

    addTask = (newTask) => {

        const tasks = [...this.state.tasks, newTask];

        this.setState({
            tasks
        });
    };

    delTask = (taskId) => {
        const newTasks = this.state.tasks.filter((task) => {
            return task.id !== taskId
        });
        // Delete taskId for id

        // const selecktedTask = this.state.selecktedTask;  
        // if (selecktedTask.has(taskId)) {
        //     selecktedTask.delete(taskId);
        // }

        this.setState({
            tasks: newTasks,
            // selecktedTask: selecktedTask,
        });
    }

    toggleTask = (taskId) => {
        const selecktedTask = new Set(this.state.selecktedTask);
        if (selecktedTask.has(taskId)) {
            selecktedTask.delete(taskId);
        }
        else {
            selecktedTask.add(taskId);
        }

        this.setState({
            selecktedTask: selecktedTask,
        })
    }

    removeSelekted = () => {
        const { selecktedTask, tasks } = this.state;

        const newTasks = tasks.filter((task) => {
            if (selecktedTask.has(task.id)) {
                return false;
            }
            else
                return true;
        });

        this.setState({
            tasks: newTasks,
            selecktedTask: new Set(),
            showConfirm: false, 
        })
    }

    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm, 
        });
    }

    render() {
        const { tasks, selecktedTask, showConfirm } = this.state;
        const idGen = tasks.map((task) => {
            return (
                <Col key={task.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Task data={task}
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
                                onAdd={this.addTask}
                                disabled={!!selecktedTask.size}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Button variant="danger"
                            disabled={!selecktedTask.size}
                            onClick={this.toggleConfirm}
                        >
                            DeLete Seleckted
                          </Button>
                             &nbsp;
                        <Button variant="danger" onClick={this.allChecked}>All Checked</Button>
                    </Row>
                    <br />
                    <Row>
                        {idGen}
                    </Row>
                </Container>
                { showConfirm &&
                    <Confirm
                        onClose={this.toggleConfirm}
                        onConfirm={this.removeSelekted}
                        count={selecktedTask.size}
                    />
                }
            </div>
        )
    }
}

export default ToDo;

