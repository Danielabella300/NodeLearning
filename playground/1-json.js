const fs = require('fs');

const person = 
{
    Name: 'Daniel John Jabines Abella',
    Planet: 'Earth',
    Age: 26
}

const personJSON = JSON.stringify(person);
console.log(personJSON);

const parsedData = JSON.parse(personJSON);
console.log(parsedData.Name);
console.log(parsedData.Planet);
console.log(parsedData.Age);


fs.writeFileSync('1-json.json', personJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)
console.log(data.age);