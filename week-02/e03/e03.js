const user = {firstName: 'John', lastName: 'Doe', age: '30'};

const getUserDescription = (user) => {
    return `${user.firstName} ${user.lastName} is ${user.age} years old.`;
}

console.log(getUserDescription(user));
