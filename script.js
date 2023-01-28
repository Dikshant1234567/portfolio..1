let ham = document.getElementById('ham')
let left = document.getElementsByClassName('left')[0]
let cross = document.getElementById('cross')




ham.addEventListener('click', ()=>{
    left.classList.toggle('leftgo')  
})

cross.addEventListener('click', ()=>{
    left.classList.toggle('leftgo')  
})







