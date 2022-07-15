//JS Homework 6

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
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}

var persons = [];

let addPerson = (firstName, lastName, gender, age) =>
{
    let newPerson = new Person(firstName,lastName,gender,age);
    persons.push(newPerson);
}

let deletePerson = (personIndex) =>
{
    persons.splice(personIndex,1);
    return persons;
}

let showAllPersons = () =>
{
        for(let i = 0; i < persons.length; i++)
        {
            console.log("-----------------------------------------")
            persons[i].showInfo();
        }
}

let addPersons = (...personsToAdd) => personsToAdd.forEach(arrIndex => persons.push(arrIndex));

let deletePersons = (...personsToRemove) =>
{
    var arrFiltered  = persons.filter(
        function(ogArr)
        {
            return personsToRemove.filter(
                function(neoArr)
                {
                    return ogArr.firstName == neoArr.firstName &&
                        ogArr.lastName == neoArr.lastName &&
                        ogArr.gender == neoArr.gender &&
                        ogArr.age == neoArr.age;
                }).length == 0
        });

    persons = [...arrFiltered];

}

addPerson("Angelo","Manalili","Male",27);
addPerson("Kelvin","Malonzo","Male",29);
addPerson("Eduard","Lu","Male",28);
addPerson("Arci","Munoz","Female",28);
showAllPersons();
deletePerson(1);
console.log("\n");
showAllPersons();

let person1 = new Person("Allan", "Tolentino", "Male", 29);
let person2 = new Person("Carlo", "Marquez", "Male", 29);
let person3 = new Person("Mia", "Gallano", "Female", 26);

addPersons(person1,person2,person3);
console.log("\n");
showAllPersons();

let toDeletePerson1 = new Person("Angelo","Manalili","Male",27);
let toDeletePerson2 = new Person("Eduard","Lu","Male",28);
let toDeletePerson3 = new Person("Arci","Munoz","Female",28);

deletePersons(toDeletePerson1,toDeletePerson2,toDeletePerson3);
console.log("\n");
showAllPersons();
