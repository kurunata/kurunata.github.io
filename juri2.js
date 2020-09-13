//HTML element
/*function num1(){
  document.querySelector('.container').innerHTML = 'Hai';
}

function num2(){
  document.querySelector('.container').innerHTML = '<embed src="Files/Tes2.pdf" type="application/pdf" width="100%" height="600px">';
}*/



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-YWE83v2lCLrxdmxJ8DU9p2v5p2IDOg0",
    authDomain: "siii-gaca-18088.firebaseapp.com",
    databaseURL: "https://siii-gaca-18088.firebaseio.com",
    projectId: "siii-gaca-18088",
    storageBucket: "siii-gaca-18088.appspot.com",
    messagingSenderId: "500514684685",
    appId: "1:500514684685:web:963d4acedc74694130ba44",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Data Juri 1
  let contactInfo = firebase.database().ref("juri2");
  
  // Listen for a submit
  document.querySelector(".contact-form-2").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name-2").value;
    let nilai1 = document.querySelector(".nilai1-2").value;
    let nilai2 = document.querySelector(".nilai2-2").value;
    let nilai3 = document.querySelector(".nilai3-2").value;
    let nilai4 = document.querySelector(".nilai4-2").value;
    let message = document.querySelector(".message-2").value;
    console.log(name, nilai1, nilai2, nilai3, nilai4, message);
  
    saveContactInfo(name, nilai1, nilai2, nilai3, nilai4, message);
  
    document.querySelector(".contact-form-2").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, nilai1, nilai2, nilai3, nilai4, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      nilai1: nilai1,
      nilai2: nilai2,
      nilai3: nilai3,
      nilai4: nilai4,
      message: message,
    });
  }