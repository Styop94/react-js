import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import idGenerator from '../helpers/idGenerator';
import PropTypes from 'prop-types';
// import states from './newTask.module.css';


class NewTask extends Component {
    state = {
        title: '',
        description: '',
    }


    handeleChange = (event) => {
        this.setState({
            title: event.target.value,
        })
    }


    hendelKeyDown = (event) => {
        if (this.state.title === "") {
            return
        }

        if (event.key === "Enter") {
            const { title, description } = this.state;
            const newTask = {
                id: idGenerator(),
                title,
                description,
            };
            this.props.onAdd(newTask);
            this.setState({
                title: '',
                description: ''
            });
        }
    };

    handelSubmit = () => {
        const title = this.state.title.trim();
        const description = this.state.description.trim();

        if (!title) {
            return;
        }

        const newTask = {
            id: idGenerator(),
            title,
            description,
        };

        this.props.onAdd(newTask);
        this.setState({
            title: '',
            description: ''
        });
    };

    render() {
        const { title } = this.state;
        const { disabled } = this.props;
        return (
            <InputGroup className="mb-3" >
                <FormControl maxLength="10"
                    placeholder="Title"
                    value={title}
                    onChange={this.handeleChange}
                    onKeyDown={this.hendelKeyDown}
                    disabled={disabled}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary"
                        disabled={disabled}
                        onClick={this.handelSubmit}
                    >
                        Click here
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

NewTask.propTypes = {
    onAdd: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}

export default NewTask;