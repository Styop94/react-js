import React, { Component } from "react";
// import styles from './Todo.module.css';  
import { Button, Col, Container, Row } from "react-bootstrap";
import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';
import Confirm from '../Confirm/Confirm';
import EditTaskModal from './../NewTask/EditTaskModal'

class ToDo extends Component {
    state = {
        tasks: [],
        selectedTask: new Set(),
        showConfirm: false,
        openNewTaskModal: false,
        editTask: false,

    }

    addTask = (newTask) => {

        const tasks = [...this.state.tasks, newTask];

        this.setState({
            tasks,
            openNewTaskModal: false,
            edited: newTask,
        });
    };


    delTask = (taskId) => {
        const newTasks = this.state.tasks.filter((task) => {
            return task.id !== taskId
        });

        this.setState({
            tasks: newTasks,
        });
    };

    toggleTask = (taskId) => {
        // const selectedTask = new Set(this.state.selectedTask);
        const { selectedTask } = this.state
        if (selectedTask.has(taskId)) {
            selectedTask.delete(taskId);
        }
        else {
            selectedTask.add(taskId);
        };

        this.setState({
            selectedTask
        });
    };

    removeSelekted = () => {
        const { selectedTask, tasks } = this.state;

        const newTasks = tasks.filter((task) => {
            if (selectedTask.has(task.id)) {
                return false;
            }
            else
                return true;
        });

        this.setState({
            tasks: newTasks,
            selectedTask: new Set(),
            showConfirm: false,
        })
    }
    onClose = () => {
        this.setState({
            editTask: null
        })
    }
    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm,
        });
    };

    handleEdit = (editTask) => {
        this.setState({
            editTask
        })
    }


    SelectALL = () => {
        const taskIds = this.state.tasks.map((task) => task.id);
        this.setState({
            selectedTask: new Set(taskIds)
        })
    };

    deSelectALL = () => {
        this.setState({
            selectedTask: new Set()
        })
    };

    toggleNewTaskModal = () => {
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        });
    };

    onSave = (editedTask) => {
        let tasks = [...this.state.tasks];
        let num = tasks.findIndex((task) => task.id === editedTask.id)
        tasks[num] = editedTask;
        this.setState({
            tasks
        })
    }


    render() {
        const { tasks, selectedTask, showConfirm, openNewTaskModal, editTask } = this.state;
        const idGen = tasks.map((task) => {
            return (
                <Col key={task.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Task task={task}
                        toggleTask={this.toggleTask}
                        disabled={!!this.state.selectedTask.size}
                        delTask={this.delTask}
                        selected={selectedTask.has(task.id)}
                        handleEdit={this.handleEdit}
                    />
                </Col>
            )
        });

        return (
            <div>
                <h2>ToDo List</h2>
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <Button variant="outline-secondary"
                                onClick={this.toggleNewTaskModal}
                            >
                                Add New Task
                     </Button>
                        </Col>
                        <Col>
                            <Button variant="danger"
                                disabled={!selectedTask.size}
                                onClick={this.toggleConfirm}
                            >
                                DeLete Seleckted
                          </Button>
                        </Col>
                        <Col>
                            <Button variant="warning"
                                onClick={this.SelectALL}
                                disabled={tasks.length < 2 ? true : false}
                            >
                                Select ALL
                             </Button>
                        </Col>
                        <Col>
                            <Button variant="warning"
                                onClick={this.deSelectALL}
                                disabled={selectedTask.size < 2}
                            >
                                Deselect ALL
                             </Button>
                        </Col>
                    </Row>
                    <Row>
                        {idGen}
                    </Row>
                </Container>
                { showConfirm &&
                    <Confirm
                        onClose={this.toggleConfirm}
                        onConfirm={this.removeSelekted}
                        count={selectedTask.size}
                    />
                }
                {openNewTaskModal &&
                    <NewTask
                        onClose={this.toggleNewTaskModal}
                        addTask={this.addTask}
                    />
                }
                {this.state.editTask &&
                    <EditTaskModal
                        handleEdit={this.handleEdit}
                        editTask={editTask}
                        onSave={this.onSave}
                        editTask={this.state.editTask}
                        onClose={this.onClose}

                    />}
            </div>
        );
    };
};

export default ToDo;

