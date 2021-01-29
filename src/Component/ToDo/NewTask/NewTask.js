import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
// import states from './newTask.module.css';

class NewTask extends Component {

    render() {
        const { disabledBtn, valueProps } = this.props;
        return (
            <InputGroup className="mb-3" >
                <FormControl maxLength="10" placeholder=""
                    disabled={!!this.props.disabledProps}
                    value={this.props.valueProps}
                    onChange={this.props.onChangeProps}
                    onKeyDown={this.props.onKeyDownProps} />
                <InputGroup.Append>
                    <Button variant="outline-secondary"
                        disabled={!valueProps || disabledBtn}
                        onClick={this.props.AddTextProps}>
                        Click here
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

export default NewTask;