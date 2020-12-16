function User(props) {
console.log('props', props)

    return (
    <h3> Hello, I am {props.name}, and I am {props.age} </h3>
    )
}
export default User;