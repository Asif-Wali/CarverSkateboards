import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// navbar
document.querySelector('.logo').addEventListener('click',()=>{
    location.href='index.html'
})
document.querySelector('')
const hamburger=document.querySelector('.hamburger')
const navMenu=document.querySelector('.navlinks')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')


});






const firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyA49sNT_Exqha6pivnVyAjGk-6Kh8DnYKo",
authDomain: "authentication-543a6.firebaseapp.com",
projectId: "authentication-543a6",
storageBucket: "authentication-543a6.appspot.com",
messagingSenderId: "742702348989",
appId: "1:742702348989:web:01969e2a8215be1ee395d4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

// Check user's authentication status on page load
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        document.getElementById("logout").style.display = "block";
        showMessage("You've been logged in your account successfully as: " + user.email );
    } else {
        // User is signed out
        document.getElementById("logout").style.display = "none";
        showMessage("");
    }
});

document.getElementById("login").addEventListener("click", function () {
    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value;
    


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userRef = ref(database, "users/" + user.uid);
            onValue(userRef, (snapshot) => {
                const data = snapshot.val();
               // console.log(data);
            });
            alert("Login successful");
            document.getElementById("logout").style.display = "block";
            showMessage("You've been logged in your account successfully as: " + user.email);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
});

document.getElementById("logout").addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            alert("Logged out");
            showMessage("You've been logged out of your account successfully.");
            document.getElementById("logout").style.display = "none";
        })
        .catch((error) => {
            console.log(error);
        });
});

function showMessage(message) {
    const messageTextElement = document.getElementById("message-text");
    messageTextElement.innerHTML = message.replace(
/(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)/g,
'<strong>$1</strong>'
);

    if (message) {
        document.getElementById("message").style.display = "block";
    } else {
        document.getElementById("message").style.display = "none";
    }
};

