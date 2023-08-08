import {navbar} from "./components/navbar.js";
import {footer} from "./components/footer.js"
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
const hamburger=document.querySelector('.hamburger')
const navMenu=document.querySelector('.navlinks')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

// let bestSeller=[
//     {
//         image:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/292/2614/CARVER_PIPEWRENCH_PACKAGE__25818.1686059946.jpg?c=1",
//         desc: "CARVER PIPEWRENCH ALL-IN-ONE POCKET SKATE TOO",
//         price: "20.00"
//     },
//     {
//         image:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/600x600/products/384/2925/CARVER_C7_SPRING__65725.1686060816.jpg?c=1",
//         desc: "C7 SPRING",
//         price: "3.00"
//     },
//     {
//         image: "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/484/2970/CarverTritonPrismalC52021__80035.1686061579.jpg?c=1",
//         desc: `TRITON X CARVER 32" PRISMAL SURFSKATE COMPLETE`,
//         price: "170.00"
//     },
//     {
//         image:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/380x380/products/480/2983/CarverTritonAstralC52021__84670.1685743568.jpg?c=1",
//         desc: `TRITON X CARVER 29" ASTRAL SURFSKATE COMPLETE`,
//         price: `170.00`
//     }
// ];
// let obj=[{
//     img:"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/175x175/products/739/3954/2023_lost_rad_ripper_cx__43331.1686805713.jpg?c=1",
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
show(data);

