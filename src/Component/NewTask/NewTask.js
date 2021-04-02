import React, { Component } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';
import idGenerator from '../helpers/idGenerator';
import PropTypes from 'prop-types';
// import states from './newTask.module.css';


class NewTask extends Component {
    state = {
        title: '',
        description: '',
        openNewTaskModal: false,
    };

    handeleChange = (value, name) => {

        this.setState({
            [name]: value,
        });
    };



    handleSubmit = () => {
        const title = this.state.title.trim();
        const description = this.state.description.trim();
        if (!this.state.title) {
            return;
        };

        const newTask = {
            id: idGenerator(),
            title,
            description,
        };
        this.props.addTask(newTask);
    };

    handleKey  = (event) => {
        if (this.state.title === "") {
            return
        }

        if (event.key === "Enter") {
            
            this.handleSubmit()
        };

    };

    render() {
        const { onClose } = this.props;
        return (

            <Modal
                show={true}
                onHide={onClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl name='title' maxLength="10"
                        placeholder="Title"
                        onChange={(event) => this.handeleChange(event.target.value, "title")}
                        onKeyPress={(event)=>this.handleKey(event) }
                        className='mb-3'
                    />
                    <FormControl name='description' as="textarea" rows={5}
                        placeholder="Description"
                        onChange={(event) => this.handeleChange(event.target.value, "description")}
                        onKeyPress={(event)=>this.handleKey(event)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={this.handleSubmit}
                        variant='success'
                    >Add
                        </Button>
                    <Button onClick={onClose}>
                        Cancel
                        </Button>
                </Modal.Footer>
            </Modal>
        );
    };
};

NewTask.propTypes = {
    addTask: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default NewTask;