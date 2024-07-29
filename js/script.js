const body = document.querySelector('#body')// selecting the id and append all the childrens in body


const container = document.createElement('div')//creating a div
container.classList.add("container-fluid", "text-center", "fw-bolder")//adding class to the div 
body.style = "background-image: url('https://tse1.mm.bing.net/th?id=OIP.0O_60qXDQ2cXzZA46kGZOQHaHa&pid=Api&P=0&h=180'); background-size: contain;"//adding background image to body



body.appendChild(container)//appending the container to body



const title = document.createElement('h1')//creating a h1
title.textContent = 'Calculator'//adding text to h1
title.id = 'title'//giving id to h1
title.style = "color:blue;"

container.appendChild(title)//appending the title to container

const description = document.createElement('p')//creating a p
description.textContent = 'Make It Easy'//adding text to p
description.id = 'description'//giving id to p
description.classList.add('fs-2')//adding class to p
container.appendChild(description)//appending the description to container

const calculator = document.createElement('div')//creating a div
calculator.id = 'calculator'//giving id to div
calculator.classList.add('container', 'border', 'border-success')//adding class to div
calculator.style = "background-color: orangered;"
container.appendChild(calculator)//appending the calculator to container

const result = document.createElement('input')//creating a input
result.id = 'result'//giving id to input
result.type = 'text'//giving type to input
result.style = "width:75vw;"
result.classList.add('col-xs-8', 'flex-row', 'my-2', 'text-warning', 'bg-black')//adding class to input
result.addEventListener('input', (event) => {
    const value = event.target.value;
    if (value.match(/[a-zA-Z]/)) {
        alert('Alphabet not allowed');
        event.target.value = value.slice(0, -1);
    }
});

calculator.appendChild(result)//appending the result to calculator

const row1 = document.createElement('div')//creating a div
row1.classList.add('d-flex','flex-row','justify-content-center','my-3', )//adding class to div
calculator.appendChild(row1)//appending the row1 to calculator

const clearbtn = document.createElement('button')//creating a button
clearbtn.textContent = 'C'//adding text to button
clearbtn.id = 'clear'//giving id to button
clearbtn.style="width:15vw;"
clearbtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
clearbtn.addEventListener('click',() =>
    result.value=null
)
row1.appendChild(clearbtn)//appending the clearbtn to row1

const backspacebtn = document.createElement('button')//creating a button
backspacebtn.textContent = '<-'//adding text to button
backspacebtn.id = 'backspace'//giving id to button
backspacebtn.style="width:15vw;"
backspacebtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
backspacebtn.addEventListener('click',() => {
    result.value = result.value.slice(0, -1);
});
row1.appendChild(backspacebtn)//appending the backspacebtn to row1

const Dotbtn = document.createElement('button')//creating a button
Dotbtn.textContent = '.'//adding text to button
Dotbtn.id = 'dot'//giving id to button
Dotbtn.value = '.'
Dotbtn.style="width:15vw;"
Dotbtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
Dotbtn.addEventListener('click',() => {
    if (!result.value.includes('.')) {
        result.value += '.';
    }
});
row1.appendChild(Dotbtn)//appending the Dotbtn to row1

const dividebtn = document.createElement('button')//creating a button
dividebtn.textContent = '/'//adding text to button
dividebtn.id = 'divide'//giving id to button
dividebtn.value = '/'
dividebtn.style = "width:15vw;"
dividebtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
dividebtn.addEventListener('click',() => {
    if (result.value !== '') {
        result.value += '/';
    }
});
row1.appendChild(dividebtn)//appending the dividebtn to row1


const row2 = document.createElement('div')//creating a div
row2.classList.add('d-flex', 'flex-row', 'justify-content-center','my-3')//adding class to div
calculator.appendChild(row2)//appending the row2 to calculator

const sevenbtn = document.createElement('button')//creating a button
sevenbtn.textContent = '7'//adding text to button
sevenbtn.id = '7'//giving id to button
sevenbtn.value='7'
sevenbtn.style="width:15vw;"
sevenbtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
sevenbtn.addEventListener('click',() => {
    result.value += '7';
});
row2.appendChild(sevenbtn)//appending the sevenbtn to row2

const eightbtn = document.createElement('button')//creating a button
eightbtn.textContent = '8'//adding text to button
eightbtn.id = '8'//giving id to button
eightbtn.value = '8'
eightbtn.style="width:15vw;"
eightbtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
eightbtn.addEventListener('click',() => {
    result.value += '8';
});
row2.appendChild(eightbtn)//appending the eightbtn to row2

const ninebtn = document.createElement('button')//creating a button
ninebtn.textContent = '9'//adding text to button
ninebtn.id = '9'//giving id to button
ninebtn.value = '9'
ninebtn.style="width:15vw;"
ninebtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
ninebtn.addEventListener('click',() => {
    result.value += '9';
});
row2.appendChild(ninebtn)//appending the ninebtn to row2

const multiplybtn = document.createElement('button')//creating a button
multiplybtn.textContent = '*'//adding text to button
multiplybtn.id = 'multiply'//giving id to button
multiplybtn.value = '*'
multiplybtn.style="width:15vw;"
multiplybtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
multiplybtn.addEventListener('click',() => {
    if (result.value !== '') {
        result.value += '*';
    }
});
row2.appendChild(multiplybtn)//appending the multiplybtn to row2

