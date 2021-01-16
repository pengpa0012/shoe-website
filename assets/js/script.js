

const range = document.querySelector('input[type="range"]')
const shoes = document.querySelectorAll('.shoe')
const overlay = document.querySelector('.overlay')
const closeBox = document.querySelector('[data-close]')
const box  = document.querySelector('.box')


shoes.forEach(shoe => {
    shoe.addEventListener('click', e =>{
        box.classList.toggle('active')
        overlay.classList.toggle('active')
        const img = e.target.src
        const boxImg = box.querySelector('.place-img')   
        boxImg.src = img
        boxImg.classList.add('w-50')
        boxImg.style.filter = 'hue-rotate(0deg)'

        range.addEventListener('input', ()=>{
            boxImg.style.filter = `hue-rotate(${range.value}deg)`
            console.log(range.value)
        })       
    })
    
    
})

overlay.addEventListener('click', ()=>{
    box.classList.toggle('active')
    overlay.classList.toggle('active')
    range.value = 0
})

closeBox.addEventListener('click', ()=>{
    box.classList.toggle('active')
    overlay.classList.toggle('active')
    range.value = 0
})