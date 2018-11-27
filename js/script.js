let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h1')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelectorAll('.contactform_phone')[1],
    mailInput = document.querySelectorAll('.contactform_mail')[1],
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close'),
    textArea = document.getElementsByName('message')[0],
    small = document.querySelector('div h3'),
    overlay = document.querySelector('.overlay')
    thanks = document.querySelector('.thanks'),
    submit = document.querySelector('button');
    

let username = prompt('Как Ваше имя', "Андрей Иванович"),
    tel = prompt('Ваш номер телефона', "+38(097)564-09-00"),
    email = prompt("Введите e-mail", "info@ukr.net");

    nameInput.value = username,
    phoneInput.value = tel,
    mailInput.value = email;

    function hover(){
        heading.textContent = "Привет"
    }
    

    heading.addEventListener("mouseenter", hover);
    
    heading.addEventListener("mouseleave",  function (){
        heading.textContent = "Все включено"
    });


    receiveBtn.addEventListener("click", function(){
        modal.style.display = "block"
    });

    submit.addEventListener("click", function(){
        modal.style.display = "none"
        overlay.style.display = "block"
        thanks.style.display = "block"

        setTimeout(() => {
            overlay.style.display = "none"
            thanks.style.display = "none"
        },2000)
    });

    window.addEventListener("keydown", function(e){
        if(e.keyCode == 27){
            modal.style.display = "none"
        }
    });

    nameInput.addEventListener("input", function(){
        
        textArea.value = "Меня зовут" + nameInput.value + ". И я хочу спросить:";

        if(nameInput.value == ""){
            textArea.value = ""
        }
    });




  