
import {navbar} from "../components/navbar.js";
import {footer} from "../components/footer.js"
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
document.querySelector('.logo').addEventListener('click',()=>{
    location.href='index.html'
})
const hamburger=document.querySelector('.hamburger')
const navMenu=document.querySelector('.navlinks')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

let bestSeller=[
    {
        image:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/292/2614/CARVER_PIPEWRENCH_PACKAGE__25818.1686059946.jpg?c=1",
        desc: "CARVER PIPEWRENCH ALL-IN-ONE POCKET SKATE TOO",
        price: "20.00"
    },
    {
        image:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/600x600/products/384/2925/CARVER_C7_SPRING__65725.1686060816.jpg?c=1",
        desc: "C7 SPRING",
        price: "3.00"
    },
    {
        image: "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/484/2970/CarverTritonPrismalC52021__80035.1686061579.jpg?c=1",
        desc: `TRITON X CARVER 32" PRISMAL SURFSKATE COMPLETE`,
        price: "170.00"
    },
    {
        image:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/480/2983/CarverTritonAstralC52021__84670.1685743568.jpg?c=1",
        desc: `TRITON X CARVER 29" ASTRAL SURFSKATE COMPLETE`,
        price: `170.00`
    }
];
// let obj=[{
//     img:
//     "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/175x175/products/739/3954/2023_lost_rad_ripper_cx__43331.1686805713.jpg?c=1",
//     desc:`LOST X CARVER 31" RAD RIPPER TIE DYE SURFSKATE COMPLETE CX`,
//     price: "250",
//     quantity: 1,
// },
// {
//     img:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/175x175/products/732/4023/2023-yago-firegoat-c7__04627.1687997451.jpg?c=1",
//     desc:`CARVER 30.75" YAGO FIRE GOAT SURFSKATE COMPLETE C7`,
//     price: "285",
//     quantity: 1

// },
// {
//     img:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/175x175/products/741/3964/2023_lost_retro_tripper_cx__35453.1686806241.jpg?c=1",
//     desc:`LOST X CARVER 32" RETRO TRIPPER SURFSKATE COMPLETE CX`,
//     price: "250",
//     quantity: 2 
// },
// {
//     img:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/175x175/products/737/3947/2023_lost_rnf_cx__89102.1686805096.jpg?c=1",
//     desc:`LOST X CARVER 29.5" RNF RETRO PINK SURFSKATE COMPLETE CX`,
//     price: "250",
//     quantity: 1 
// },
// {
//     img:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/175x175/products/731/3965/2023_JOB_Tiger_Aqua_CX__27890.1686852889.jpg?c=1",
//     desc:`31" J.O.B AQUA TIGER SURFSKATE COMPLETE CX`,
//     price: "270",
//     quantity: 1 
// },
// {
//     img:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/175x175/products/693/3787/CarverChrysalis2022_1000X1000__44396.1669068179.jpg?c=1",
//     desc:`CARVER 29.5" CHRYSALIS SURFSKATE COMPLETE CX`,
//     price: "250",
//     quantity: 5 
// },
// {
//     img:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/175x175/products/702/3836/brophy_cx__20612.1686075126.jpg?c=1",
//     desc:`LOST X CARVER 32.5" ROCKET REDUX BROPHY SURFSKATE COMPLETE CX`,
//     price: "250",
//     quantity: 1 
// }];
// localStorage.setItem("CartData",JSON.stringify(obj));
let data = JSON.parse(localStorage.getItem('CartData')) || [];
console.log(data)
show(data);

function show(data){
    document.getElementById("cart_heading").innerHTML="";
    let h1=document.createElement("h1");
        h1.setAttribute("id","headingcount")
    if(data.length==0){
        
        h1.textContent=`YOUR CART (0 ITEMS)`;
        document.getElementById("cart_heading").append(h1);

        let h3=document.createElement("h3");
        h3.textContent=`YOUR CART IS EMPTY`;
        let button=document.createElement("button");
        button.textContent=`SHOP NOW`;
        // button.addEventListener("click", ()=>{
        //     location.href=
        // })
     document.getElementById("cartDisplay").append(h3,button);
        display(bestSeller);
    }
    else{
        document.getElementById("cartDisplay").innerHTML="";
        let items=0;
        for(let i=0; i<data.length; i++){
            items+=data[i].quantity;
        }
        h1.textContent=`Your Cart (${items} Items)`;
        document.getElementById("cart_heading").append(h1);
        displayitems(data);

    }

}

