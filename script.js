var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')


function validateName(){
    var name = document.getElementById('contact-name').value
    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name'
        return false
    }
    nameError.innerHTML = ''
    return true
}
function validateEmail(){
    var email = document.getElementById('contact-email').value
    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false
    }
    emailError.innerHTML = ''
    return true
}
function validateMessage(){
    var message = document.getElementById('contact-message').value
    var required=10
    var left=required-message.length

    if(left>0){
        messageError.innerHTML = 'More characters required'
        return false
    }
    messageError.innerHTML = ''
    return true
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Fix errors'
        setTimeout(function(){submitError.style.display = 'none'},3000)
        return false
    }
    submitError.innerHTML = 'Form Submited'
        setTimeout(function(){submitError.style.display = 'none'},3000)
}