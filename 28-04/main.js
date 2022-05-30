const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const email = document.querySelector('#email')
const btn = document.querySelector('#btn')

btn.addEventListener('click', function (e){
    e.preventDefault()
    console.log(`Mi nombre es ${name.value} ${surname.value} y mi correo es ${email.value}`)
})