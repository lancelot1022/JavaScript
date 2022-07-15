//JS Homework 8

class Person
{
    constructor(firstName, lastName, gender, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
}

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

const txtFirstName = document.getElementById("inputFirstName");
const txtLastName = document.getElementById("inputLastName");
const txtGender = document.getElementById("inputGender");
const txtAge = document.getElementById("inputAge");
const tblPersonBody = document.querySelector(".persons-table").getElementsByTagName("tbody")[0];

var persons = [];
addPerson("Angelo","Manalili","Male",27);
addPerson("Kelvin","Malonzo","Male",29);
addPerson("Eduard","Lu","Male",28);
addPerson("Arci","Munoz","Female",28);

var btnDeletePerson = document.createElement("button");
btnDeletePerson.innerHTML = "Delete";
btnDeletePerson.classList.add("btn");
btnDeletePerson.classList.add("btn-danger");
btnDeletePerson.classList.add("btn-sm");

function generatePersonsTable()
{

    for(let x = 0; x < persons.length; x++)
    {
        let tblRow = tblPersonBody.insertRow(x);

        for(let y = 0; y < 5; y++)
        {
            let tblCell = tblRow.insertCell(y);
        }
    }

    for(let i = 0; i < persons.length; i++)
    {
        tblPersonBody.rows[i].cells[0].innerHTML = persons[i].firstName;
        tblPersonBody.rows[i].cells[1].innerHTML = persons[i].lastName;
        tblPersonBody.rows[i].cells[2].innerHTML = persons[i].gender;
        tblPersonBody.rows[i].cells[3].innerHTML = persons[i].age;
        tblPersonBody.rows[i].cells[4].appendChild(btnDeletePerson.cloneNode(true)).addEventListener("click", onDeletePerson);
    }

}

function clearTable()
{
    while(tblPersonBody.hasChildNodes())
    {
        tblPersonBody.removeChild(tblPersonBody.firstChild);
    }
}

//onLoad()
generatePersonsTable();

function onAddPerson()
{
    var firstNameVal = txtFirstName.value;
    var lastNameVal = txtLastName.value;
    var genderVal = txtGender.value;
    var ageVal = txtAge.value;

    console.log(firstNameVal, lastNameVal, genderVal, ageVal);
    addPerson(firstNameVal, lastNameVal, genderVal, ageVal);
    
    clearTable();
    generatePersonsTable();
}

function onDeletePerson()
{
    
    let deleteRow = this.parentNode.parentNode;
    let deleteRowIndex = deleteRow.rowIndex -1;
    
    deletePerson(deleteRowIndex);
    clearTable();
    generatePersonsTable();   
}

function onCancel()
{
    const txtClear = "";

    txtFirstName.value = txtClear;
    txtLastName.value = txtClear;
    txtGender.value = txtClear;
    txtAge.value = txtClear;

}