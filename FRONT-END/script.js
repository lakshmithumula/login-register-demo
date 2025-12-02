const container=document.querySelector('.container');
const Register=document.querySelector('.btn-register');
const Login=document.querySelector('.btn-login')

Register.addEventListener('click',() => {
    container.classList.add('active');

})

Login.addEventListener('click',() => {
    container.classList.remove('active');

})
