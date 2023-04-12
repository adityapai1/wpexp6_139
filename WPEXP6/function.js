
const p1 = document.getElementById('magic')
const p2 = document.getElementById('acc')
const image = document.getElementById('i1')
const title = document.getElementById('title')
const right = document.getElementById('right')
const pwd2 = document.getElementById('pwd2')

function pmt(){
    alert("Page Loaded Successfully \n Is the Money Loaded Successfully?")
}

function expose(){
    title.innerHTML = ` IS ${pwd2.value} your password?!`
}

function money(){

    var audio = new Audio('Herecomes_money.mp3');
    audio.play();
    setTimeout(function() {
        audio.pause();
        audio.currentTime = 0;
      }, 10000);

}
function message(){
        alert("THIS IS A CLONED \n WEBSITE DONT ENTER \nYOUR TRUE CREDENTIALS HERE!!!")
    }

function vanish(){
    p2.value ="This website is infected!!!!"
    p1.innerHTML ="Magic"
    setTimeout("n2()" , 5000)

}

function n2(){
    p1.innerHTML =""
    p2.value = ""
}

function meme(){

    image.style.visibility="visible"
    title.style.boxShadow="-5px 2px 50px red"
    right.style.boxShadow="-5px 2px 50px red"
    setTimeout("normal()" , 7000 );

}

function normal(){

    image.style.visibility="hidden"
    title.style.boxShadow="-5px 2px 50px wheat"
    right.style.boxShadow="-5px 2px 50px wheat"
    
}






// var jform = document.getElementById("myform")

// jform.addEventListener("submit", function(event){

//     var acc = document.getElementById("acc")
//     var pwd1 = document.getElementById("pwd1")
//     var pwd2 = document.getElementById("pwd2")
//     var email = document.getElementById("email")
//     var err1 = document.getElementById("err1")
//     var err2 = document.getElementById("err2")
//     var err3 = document.getElementById("err3")
//     var err4 = document.getElementById("err4")

//     var accreg = /^[0-9]{12}$/
//     var pwdreg = /^[a-zA-Z\S][a-zA-Z\s\S]{7,20}$/
//     var emailreg = /^[a-zA-Z\.]+\@[a-z]+\.[a-z]+$/

//     if(!accreg.test(acc.value)){

//         err1.innerHTML = "Buddy , its an invalid account number..."
//         acc.style.borderColor="red"
//         event.preventDefault()
//     }
//     if(!emailreg.test(email.value)){

//         err4.innerHTML = "Buddy , its an invalid email..."
//         email.style.borderColor="red"
//         event.preventDefault()
//     }

//     if(!pwdreg.test(pwd1.value)){

//         err2.innerHTML = "Buddy , its a weak password like you..."
//         pwd1.style.borderColor="red"
//         event.preventDefault()
//     }

//     if(pwd1.value !== pwd2.value){

//         err3.innerHTML = "Buddy , alteast copy to thik se kar."
//         event.preventDefault();
//     }


// })

// 