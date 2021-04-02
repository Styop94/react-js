import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './taskStyles.module.css';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit} from '@fortawesome/free-solid-svg-icons'


class Task extends Component {

    render() {
        const element = this.props.task;
        const { disabled, toggleTask, delTask, selected, handleEdit, task } = this.props;
        return (
            <Card className={`${styles.task} ${selected ? styles.selected : ""}`}>
                <Card.Body>
                    <input
                        type="checkbox"
                        onChange={() => toggleTask(task.id)}

                        checked={selected}
                    />
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Button variant="danger"
                        disabled={disabled}
                        onClick={() => { delTask(task.id) }}>DeL
                 </Button>
                    <Button onClick={() => handleEdit(task)} variant='success'>edit</Button>
                </Card.Body>
            </Card>
        );
    };
};


Task.propTypes = {
    task: PropTypes.object.isRequired,
    toggleTask: PropTypes.func.isRequired,
    delTask: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
}

export default Task;