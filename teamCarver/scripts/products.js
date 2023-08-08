//!global variables
let products=[]
//! importing 
import {navbar} from '../components/navbar.js'
import {footer} from '../components/footer.js'
document.querySelector('#navbar').innerHTML=navbar()
document.querySelector('#footer').innerHTML=footer()
//!rest
document.querySelector('.logo').addEventListener('click',()=>{
    location.href='./index.html'
})
const hamburger=document.querySelector('.hamburger')
const navMenu=document.querySelector('.navlinks')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
//!fetching data
let pagenumber=1
let fetchData=async(pagenumber)=>{
    try {
        let result=await fetch(`https://shy-ruby-chimpanzee-sari.cyclic.app/products?_limit=6&_page=${pagenumber}`)
        let data=await result.json()
        products=data
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()
//!appending data
let displayData=(data)=>{
    console.log(data)
    data.forEach((item)=>{
        let img=document.createElement('img')
        img.src=item.image
        let name=document.createElement('p')
        name.textContent=item.title
        let price=document.createElement('p')
        price.textContent='$'+item.price
        let div=document.createElement('div')
        div.setAttribute('class','carditem')
        div.append(img,name,price)
        div.addEventListener('click',()=>{
           localStorage.setItem('id',item.id)
           localStorage.setItem('description',item.description)
           localStorage.setItem('image',item.image)
           localStorage.setItem('price',item.price)
           localStorage.setItem('title',item.title)
           location.href='productDetail.html'
        })
        document.querySelector('#mainitems').append(div)
    })
}
displayData(products)
document.querySelector('#viewmorebutton').addEventListener('click',()=>{
    ++pagenumber
    if(pagenumber==3) document.querySelector('#viewmore').style.display='none'
    fetchData(pagenumber)
})
document.querySelector('#sortbtn').addEventListener('click',async()=>{
     document.querySelector('#mainitems').innerHTML=''
     let sortValue=document.querySelector('#sortbtn').value
     try {
        let result=await fetch(`https://shy-ruby-chimpanzee-sari.cyclic.app/products?_limit=6&_page=${pagenumber}`)
        let data=await result.json()
        if(sortValue=='asc'){
            data.sort((a,b)=>{
                return a.price-b.price
            })
        }else if(sortValue=='desc'){
            data.sort((a,b)=>{
                return b.price-a.price
            })
        }  
        displayData(data)
    } catch (error) {
        console.log(error)
    }
})