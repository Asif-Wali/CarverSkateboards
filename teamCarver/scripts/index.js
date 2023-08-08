import {navbar} from '../components/navbar.js'
import {footer} from '../components/footer.js'
document.querySelector('#navbar').innerHTML=navbar()
document.querySelector('#footer').innerHTML=footer()
document.querySelector('.logo').addEventListener('click',()=>{
    location.href='./index.html'
})

const hamburger=document.querySelector('.hamburger')
const navMenu=document.querySelector('.navlinks')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})