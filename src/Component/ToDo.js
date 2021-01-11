// import { Component } from "react"

// class ToDo extends Component{
//         state = {
//             inputValue : '',
//             tasks : []
//         }
//         handleChange=(event)=>{
//             console.log('this.state.value', this.state.value)
//         }
  
//     render() {
//         const {tasks} = this.state;
//         const taskComponents = tasks.map((task, index)=> {
//             return <li key={index}>{task}</li>
//         });
//         return(
//             <div>   
//                 <h2>todo</h2>
//                 <input type="text" onChange={this.handleChange}/>
//                 <button>Add task</button>
//                 <h3>Hello</h3>
//                 <ol>
//                      {taskComponents}
//                 </ol>
//             </div>
//             )
//     }
// }

// export default ToDo;