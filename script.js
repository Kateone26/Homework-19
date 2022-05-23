document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault();

    let errors = {};
    let form = event.target;

    // username
    
    let username = document.getElementById('username').value;

    if (username.length < 4){
        errors.username = '*Username must contain at least 4 characters'
    }

    if (username == ''){
        errors.username = '*username can not be empty'
    }



    // email

    let email = document.getElementById('email').value;
    if(email == ''){
        errors.email = '*Email can not be empty';
    }


    // password
    let password = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;

    if (password!=password2 ){
        errors.password = '*passwords do not match'
        errors.password2 = '*passwords do not match';

    }

    if (password.length < 8){
        errors.password = '*Password must contain at least 8 characters'
    }

    if (password == ''){
        errors.password = '*Password can not be empty'
    }

    if (password2.length < 8){
        errors.password2 = '*Password must contain at least 8 characters'
    }

    if (password2 == ''){
        errors.password2 = '*Password can not be empty'
    }




    // checkbox

    let agree = document.getElementById('checkagree').checked;

    if (!agree ){
        errors.agree = '*you must agree terms and conditions'
    }

    // radio
    let age = false;
    form.querySelectorAll('[name = "age"]').forEach(element => {
        if (element.checked){
            age =true;
        }
    });
    if (age == false){
        errors.age = '*please select your age'
    }

    console.log(errors);

    form.querySelectorAll('.error-text').forEach(item =>{
        item.innerHTML = ' ';

    })

    for (let item in errors){
        console.log(item);
        let errorspan = document.getElementById('error_'+ item);

        if (errorspan){
            errorspan.textContent = errors[item];
        }
    }

    if(Object.keys(errors).length == 0){
        form.submit();
    }


    
    
})

// show/hide password

let passwordshow = document.querySelector('.pass')
let toggleiconeye = document.getElementById('toggleicon');

showhidepassword = ()=>{
    if(passwordshow.type == "password"){
        passwordshow.setAttribute('type', 'text');
        toggleiconeye.classList.add('fa-eye-slash');
    } else{
        toggleiconeye.classList.remove('fa-eye-slash');
        passwordshow.setAttribute('type', 'password');
    }
}

toggleiconeye.addEventListener('click', showhidepassword);


let passwordshow2 = document.querySelector('.pass2')
let toggleiconeye2 = document.getElementById('toggleicon2');

showhidepassword2 = ()=>{
    if(passwordshow2.type == "password"){
        passwordshow2.setAttribute('type', 'text');
        toggleiconeye2.classList.add('fa-eye-slash');
    } else{
        toggleiconeye2.classList.remove('fa-eye-slash');
        passwordshow2.setAttribute('type', 'password');
    }
}

toggleiconeye2.addEventListener('click', showhidepassword2);







// email validation

function validation(){
    let email = document.getElementById('email').value;
    let spantext = document.getElementById('error_email');
    let emailstricture = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.match(emailstricture)) {
        spantext.innerHTML = 'valid';
        spantext.style.color = 'green'
    } else{
        spantext.innerHTML = 'ivalid';
        spantext.style.color = 'red'
    }
}



