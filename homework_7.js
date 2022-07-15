//JS Homework_7

function onLoad()
{
    const gender = '.action-history .default-gender';
    const genderList = document.querySelectorAll(gender);
    let arrGender = Array.from(genderList);
    arrGender.forEach(arrIndex =>
    {
        if(arrIndex.innerText == "Male")
        {
            arrIndex.style.color = "blue";
        }
        else if(arrIndex.innerText == "Female")
        {
            arrIndex.style.color = "red";
        }
        else
        {
        }
    });

    const age = 'default-age';
    const ageList = document.getElementsByClassName(age);
    let arrAge = Array.from(ageList);
    arrAge.forEach(arrIndex => 
    {
        if (arrIndex.innerText < 18)
        {
            arrIndex.style.color = "green";
        }
    });

    const spanTag = "span";
    const spanList = document.getElementsByTagName(spanTag);
    let arrSpan = Array.from(spanList);
    arrSpan.forEach(arrIndex =>
    {
        arrIndex.style.fontWeight = "bold";
    });

}

function displayFirstName()
{
    const inputFirstName = "inputFirstName";
    const spanFirstName = "spanDisplayFirstName"
    const txtFirstName = document.getElementById(inputFirstName);
    const displayFirstName = document.getElementById(spanFirstName);
    displayFirstName.innerHTML = "<b>"+txtFirstName.value+"</b>";
}

function displayLastName()
{
    const inputLastName = "inputLastName";
    const spanLasttName = "spanDisplayLastName"
    const txtLastName = document.getElementById(inputLastName);
    const displayLastName = document.getElementById(spanLasttName);
    displayLastName.innerHTML = "<b>"+txtLastName.value+"</b>";
}

function displayGender()
{
    const inputGender = "inputGender";
    const spanGender = "spanDisplayGender"
    const txtGender = document.getElementById(inputGender);
    const displayGender = document.getElementById(spanGender);
    displayGender.innerHTML = "<b>"+txtGender.value+"</b>";
}

function displayAge()
{
    const inputAge = "inputAge";
    const spanAge = "spanDisplayAge"
    const txtAge = document.getElementById(inputAge);
    const displayAge = document.getElementById(spanAge);
    if(txtAge.value < 18)
    {
        displayAge.style.color = "green";
    } else {
        displayAge.style.color = "black";
    }
    displayAge.innerHTML = "<b>"+txtAge.value+"</b>";
}
