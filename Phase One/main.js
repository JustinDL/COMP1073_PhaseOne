
let button1 = document.querySelector('.add');
let option1 = document.querySelector('.listItem');
let div1 = document.querySelector('div');


button1.onclick = addToList;


// function to add items to the list
function addToList(){

    // value of initial input
    let text1 = option1.value;



    // creates new input
    let newInput = document.createElement('input');
    // input is checkbox, has a value of the text above but that was because I assumed value was the text field now it is for the eventlistener. ID is for the label
    newInput.type = 'checkbox';
    newInput.value = text1;
    newInput.id = 'list';

    // create label for the checkbox since it seems it has to be that way?
    let label = document.createElement('label');
    label.for = 'list';
    label.textContent = text1;


    // creates a delete button which should be targetable later
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.class = 'Delete';

    // apply event listener before creation. this kind of makes sense now
    newInput.addEventListener('change', crossOut);
    deleteButton.addEventListener('click', deleteItem);

    // appends all created elements to the div the list resides in
    div1.appendChild(label);
    div1.appendChild(newInput);
    div1.appendChild(deleteButton);

}


// function runs when input is changed
function crossOut(e){


    // target checkbox
    let checked = e.target;
    // target element before checkbox, always the label
    let toCross = checked.previousElementSibling;
    // set class to crossed to apply css. This is confusing because javascript stops offering hints as if .setAttribute isn't an option
    toCross.setAttribute('class', 'crossed');
    
    // this seems roundabout but target the delete button so I can append all 3 to the bottom one at a time.
    // I feel like there should be a way for me to wrap all 3 elements inside 1. like with a list item but the code didn't actually specifically call for one so I'm afraid to add that
    let buttonAfter = checked.nextElementSibling;

    // append all pieces of the to-do item to the bottom of the div
    div1.appendChild(toCross);
    div1.appendChild(checked);
    div1.appendChild(buttonAfter);
}

function deleteItem(e){

    // this seems like again the worst possible way, probably because I didn't wrap the items in a li
    // targeting the 3 desired elements nearest the button clicked
    let button = e.target;
    let checkBox = button.previousElementSibling;
    let label = checkBox.previousElementSibling;

    // removes targeted above from parent div
    div1.removeChild(button);
    div1.removeChild(checkBox);
    div1.removeChild(label);

}
