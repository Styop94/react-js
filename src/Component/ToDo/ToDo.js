import { Component } from "react";
import styles from './Todo.module.css';

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
        // this.setState({
        //     inputValue: "",
        //     tasks: [...this.state.tasks, inputValue],
        // })

        // const newTask = {
        //     id : "wdfsf",
        //     title: inputValue,
        // };
        const tasks = [...this.state.tasks, inputValue];
    
    this.setState({
        tasks,
        inputValue: '',
    })
}

render() {
    const { tasks } = this.state;

    // let text = tasks.map((item, index) => {
    //     return <li className={index === 2 ? styles.selected : null} key={index}>{item}</li>
    // })

    // let text = tasks.map((item, index) => {
    //     return <li className={`${index === 2 ? styles.selected : ""} ${styles.task}`} key={index}>{item}</li>
    // })
    // const taskComponents = [];
    const taskComponents = tasks.map((task, index) => {
        const classes = [styles.task];
        if (index === 2) {
            classes.push(styles.selected);
        }
        return <li key={index} className={classes.join(' ')}>{task}</li>
    })


    return (
        <div>
            <h2>Todo List</h2>
            <input value={this.state.inputValue} onChange={this.handeleChange} />
            <button onClick={this.clearText} >Click here</button>
            <ol>
                {taskComponents}
            </ol>

        </div>
    )
}
}

export default ToDo;

