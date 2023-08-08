// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, set} from  "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// ........NABAR.JS CODE.............................................................................
const hamburger=document.querySelector('.hamburger')
const navMenu=document.querySelector('.navlinks')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
});
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA49sNT_Exqha6pivnVyAjGk-6Kh8DnYKo",
authDomain: "authentication-543a6.firebaseapp.com",
projectId: "authentication-543a6",
storageBucket: "authentication-543a6.appspot.com",
messagingSenderId: "742702348989",
appId: "1:742702348989:web:01969e2a8215be1ee395d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

// Fetch the list of countries from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countrySelect = document.getElementById("country");

        data.forEach(country => {
            const option = document.createElement("option");
            option.value = country.name.common;
            option.text = country.name.common;
            countrySelect.appendChild(option);
        });
    })
    .catch(error => {
        console.log(error);
    });
    

// Register button click event listener
document.getElementById("register").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let addressLine = document.getElementById("addressLine").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let country = document.getElementById("country").value;
    let company = document.getElementById("company").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            set(ref(database, 'users/' + user.userId), {
                username,
                email,
                phone,
                address: {
                    addressLine,
                    city,
                    state,
                    zip,
                    country,
                },
                company,
            });

            alert("Registered successfully");
            console.log(user);
            window.location.href = "signinpage.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
});