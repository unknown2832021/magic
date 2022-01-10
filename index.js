let enter       = document.querySelector('.enter')
let message     = document.querySelector('.message')
let welcome     = document.querySelector('.welcome')

let name1       = document.querySelector('.name1')
let name2       = document.querySelector('.name2')
let pass1       = document.querySelector('.pass1')
let pass2       = document.querySelector('.pass2')
let text        = document.querySelector('.text')
let main        = document.querySelector('.main')

let errname1    = document.querySelector('.errname1') 
let errname2    = document.querySelector('.errname2') 
let errpass1    = document.querySelector('.errpass1') 
let errpass2    = document.querySelector('.errpass2')
let passConfirm = document.querySelector('.passConfirm') 

let submit  = document.querySelector('.submit')


enter.addEventListener('click',function(){
    main.style.display='block'
    message.style.display='none'
})

submit.addEventListener('click',function(){
  if(name1.value == ''){
      errname1.style.display='block'
      errname1.innerHTML='Please enter your First Name'
  } else {
      errname1.style.display='none'
  }
  if(name2.value == ''){
    errname2.style.display='block'
    errname2.innerHTML='Please enter your Last Name'
  } else {
    errname2.style.display='none'
  }
  if(pass1.value == ''){
    errpass1.style.display='block'
    errpass1.innerHTML='Please enter your Password'
  } else {
    errpass1.style.display='none'
  }
  if(pass2.value == ''){
    errpass2.style.display='block'
    errpass2.innerHTML='Please Confirm your Password'
  } else {
    errpass2.style.display='none'
  }
  if(pass1.value != pass2.value && pass1.value != '', pass2.value != ''){
      passConfirm.style.display='block'
      passConfirm.innerHTML='Password should match to continue'
  } else{
      passConfirm.style.display='none'
  }
//   =============================== ======================
  if(name1.value != '', name2.value != '', pass1.value != '', pass2.value != '' && pass1.value == pass2.value){
      main.style.display='none'
      text.style.display='block'
      welcome.innerHTML= 'Welcome you ' + name1.value + ' ' + name2.value
  }
})