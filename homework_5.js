//JS Homework 5
class Person
{
    constructor(firstName, lastName, gender, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    showInfo()
    {
        console.log("Name: "+ this.firstName+ " "+ this.lastName);
        console.log("Age: "+ this.age);
        console.log("Gender: "+ this.gender);
    }
}

var persons = [];

function addPerson(firstName, lastName, gender, age)
{
    let newPerson = new Person(firstName,lastName,gender,age);

    persons.push(newPerson);
}

function deletePerson(personIndex)
{
    persons.splice(personIndex,1);

    return persons;
}

function showAllPersons()
{
    for(let i = 0; i < persons.length; i++)
    {
        console.log("-----------------------------------------")
        persons[i].showInfo();
    }
}

addPerson("Angelo","Manalili","Male",27);
addPerson("Kelvin","Malonzo","Male",29);
addPerson("Eduard","Lu","Male",28);
addPerson("Arci","Munoz","Female",28);
showAllPersons();
deletePerson(1);
console.log("\n");
showAllPersons();