const row3 = document.createElement('div')//creating a div
row3.classList.add('d-flex', 'flex-row', 'justify-content-center','my-3')//adding class to div
calculator.appendChild(row3)//appending the row3 to calculator


const fourbtn = document.createElement('button')//creating a button
fourbtn.textContent = '4'//adding text to button
fourbtn.id = '4'//giving id to button
fourbtn.value = '4'
fourbtn.style="width:15vw;"
fourbtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
fourbtn.addEventListener('click',() => {
    result.value += '4';
});
row3.appendChild(fourbtn)//appending the fourbtn to row3

const fivebtn = document.createElement('button')//creating a button
fivebtn.textContent = '5'//adding text to button
fivebtn.id = '5'//giving id to button
fivebtn.value = '5'
fivebtn.style="width:15vw;"
fivebtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
fivebtn.addEventListener('click',() => {
    result.value += '5';
});
row3.appendChild(fivebtn)//appending the fivebtn to row3

const sixbtn = document.createElement('button')//creating a button
sixbtn.textContent = '6'//adding text to button
sixbtn.id = '6'//giving id to button
sixbtn.value = '6'
sixbtn.style="width:15vw;"
sixbtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
sixbtn.addEventListener('click',() => {
    result.value += '6';
});
row3.appendChild(sixbtn)//appending the sixbtn to row3

const minusbtn = document.createElement('button')//creating a button
minusbtn.textContent = '-'//adding text to button       
minusbtn.id = 'subtract'//giving id to button
minusbtn.value = '-'
minusbtn.style="width:15vw;"
minusbtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
minusbtn.addEventListener('click',() => {
    result.value += '-';
});
row3.appendChild(minusbtn)//appending the minusbtn to row3


const row4 = document.createElement('div')//creating a div
row4.classList.add('d-flex', 'flex-row', 'justify-content-center','my-3')//adding class to div
calculator.appendChild(row4)//appending the row4 to calculator

const onebtn = document.createElement('button')//creating a button
onebtn.textContent = '1'//adding text to button
onebtn.id = '1'//giving id to button
onebtn.value = '1'
onebtn.style="width:15vw;"
onebtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button  
onebtn.addEventListener('click',() => {
    result.value += '1';
}); 
row4.appendChild(onebtn)//appending the onebtn to row4

const twobtn = document.createElement('button')//creating a button
twobtn.textContent = '2'//adding text to button
twobtn.id = '2'//giving id to button
twobtn.value = '2'
twobtn.style="width:15vw;"
twobtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
twobtn.addEventListener('click',() => {
    result.value += '2';
});
row4.appendChild(twobtn)//appending the twobtn to row4

const threebtn = document.createElement('button')//creating a button
threebtn.textContent = '3'//adding text to button
threebtn.id = '3'//giving id to button
threebtn.value = '3'
threebtn.style="width:15vw;"
threebtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
threebtn.addEventListener('click',() => {
    result.value += '3';
});
row4.appendChild(threebtn)//appending the threebtn to row4

const plusbtn = document.createElement('button')//creating a button
plusbtn.textContent = '+'//adding text to button
plusbtn.id = 'add'//giving id to button
plusbtn.value = '+'
plusbtn.style="width:15vw;"
plusbtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'mx-2')//adding class to button
plusbtn.addEventListener('click',() => {
    result.value += '+';
});
row4.appendChild(plusbtn)//appending the plusbtn to row4


const row5 = document.createElement('div')//creating a div
row5.classList.add('d-flex', 'flex-row', 'justify-content-center', 'my-3')//adding class to div
calculator.appendChild(row5)//appending the row5 to calculator

const zerobtn = document.createElement('button')//creating a button
zerobtn.textContent = '0'//adding text to button
zerobtn.id = 'zero'//giving id to button
zerobtn.value = '0'
zerobtn.style="width:15vw;"
zerobtn.classList.add('col-xs-1', 'btn', 'btn-secondary', 'ms-2')//adding class to button
zerobtn.addEventListener('click',() => {
    result.value += '0';
});
row5.appendChild(zerobtn)//appending the zerobtn to row5

const doublezerobtn = document.createElement('button')//creating a button
doublezerobtn.textContent = '00'//adding text to button
doublezerobtn.id = 'doublezero'//giving id to button
doublezerobtn.value = '00'
doublezerobtn.style="width:30vw;"
doublezerobtn.classList.add('col-2', 'btn', 'btn-secondary', 'mx-4', 'mx-lg-4')//adding class to button 
doublezerobtn.addEventListener('click',() => {
    result.value += '00';
}); 
row5.appendChild(doublezerobtn)//appending the doublezerobtn to row5 

const equalbtn = document.createElement('button')//creatin a button
equalbtn.textContent = '='//adding text to button
equalbtn.id = 'equal'//giving id to button
equalbtn.style = "width:15vw;"
equalbtn.value = '='
equalbtn.classList.add('btn', 'btn-secondary', 'me-2')//adding class to button
equalbtn.addEventListener('click', () => {
    if (result.value !== '') {
        result.value = eval(result.value);
    }else{
        alert('Please enter a valid expression');
    }
  
});
row5.appendChild(equalbtn)//appending the equalbtn to row5