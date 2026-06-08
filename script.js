function signup() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

localStorage.setItem("email", email);
localStorage.setItem("password", password);

alert("Signup Successful");

window.location.href = "login.html";
}

function login() {

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

if (
email === localStorage.getItem("email") &&
password === localStorage.getItem("password")
) {
alert("Login Successful");
window.location.href = "doctors.html";
}
else {
alert("Invalid Login");
}
}

function selectDoctor(doctor) {
localStorage.setItem("doctor", doctor);
window.location.href = "appointment.html";
}

function bookAppointment() {

let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

localStorage.setItem("date", date);
localStorage.setItem("time", time);

window.location.href = "confirm.html";
}
