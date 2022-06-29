const firstName = document.querySelector('#name');
const lastName = document.querySelector('#last');
const country = document.querySelector('#country');
const subject = document.querySelector('#subject');
const firstNameError = document.querySelector('#display-name');
const lastNameError = document.querySelector('#display-last');
const modal = document.getElementsByClassName('modal')[0];




const blurHandler = (id) => {
    if(id == 'name'){
        if(firstName.value.length <= 3){
            firstNameError.classList.add('invalid')
            firstName.classList.add('input-invalid')
        }else{
            firstNameError.classList.remove('invalid')
            firstName.classList.remove('input-invalid')

        }
    }else{
        if(lastName.value.length <= 3){
            lastNameError.classList.add('invalid')
            lastName.classList.add('input-invalid')

        }else{
            lastNameError.classList.remove('invalid')
            lastName.classList.remove('input-invalid')

        }
    }
}


const submitHandler = (event) => {
    event.preventDefault()
    const user = {
        firstName : firstName.value ,
        lastName : lastName.value ,
        country : country.value ,
        subject : subject.value
    }
    
    if(firstName.value.length <= 3 || lastName.value.length <= 3){
        alert('ERORR! please enter your information')
    }else{
        localStorage.setItem('userInfo' , JSON.stringify(user));
        modal.style.display='flex'
        setTimeout(()=>{
           location.reload()
        } ,8000)
    }
}

window.onclick = function (event){
    if(event.target==modal){
        modal.style.display='none'
        location.reload()
    }
}