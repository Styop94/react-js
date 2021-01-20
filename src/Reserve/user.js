function User(props) {
    // console.log('props', props)

    return (
        <h3> Hello, I am {props.name}, {props.surname}and I am {props.age} </h3>

    )
}
// class Animal {
//     sleep = () => "slepping...";
//     eat = () => "eating...";
//     run = () => "runing...";
// }


// class Dog extends Animal {
//     constructor(name, age) {
//         super();
//         this.name = name;
//         this.age = age;
//     }

//     greeting = () => {
//         return `Barev, I am ${this.name}`;
//     }
// }

// let dog = new Dog("Marly", 5);
// console.log(dog);
// // console.log(dog.greeting());

// class Cat extends Animal {
//     constructor(name, color) {
//         super();
//         this.name = name;
//         this.color = color;
//     }
// }
// const cat = new Cat('Kitty', 'white');
// console.log(cat);


export default User;


