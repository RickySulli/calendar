//display current date
let currentDay = document.getElementById('currentDay').innerHTML= moment().format('MMMM Do YYYY, h a');

//to save the user's input of text into each time slot....

var input_textarea0 = document.querySelector('#task0');
var save_button0 = document.querySelector('#saveid0');
//retrieves previously save text to display
input_textarea0.value = localStorage.getItem('content0');
//when the Save button is clicked, store the input of the textarea
saveid0.addEventListener('click', updateOutput0);
//sets the input of text area into local storage
function updateOutput0() {
    localStorage.setItem('content0', input_textarea0.value);
};

var input_textarea1 = document.querySelector('#task1');
var save_button1 = document.querySelector('#saveid1');
input_textarea1.value = localStorage.getItem('content1');
saveid1.addEventListener('click', updateOutput1);
function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
};

var input_textarea2 = document.querySelector('#task2');
var save_button2 = document.querySelector('#saveid2');
input_textarea2.value = localStorage.getItem('content2');
saveid2.addEventListener('click', updateOutput2);
function updateOutput2() {
    localStorage.setItem('content2', input_textarea2.value);
};

var input_textarea3 = document.querySelector('#task3');
var save_button3= document.querySelector('#saveid3');
input_textarea3.value = localStorage.getItem('content3');
saveid3.addEventListener('click', updateOutput3);
function updateOutput3() {
    localStorage.setItem('content3', input_textarea3.value);
};

var input_textarea4 = document.querySelector('#task4');
var save_button4 = document.querySelector('#saveid4');
input_textarea4.value = localStorage.getItem('content4');
saveid4.addEventListener('click', updateOutput4);
function updateOutput4() {
    localStorage.setItem('content4', input_textarea4.value);
};

var input_textarea5 = document.querySelector('#task5');
var save_button5 = document.querySelector('#saveid5');
input_textarea5.value = localStorage.getItem('content5');
saveid5.addEventListener('click', updateOutput5);
function updateOutput5() {
    localStorage.setItem('content5', input_textarea5.value);
};

var input_textarea6 = document.querySelector('#task6');
var save_button6 = document.querySelector('#saveid6');
input_textarea6.value = localStorage.getItem('content6');
saveid6.addEventListener('click', updateOutput6);
function updateOutput6() {
    localStorage.setItem('content6', input_textarea6.value);
};

var input_textarea7 = document.querySelector('#task7');
var save_button7 = document.querySelector('#saveid-7');
input_textarea7.value = localStorage.getItem('content7');
saveid7.addEventListener('click', updateOutput7);
function updateOutput7() {
    localStorage.setItem('content7', input_textarea7.value);
};

var input_textarea8 = document.querySelector('#task8');
var save_button8 = document.querySelector('#saveid8');
input_textarea8.value = localStorage.getItem('content8');
saveid8.addEventListener('click', updateOutput8);
function updateOutput8() {
localStorage.setItem('content8', input_textarea8.value);
};

var now= new Date().getHours();

if (now > 9) {
    $("#task0").addClass("past");
	}	
    else if (now >= 9 && now < 10) {
        $("#task0").addClass("present");
	}
    else if (now < 9) {
        $("#task0").addClass("future");
    }
if (now > 10){
    $("#task1").addClass("past");
}    
    else if (now>=10 && now < 11){
        $("#task1").addClass("present");
    }
    else if (now < 10){
        $("#task1").addClass("future");
    }
if (now >11){
    $("#task2").addClass("past");
}
    else if (now >= 11 && now <12){
        $("#task2").addClass("present");
    }
    else if (now < 11){
        $("#task2").addClass("future");
    }
if (now >12){
    $("#task3").addClass("past");
}
    else if(now >= 12 && now < 13){
        $("#task3").addClass("present");
    }
    else if (now < 12){
        $("#task3").addClass("future");
    }
if (now > 13)
        $("#task4").addClass("past");
    else if(now >= 13 && now < 14){
        $("#task4").addClass("present");
    }
    else if(now < 13){
        $("#task4").addClass("future");
    }
if (now > 14)
        $("#task5").addClass("past");
    else if(now >= 14 && now < 15){
        $("#task5").addClass("present");
    }
    else if(now < 14){
        $("#task5").addClass("future");
    }
if (now > 15)
        $("#task6").addClass("past");
    else if(now >= 15 && now < 16){
        $("#task6").addClass("present");
    }
    else if(now < 15){
        $("#task6").addClass("future");
    }
if (now > 16)
        $("#task7").addClass("past");
    else if(now >= 16 && now < 17){
        $("#task7").addClass("present");
    }
    else if(now < 16){
        $("#task7").addClass("future");
    }
if (now > 17)
        $("#task8").addClass("past");
    else if(now >= 17 && now < 18){
        $("#task8").addClass("present");
    }
    else if(now < 17){
        $("#task8").addClass("future");
    }

    

