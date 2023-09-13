const users = [
    { name: 'Eva', age: 35, score: 56 },
    { name: 'Bob', age: 30, score: 92 },
    { name: 'Alice', age: 25, score: 85 },
    { name: 'David', age: 22, score: 68 },
    { name: 'Charlie', age: 29, score: 79 },
];

const topScorers = users.filter(user => {
    return user.score >= 80;
}).map(user => {
    return user.name;
}).sort();

console.log(topScorers);