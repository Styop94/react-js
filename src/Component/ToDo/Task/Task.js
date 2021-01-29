import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './taskStyles.module.css';

class Task extends Component {

    state = {
        selected: false,
    };

    handelChange = () => {
        const { onToggle, data } = this.props;
        onToggle(data.id);
        this.setState({
            selected: !this.state.selected,
        })
    }

    render() {
        const element = this.props.data;
        const { disabled, delTaskProps } = this.props;
        const { selected } = this.state;
        return (
            <Card className={`${styles.task} ${selected ? styles.selected : ""}`}>
                <Card.Body>
                    <input type="checkbox"
                        onChange={this.handelChange} />
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button variant="danger"
                        disabled={disabled}
                        onClick={() => { delTaskProps(element.id) }}>DeL
                 </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Task;