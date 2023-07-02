//Setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsQr-H0uqeOK5594s-oLS5wpapQGA97OU",
    authDomain: "udemy-clone-d0099.firebaseapp.com",
    projectId: "udemy-clone-d0099",
    storageBucket: "udemy-clone-d0099.appspot.com",
    messagingSenderId: "166116100166",
    appId: "1:166116100166:web:1b880ead971e24078d6247",
    measurementId: "G-TN8KH2XW1P"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
        // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            if (email == "ayushy065@gmail.com" && password == "Ayush@0910")
                window.location.href = "index.html"
            if (email == "ayushy0910@gmail.com" && password == "Ayush@0910")
                window.location.href = "index.html"

            document.write("You are signed up")
                // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
                // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            if (email == "ayushy065@gmail.com" && password == "Ayush@0910")
                window.location.href = "index.html"
            if (email == "ayushy0910@gmail.com" && password == "Ayush@0910")
                window.location.href = "index.html"

            console.log(result)

        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}