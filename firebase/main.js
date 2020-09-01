// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCC9FP54Ai4I3yfw31fRXLyqynLOHiwuyg",
    authDomain: "contact-form-e9d14.firebaseapp.com",
    databaseURL: "https://contact-form-e9d14.firebaseio.com",
    projectId: "contact-form-e9d14",
    storageBucket: "contact-form-e9d14.appspot.com",
    messagingSenderId: "72750600305",
    appId: "1:72750600305:web:e5afc2ed4ff0f8925ccbd0",
    measurementId: "G-W2JXZWRWF9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var messageRef = firebase.database().ref('messages');


//Listen for form submit

document.getElementById('contact-form')
.addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    //Get Values
    var name= getInputVal('name');
    var company= getInputVal('company');
    var email= getInputVal('email');
    var phone= getInputVal('phone');
    var message= getInputVal('message');
    saveMessage(name,company,email,phone,message);

    document.querySelector('.alert').style.display="block";

    //hide alert after 3 sec

    setTimeout(function(){
        document.querySelector('.alert').style.display="none";
    },3000);

    document.getElementById('contact-form').reset();

}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}