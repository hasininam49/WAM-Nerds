

var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
alert("This website is under construction if there are any issues please email me at wamnerds@gmail.com");
localStorage.setItem('alerted','yes');
console.log("It worked")
}
else {
    console.log("Already alerted");
}

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCazKdmZ8R_frkKnMn3_PwEKBh2d93bHns',
  authDomain: "the-wam-nerds.firebaseapp.com",
  databaseURL: "https://the-wam-nerds-default-rtdb.firebaseio.com",
  projectId: "the-wam-nerds",
  storageBucket: "the-wam-nerds.appspot.com",
  messagingSenderId: "898296095199",
  appId: "1:898296095199:web:1a26ab29a47cc01b9ae46a",
  measurementId: "G-G9H3E4G704"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


