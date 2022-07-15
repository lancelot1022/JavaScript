class ToDo {
    constructor(personIndex, item, status){
        this.personIndex = personIndex;
        this.item = item;
        this.status = status;
    }
}

//Returns an array of Person from localstorage of browser
const getPersons = () => {
    return JSON.parse(localStorage.getItem("persons"));
}

//Updates a the existing set of To Do Items in the localstorage and returns the updated list.
//Parameter - toDoItems => Array
const setToDoItems = (toDoItems) => {
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
    return getToDoItems();
}

//Returns an array of To Do Items from localstorage of browser
const getToDoItems = () => {
    let toDoItems = JSON.parse(localStorage.getItem("toDoItems"));
    
    if(!toDoItems){
        toDoItems = [];
        setToDoItems(toDoItems);
        return toDoItems;
    }

    return toDoItems;
}

//================  Added code for homework ================

//Create Person dropdown
const personDropDownContainer = document.querySelector(".person-select");
const personDropDown = document.createElement("select");
personDropDown.id = "personDropDown";
personDropDown.classList.add("dropdown-header");
personDropDown.innerHTML = "<option value='default'>--Select a Person--</option>";
personDropDown.onchange = generateToDoTable;
personDropDownContainer.prepend(personDropDown);

//Set dropdown values from getPersons
var arrPersons = getPersons();

for(let i = 0; i < arrPersons.length; i++)
{
    let selectDisplayName = arrPersons[i].firstName+" "+arrPersons[i].lastName;
    let personSelect = document.createElement("option");
    personSelect.textContent = selectDisplayName;
    personSelect.value = i;
    personDropDown.appendChild(personSelect);
}

//Create To Do Form
const toDoContainer = document.querySelector(".form-container");
const txtToDoName = document.createElement("input");
txtToDoName.id = "txtToDo"
txtToDoName.classList.add("form-control");
txtToDoName.placeholder = "To Do Item Name";

const toDoDropDown = document.createElement("select");
toDoDropDown.id = "toDoDropDown";
toDoDropDown.classList.add("dropdown-header");
toDoDropDown.innerHTML = "<option value='default'>--Select a Status--</option>";

const toDoStatus = ["Not Yet Started", "On-going", "Done"];
toDoStatus.forEach(function(arrIndex) {
    statusSelect = document.createElement("option");
    statusSelect.textContent = arrIndex;
    statusSelect.value = arrIndex;
    toDoDropDown.appendChild(statusSelect);
});

const btnSave = document.createElement("button");
btnSave.innerHTML = "Save";
btnSave.classList.add("btn");
btnSave.classList.add("btn-primary");
btnSave.classList.add("btn-sm");
btnSave.onclick = onSave;

const btnCancel = document.createElement("button");
btnCancel.innerHTML = "Cancel";
btnCancel.classList.add("btn");
btnCancel.classList.add("btn-warning");
btnCancel.classList.add("btn-sm");
btnCancel.onclick = onCancel;

const btnToDoUpdate = document.createElement("button");
btnToDoUpdate.innerHTML = "Save";
btnToDoUpdate.classList.add("btn");
btnToDoUpdate.classList.add("btn-info");
btnToDoUpdate.classList.add("btn-sm");
btnToDoUpdate.style.margin = "5px";

const btnDeleteToDo = document.createElement("button");
btnDeleteToDo.innerHTML = "Delete";
btnDeleteToDo.classList.add("btn");
btnDeleteToDo.classList.add("btn-danger");
btnDeleteToDo.classList.add("btn-sm");

toDoContainer.appendChild(txtToDoName);
toDoContainer.appendChild(toDoDropDown);
toDoContainer.appendChild(btnSave);
toDoContainer.appendChild(btnCancel);

function generateToDoTable()
{
    const tbltoDoBody = document.querySelector(".todo-items-table-container").getElementsByTagName("tbody")[0];
    tbltoDoBody.innerHTML = "";
    let arrToDo = getToDoItems();
    let personToDo = arrToDo.filter(x => x.personIndex === personDropDown.value);
    let toDoIndex = 0;

    personToDo.forEach((toDo, i) =>
    {
        let row = tbltoDoBody.insertRow(-1);
        let btnRadiotoDo = document.createElement("input");
        btnRadiotoDo.setAttribute("type", "radio");
        btnRadiotoDo.name = "toDo"+i;

        let colToDoItem = row.insertCell(0);
        let colStatusNotYetStarted = row.insertCell(1);
        let colStatusOngoing = row.insertCell(2);
        let colStatusDone = row.insertCell(3);
        let colActionCell = row.insertCell(4);

        colStatusNotYetStarted.style.textAlign = "center";
        colStatusOngoing.style.textAlign = "center";
        colStatusDone.style.textAlign = "center";
        colStatusDone.style.textAlign = "center";
        colActionCell.style.textAlign = "center";

        colToDoItem.innerHTML = toDo.item;
        colStatusNotYetStarted.appendChild(btnRadiotoDo.cloneNode(true)).value = toDoStatus[0];
        colStatusOngoing.appendChild(btnRadiotoDo.cloneNode(true)).value = toDoStatus[1];
        colStatusDone.appendChild(btnRadiotoDo.cloneNode(true)).value = toDoStatus[2];
        colActionCell.appendChild(btnToDoUpdate.cloneNode(true)).addEventListener("click", onToDoUpdate);
        colActionCell.appendChild(btnDeleteToDo.cloneNode(true)).addEventListener("click", onToDoDelete);

        let selectedToDO = document.querySelector('[name="'+btnRadiotoDo.name+'"][value="'+toDo.status+'"]');
        selectedToDO.checked = true;

        toDoIndex += 1;
    });

}

function onSave()
{
    if(personDropDown.selectedIndex === 0)
    {
        window.alert("There is no selected person!");
    }
    else if(txtToDoName.value === '')
    {
        window.alert("There is no specified name!");
    }
    else if(toDoDropDown.selectedIndex === 0)
    {
        window.alert("There is no selected status!");
    }
    else
    {
        let personIndex = personDropDown.value;
        let toDoItemName = txtToDoName.value;
        let currentToDoStatus = toDoDropDown.value;
        let toDo = getToDoItems();

        window.alert("Successfully saved To Do Item " + txtToDoName.value);
        toDoDropDown.selectedIndex = 0;
        txtToDoName.value = "";

        toDo.push(new ToDo(personIndex,toDoItemName,currentToDoStatus));
        setToDoItems(toDo);
        generateToDoTable();
    }
}

function onCancel()
{
    personDropDown.selectedIndex = 0;
    toDoDropDown.selectedIndex = 0;
    txtToDoName.value = "";
}

function onToDoUpdate()
{
    let toDo = getToDoItems();
    let toDoRow = this.parentNode.parentNode;
    let toDoRowIndex = toDoRow.rowIndex -1;
    let updatedTodoStatus =  document.querySelector('[name="toDo'+toDoRowIndex+'"]:checked').value;
    let personToDo = toDo.filter(x => x.personIndex === personDropDown.value);

    personToDo[toDoRowIndex].status = updatedTodoStatus;
    setToDoItems(toDo);
    generateToDoTable();
}

function onToDoDelete()
{
    let toDo = getToDoItems();
    let toDoRow = this.parentNode.parentNode;
    let toDoName = toDoRow.firstChild.innerHTML;

    toDo.splice(toDo.findIndex(e => e.personIndex === personDropDown.value && e.item === toDoName), 1);
    setToDoItems(toDo);
    generateToDoTable();
}
// End of Homework