function show(data){
    document.getElementById("cart_heading").innerHTML="";
    let h1=document.createElement("h2");
        h1.setAttribute("id","headingcount")
        document.getElementById("cartDisplay").innerHTML="";
        let items=0;
        for(let i=0; i<data.length; i++){
            items+=data[i].quantity;
        }
        h1.textContent="CheckOut"+"  "+"Summary";
        document.getElementById("cart_heading").append(h1);
        displayitems(data);
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
            data[i].quantity--;
            show(data);
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
    
    let half1=document.createElement("div");
    half1.setAttribute("id", "half1");

    let payeediv= document.createElement("div");
    payeediv.setAttribute("id","payeediv");
    let pd=document.createElement("p");
    pd.textContent="Payment Details";
    pd.setAttribute("id","topw");

    let newdiv= document.createElement("div");
    newdiv.setAttribute("id", "newdiv");
    let topw=document.createElement("p");
    topw.setAttribute("id", "cntctdet");
    topw.textContent="Contact Details";
    
    let input=document.createElement("input");
    input.setAttribute("id", "input");
    input.setAttribute("placeholder", "Enter Your Shipping Address");

    newdiv.append(topw,input);

    // let inform= document.createElement("p");
    // inform.textContent= "Inform me with new offers"
    // inform.setAttribute("id","inform");

    let myDiv4 = document.createElement("div");
    myDiv4.setAttribute("id", "mydiv4");
    let checkbox4 = document.createElement("input"); 
        checkbox4.type = "checkbox";
        checkbox4.name = "name";
        checkbox4.value = "value";
        checkbox4.id = "id";
    let label4 = document.createElement("label");
    label4.setAttribute("id", "label4");
        label4.htmlFor = "id";
        label4.appendChild(document.createTextNode('Inform me with new offers'));
    myDiv4.append(checkbox4,label4);
    

    payeediv.append(pd,newdiv,myDiv4);

    let paydiv= document.createElement("div");
    paydiv.setAttribute("id","paydiv");

    let pay=document.createElement("h3");
    pay.textContent="PAYMENT";
    pay.setAttribute("id","pay");

    let olddiv=document.createElement("div");
    olddiv.setAttribute("id", "olddiv");
    let ideal= document.createElement("p");
    ideal.textContent="Ideal";
    ideal.setAttribute("id", "ideal");
    // let inpu=document.createElement("input");
    // inpu.setAttribute("placeholder","Select Your bank");
    // inpu.setAttribute("id", "inpu");


let inpu = document.createElement("select");

inpu.setAttribute("id","inpu")
// inpu.id = "inpu";

let optionValues = [
    {value:"nodata", text: "Not Selected"},
  { value: "access", text: "Axis Bank" },
  { value: "citibank", text: "Citibank" },
  { value: "diamond", text: "Diamond Bank" },
  { value: "ecobank", text: "Ecobank" },
  { value: "fidelity", text: "Fidelity Bank" },
  { value:"citibank", text:"CitiBank"},
  { value:"IDBI", text:"IDBI"},
  { value:"bankofamerica", text:"Bank Of America"}



  // Add more options here...
];

optionValues.forEach(function(option) {

  let optionElement = document.createElement("option");

  optionElement.value = option.value;
  optionElement.textContent = option.text;

  inpu.appendChild(optionElement);
});


    olddiv.append(ideal,inpu);

    let myDiv = document.createElement("div");
    myDiv.setAttribute("id", "mydivi");
    let checkbox = document.createElement("input"); 
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";
    let label = document.createElement("label");
    label.setAttribute("id", "label1");
        label.htmlFor = "id";
        label.appendChild(document.createTextNode('Credit Card.'));
    myDiv.append(checkbox,label);

    let myDiv2 = document.createElement("div");
    myDiv2.setAttribute("id", "mydiv2");
    let checkbox2 = document.createElement("input"); 
        checkbox2.type = "checkbox";
        checkbox2.name = "name";
        checkbox2.value = "value";
        checkbox2.id = "id";
    let label2 = document.createElement("label");
        label2.setAttribute("id", "label2");
        label2.htmlFor = "id";
        label2.appendChild(document.createTextNode('Razorpay.'));
    myDiv2.append(checkbox2,label2);
    
    let myDiv3 = document.createElement("div");
    myDiv3.setAttribute("id", "mydiv3");
    let checkbox3 = document.createElement("input"); 
        checkbox3.type = "checkbox";
        checkbox3.name = "name";
        checkbox3.value = "value";
        checkbox3.id = "id";
    let label3 = document.createElement("label");
    label3.setAttribute("id", "label3");
        label3.htmlFor = "id";
        label3.appendChild(document.createTextNode('PhonePay.'));
    myDiv3.append(checkbox3,label3);

    let paypal=document.createElement("p");
    paypal.textContent="PayPal";
    paypal.setAttribute("id", "paypal");

    let paylast=document.createElement("div");
    paylast.setAttribute("id", "paylast");
    let back=document.createElement("button");
    back.setAttribute("id", "backbtn");
    back.textContent="Back";

    let paypay=document.createElement("button");
    paypay.setAttribute("id", "proceedbtn");
    
    paypay.textContent="Payment";

    paylast.append(back,paypay);




    paydiv.append(olddiv,myDiv,myDiv2,myDiv3,paylast);
    half1.append(payeediv,paydiv);

    let half2=document.createElement("div");
    half2.setAttribute("id", "half2");
    let subdiv=document.createElement("div");
    subdiv.setAttribute("id", "subdiv");

    let paymentd= document.createElement("p");
    paymentd.setAttribute("id","parentd");
    paymentd.textContent="Tax Invoice";
    
        
    let subtotal=document.createElement("p");
    subtotal.textContent=`Subtotal`;

    let amount=document.createElement("p");
    amount.textContent=`$${sutotal}.00`;

    subdiv.append(subtotal,amount);

    let discountdiv= document.createElement("div");
    discountdiv.setAttribute("id", "discountdiv");
    let discountis=document.createElement("p");
    discountis.textContent="Total Discount";
    let discounton= document.createElement("p");
    discounton.textContent="572";
    discountdiv.append(discountis,discounton);

    let totalamountdiv= document.createElement("div");
    totalamountdiv.setAttribute("id", "totalamountdiv");
    let totalamnt=document.createElement("p");
    totalamnt.textContent="Total Amount";
    let totalamountis=document.createElement("p");
    totalamountis.textContent=`$${sutotal}.00`;
    totalamountdiv.append(totalamnt,totalamountis);

    let shippingchrg= document.createElement("div");
    shippingchrg.setAttribute("id", "shippingchrg");
    let shippingon=document.createElement("p");
    shippingon.textContent="Shipping Charge";
    let shippingdone=document.createElement("p");
    shippingdone.textContent="0";
    shippingchrg.append(shippingon,shippingdone);






    let orderDiv=document.createElement("div");
    orderDiv.setAttribute("id", "orderDiv");

    let orderheading=document.createElement("p");
    orderheading.textContent="Order total";
    let orderTotal=document.createElement("p"); 
    orderTotal.textContent=`$${sutotal-discounton}.00`;

    orderDiv.append(orderheading,orderTotal);

    half2.append(paymentd,subdiv,shippingchrg,totalamountdiv,discountdiv,orderDiv);
    main.append(half2,half1);

    document.getElementById("cartDisplay").append(main);

    }
    function deleted(i){
            
            data.splice(i,1);
            localStorage.setItem("CartData", JSON.stringify(data));
            let updatedData=JSON.parse(localStorage.getItem('CartData')) || [];
            show(updatedData);
    };
    var amont= orderTotal;
    var options = {
        key: "rzp_test_9AIA8nghrvemgk",
        amount: amont,
        currency: "INR",
        name: "CARVER",
        description: "PAY WITH RAZORPAY",
        image:
          "https://blog.playo.co/wp-content/uploads/2018/04/Playo-dp-gradient4-1.png",
    
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert("Your Order is Succesfull");
          alert("Your order will be delivered within 2 days");
        },
      };
      var rzp1 = new Razorpay(options);
    
      document.getElementById("proceedbtn").onclick = function (e) {
        rzp1.open();
        e.preventDefault();
      };

   
