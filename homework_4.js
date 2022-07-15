//JS Homework 4
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
        console.log("\n");
    }
}

let person1 = new Person("Alisaie", "Leveilleur", "Female", 16);
let person2 = new Person("Yshtola", "Rhul", "Female", 23);
let person3 = new Person("Thancred", "Waters", "Male", 32);
let person4 = new Person("Alphinaud", "Leveilleur", "Male", 15);
let person5 = new Person("Urianger", "Augurelt", "Male", 36);

let personsArray = [person1, person2, person3, person4, person5];

personsArray.forEach(FilterPerson)
{
}

function FilterPerson(person)
{
    if(person.age >= 18)
    {
        let displayedGender = "Female";
        switch(displayedGender)
        {
            case person.gender:
                person.showInfo();
                break;
            default:
                break;
        }
    }
    else
    {
    }
}