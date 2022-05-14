// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCBsueF1lN-syINDCSPGiBFE0R84yONcCQ",
//   authDomain: "web-focusapp.firebaseapp.com",
//   databaseURL: "https://web-focusapp-default-rtdb.firebaseio.com",
//   projectId: "web-focusapp",
//   storageBucket: "web-focusapp.appspot.com",
//   messagingSenderId: "741173865610",
//   appId: "1:741173865610:web:f12be30527f693fab89173"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);




// var firebaseConfig = {
//     apiKey: "API_KEY",
//     authDomain: "PROJECT_ID.firebaseapp.com",
//     // The value of `databaseURL` depends on the location of the database
//     databaseURL: "https://DATABASE_NAME.firebaseio.com",
//     projectId: "PROJECT_ID",
//     storageBucket: "PROJECT_ID.appspot.com",
//     messagingSenderId: "SENDER_ID",
//     appId: "APP_ID",
//     // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//     measurementId: "G-MEASUREMENT_ID",
//   };
  
//   firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  


  import { initializeApp } from 'firebase/app';
  import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBsueF1lN-syINDCSPGiBFE0R84yONcCQ",
  authDomain: "web-focusapp.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://web-focusapp-default-rtdb.firebaseio.com",
  projectId: "web-focusapp",
  storageBucket: "web-focusapp.appspot.com",
  messagingSenderId: "741173865610",
  appId: "1:741173865610:web:f12be30527f693fab89173",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//   measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);



  var add = document.getElementById("remind")
//   document.getElementById(idValue.id).value = "";
  var emailInput = document.getElementById("email")

  add.addEventListener("click", addToMailingList)

  function addToMailingList() {
      var email = emailInput.value;
      if (validateEmail(email)) {
        var time = Date.now()
        writeToDatabase(time, email)
      }
      else {
          alert("Please enter a valid email")
      }
  }


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function writeToDatabase(time, email) {
    const db = getDatabase();
    set(ref(db, 'mailing_list/' + time + ""), {
    email: email
    });
    userSubscribed()
}

function userSubscribed() {
    emailInput.value = ""
    alert("Thanks, you will be reminded once Focus is out.")
}
    