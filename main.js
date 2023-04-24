//initialize the variable
const burgOfTheDay = ['New Bacon-Ings, the Child Molester--comes with candy','Foot Feta-Ish Burger','Tunami','Mission A-Corn-Plished Burger, Pepper Don\t Preach, Rest In Peas Burger','Fig-Eta Bout It Burger, Chever Which Way But Loose Burger, The Rocquefort Files Burger, These Collards Don\t Run Burger', 'Totally Radish Burger'];


//grab id
document.getElementById('ep1').onclick = burg0;
document.getElementById('ep2').onclick = burg1;
document.getElementById('ep3').onclick = burg2;
document.getElementById('ep4').onclick = burg3;
document.getElementById('ep5').onclick = burg4;
document.getElementById('ep6').onclick = burg5;

//run the functions
function burg0(){
    document.querySelector('.name').innerText = burgOfTheDay[0];
}

function burg1(){
    document.querySelector('.name').innerText = burgOfTheDay[1];
}

function burg2(){
    document.querySelector('.name').innerText = burgOfTheDay[2];
}

function burg3(){
    document.querySelector('.name').innerText = burgOfTheDay[3];
}

function burg4(){
    document.querySelector('.name').innerText = burgOfTheDay[4];
}

function burg5(){
    document.querySelector('.name').innerText = burgOfTheDay[5];
}


