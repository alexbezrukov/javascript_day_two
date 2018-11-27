let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h1')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelectorAll('.contactform_phone')[1],
    mailInput = document.querySelectorAll('.contactform_mail')[1],
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close'),
    textArea = document.getElementsByName('message')[0],
    
    overlay = document.querySelector('.overlay')
    thanks = document.querySelector('.thanks'),
    submit = document.querySelectorAll('button')[1];
    

let username = prompt('Как Ваше имя', "Андрей Иванович"),
    tel = prompt('Ваш номер телефона', "+38(097)564-09-00"),
    email = prompt("Введите e-mail", "info@ukr.net");

    nameInput.value = username,
    phoneInput.value = tel,
    mailInput.value = email;

    receiveBtn.addEventListener("click", function(){
        modal.style.display = "block"
    });


    closeBtn.addEventListener("click", function(){
        modal.style.display = "none"
    });

    window.addEventListener("keydown", function(e){
        if(e.keyCode == 27){
            modal.style.display = "none"
        }
    });


    submit.addEventListener("click", function(){
        if(nameInput.value.length > 0 && mailInput.value.length > 0 && phoneInput.value.length > 0){
            modal.style.display = "none"
            overlay.style.display = "block"
            thanks.style.display = "block"
        }
         else {
             alert("Не все поля заполнены")
         }
        setTimeout(() => {
            overlay.style.display = "none"
            thanks.style.display = "none"
        },2000)
    });

    nameInput.addEventListener("input", function(){
        
        textArea.value = "Меня зовут" + nameInput.value + ". И я хочу спросить:";

        if(nameInput.value == ""){
            textArea.value = ""
        }
    });


    

  