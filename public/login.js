var studmail=document.getElementById("studmail");
var teachmail=document.getElementById("teachmail");
var adminmail=document.getElementById("adminmail");
var studpass=document.getElementById("studpass");
var teachpass=document.getElementById("teachpass");
var adminpass=document.getElementById("adminpass");

var studloginsub=document.getElementById("studsubmit");
var teachloginsub=document.getElementById("teachsubmit");
var adminloginsub=document.getElementById("adminsubmit");

var user=null;

studloginsub.addEventListener('click', (e) => {
  e.preventDefault();
  var email=studmail.value;
  var pass=studpass.value;
  var auth=firebase.auth();
  
  auth.signInWithEmailAndPassword(email,pass).then(function(){
  console.log("login_success!!");
    
    var user = firebase.auth().currentUser;

  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
    
  }).catch(function(error) {
  auth.createUserWithEmailAndPassword(email, pass).then(function (){
  var database = firebase.database();
  var name="yash";
  var email="yash@yash.com";
  firebase.database().ref('users').push({
    username: name,
    email: email });
  }).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("error_!!");
  });
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  });
});
//   auth.onAuthStateChanged(function(user) {
//   if (user) {
//     console.log("user logged in!");
//      var database = firebase.database();
//   var name="yash";
//   var email="yash@yash.com";
//   firebase.database().ref('users').push({
//     username: name,
//     email: email });
//   } else {
//     console.log("not found eror!");
//   });
//     // User is signed out.
//   }
//   });
// });

// studlogoutsub.addEventListener('click', (e) => {
//   e.preventDefault();
  
//   var auth=firebase.auth();
//   auth.signOut().then(function() {
//   // Sign-out successful.
//   }, function(error) {
//   // An error happened.
//   });

// });