function display(bestSeller){
    
    let div= document.createElement("div");
    div.setAttribute("id","bestseller_section");
    let head= document.createElement("div");
    head.setAttribute("id", "emptyHeadingDiv");    
    let heading=document.createElement("h1");

    heading.textContent= "BEST SELLERS"
    head.append(heading);
    div.append(head);
    let productDiv=document.createElement("div");
    productDiv.setAttribute("id","ProductDiv")


    bestSeller.map(function(el){
        let div1=document.createElement("div");
        div1.setAttribute("class","seller");
        let image= document.createElement("img");
        image.src=el.image;
        let a=document.createElement("a");
        a.href="";
        a.textContent=el.desc;

        let p=document.createElement("p");
        p.textContent=`$ ${el.price}`;

        div1.append(image, a, p);
    productDiv.append(div1);
    })
    div.append(productDiv);
    document.getElementById("cartMain").append(div);
}
function displayitems(data){

    let table=document.createElement("table");
    let thead=document.createElement("thead");
    let tr=document.createElement("tr");
    let th1=document.createElement("th")
    th1.textContent="Product"
    let th2=document.createElement("th");
    th2.textContent="Price"
    let th3=document.createElement("th");
    th3.textContent="Quantity"
    let th4=document.createElement("th");
    th4.textContent="Total"
    tr.append(th1,th2,th3,th4);
    
    thead.append(tr);
    table.append(thead)
     
    let tbody=document.createElement("tbody");
    let sutotal=0;
data.map((el,i)=>{

let tr=document.createElement("tr");
let td1=document.createElement("td");


let img=document.createElement("img");
img.src=el.img;


let div=document.createElement("div");
div.setAttribute("id","desc_btnDiv");
let p=document.createElement("p");
p.textContent="Carver";
let desc=document.createElement("a");
desc.textContent=el.desc;

 div.append(p,desc);

let div1=document.createElement("div");
div1.setAttribute("id","removeDiv")
let a=document.createElement("a");
a.textContent="Remove";
a.addEventListener("click",()=>{
    deleted(i);
});
div1.append(a);
let cont=document.createElement("div");
cont.setAttribute("id", "tdDiv")
cont.append(div,div1);
td1.append(img,cont);


let td3=document.createElement("td")
let pr=document.createElement("p");
pr.textContent=`$${el.price}.00`;
td3.append(pr);



let td4=document.createElement("td");
let span= document.createElement("div");

span.setAttribute("id", "quantityBloc")
let QuantityBoard=document.createElement("p");
QuantityBoard.setAttribute("id","DisplayQuantity")
QuantityBoard.textContent=el.quantity;
let divbtn=document.createElement("div");
divbtn.setAttribute("id","buttonDiv")
let increment=document.createElement("button")
increment.textContent="⌃";
increment.setAttribute("id","upButton")
increment.addEventListener("click",()=>{
    
    if(data[i].quantity<5){
    data[i].quantity++;
    show(data);
    }
    
});
let decrement=document.createElement("button");
decrement.setAttribute("id","downButton")
decrement.textContent="⌄"
decrement.addEventListener("click", ()=>{
    if(data[i].quantity==1){
        deleted(i);
    }
    else{
    //  
    
    data[i].quantity--;
    show(data);

    // QuantityBoard.textContent=data[i].quantity;
    // td5.textContent=`$${el.price * el.quantity}.00`
    // let items=0;
    //     for(let p=0; p<data.length; p++){
    //         console.log(data[p].quantity);
    //         items+=data[p].quantity;
    //     }

    // document.getElementById("headingcount").textContent=`Your Cart (${items} Items)`;

    
    }
});
divbtn.append(increment,decrement);
span.append(QuantityBoard,divbtn);
td4.append(span);

let td5=document.createElement("td");

td5.textContent= `$${el.price * el.quantity}.00`
sutotal+=el.price*el.quantity;

tr.append(td1,td3,td4,td5);
tbody.append(tr);

})

table.append(tbody);
document.getElementById("cartDisplay").append(table);


let main=document.createElement("div");
main.setAttribute("id", "main");
let top=document.createElement("p");
top.textContent="Coupon Code";
let half1=document.createElement("div");
half1.setAttribute("id", "half1");

let coupon=document.createElement("div");
coupon.setAttribute("id", "coupon");


let input=document.createElement("input");
input.setAttribute("id", "input");
let button=document.createElement("button");
button.setAttribute("id", "applybtn");
button.textContent="APPLY";
button.addEventListener("click",()=>{
    let discount="Carver25"
    if(input.value==""){
        let image=document.getElementById("popImage");
        image.src=`https://www.shareicon.net/download/2016/07/07/792196_cancel_512x512.png`
        image.style.width="60px"
        document.getElementById("pop_message").textContent=`Please enter your coupon code.`
        document.getElementById("Pop_up").style.visibility="visible";
        orderTotal.textContent=`$${sutotal}.00`;
    }
    else if(input.value!=discount){
        let image=document.getElementById("popImage");
        image.src=`https://www.shareicon.net/download/2016/07/07/792196_cancel_512x512.png`
        image.style.width="50px"
        

        
        document.getElementById("pop_message").textContent=`The coupon code "${input.value}" you entered is not valid.`;
        document.getElementById("Pop_up").style.visibility="visible"
        orderTotal.textContent=`$${sutotal}.00`;

    }
    else{
        // let payable=(subtotal/4)*3
        let image=document.getElementById("popImage");
        image.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlerp8c9-EKQFzOdaWtOO0Ic8ZOZeXNMlrcQ&usqp=CAU`
        image.style.width="70px"
        
        document.getElementById("pop_message").textContent=`Discount Coupon Applied`
        document.getElementById("Pop_up").style.visibility="visible"

        orderTotal.textContent=`$${(sutotal/4)*3}`
    }
    
    

})
coupon.append(input,button);
let terms=document.createElement("div");
terms.setAttribute("id", "terms");
let p=document.createElement("p");
p.textContent=`Carver defaults to FedEx Home Delivery for all domestic orders. PLEASE NOTE DUE TO COVID-19 AND AN INCREASED DEMAND FOR CARVER PRODUCTS, ORDERS MAY TAKE UP TO 5 BUSINESS DAYS TO SHIP." Selected shipping options including FedEx Ground Home Delivery, FedEx Standard Overnight, FedEx 2 Day and FedEx Express Saver go into effect AFTER the order preparation lead time`;
let hr=document.createElement("hr");
let pbottom=document.createElement("p");
pbottom.textContent=`PLEASE NOTE, Carver Skateboards International, INC. REFUSES TO PROCESS ANY ONLINE ORDERS THAT CONTAIN A "SHIP TO" ADDRESS INSTRUCTING Carver Skateboards TO SHIP PRODUCTS TO A DESIGNATED FREIGHT FORWARDER OR 3rd PARTY LOGISTICS COMPANY. THESE ORDERS WILL BE IMMEDIATELY CANCELLED AND ALL REFUNDS WILL BE PROCESSED ACCORDINGLY. REFUNDS CAN TAKE UP TO 5-7 BUSINESS DAYS TO PROCESS DEPENDING ON THE FINANCIAL INSTITUTION.`
terms.append(p,hr,pbottom)

half1.append(top,coupon,terms);
let half2=document.createElement("div");
half2.setAttribute("id", "half2");
let subdiv=document.createElement("div");
subdiv.setAttribute("id", "subdiv");
    
let subtotal=document.createElement("p");
subtotal.textContent=`Subtotal`;

let amount=document.createElement("p");
amount.textContent=`$${sutotal}.00`;

subdiv.append(subtotal,amount);




let orderDiv=document.createElement("div");
orderDiv.setAttribute("id", "orderDiv");

let orderheading=document.createElement("p");
orderheading.textContent="Order total";
let orderTotal=document.createElement("p"); 
orderTotal.textContent=`$${sutotal}.00`;

orderDiv.append(orderheading,orderTotal);
half2.append(subdiv,orderDiv);
main.append(half1,half2)

document.getElementById("cartDisplay").append(main);


let checkoutDiv=document.createElement("div");

checkoutDiv.setAttribute("id","checkoutDiv");
let otherdiv=document.createElement("div");

let checkbtn=document.createElement("button");
checkbtn.textContent="CHECKOUT"
checkbtn.addEventListener("click", ()=>{
    let mrinal={
        OriginalPrice:sutotal,
        discountedPrice:orderTotal.textContent
    }
    
    localStorage.setItem("PayAmount", JSON.stringify(mrinal));
    window.location.href=`../teamCarver/cartcheckout.html`
});

let checkimg=document.createElement("img");
checkimg.src=`https://connect.bolt.com/3650567/build/images/issuer-lineup.external.svg`
otherdiv.append(checkbtn,checkimg);

checkoutDiv.append(otherdiv);
document.getElementById("cartDisplay").append(checkoutDiv);

}
function deleted(i){     
        data.splice(i,1);
        localStorage.setItem("CartData", JSON.stringify(data));
        let updatedData=JSON.parse(localStorage.getItem('CartData')) || [];
        show(updatedData);
};
document.getElementById("Sub_Pin").addEventListener("click",visibility);
function visibility(){

    document.getElementById("Pop_up").style.visibility="hidden";   
};

