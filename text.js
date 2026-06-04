const toggleBtn =
document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

const connectBtn =
document.querySelector(".contact-buttons a");

connectBtn.addEventListener("click", () => {

    alert("Opening LinkedIn Profile...");

});

const text = [

    "AI Enthusiast",
    "Frontend Developer",
    "Robotics Engineer"

];

let index = 0;

const typingElement =
document.getElementById("typing-text");

setInterval(() => {

    typingElement.textContent = text[index];

    index++;

    if(index >= text.length){

        index = 0;

    }

}, 2000);

const greeting =
document.getElementById("greeting");

const hour =
new Date().getHours();

if(hour < 12){

    greeting.textContent =
    "Good Morning 👋";

}
else if(hour < 18){

    greeting.textContent =
    "Good Afternoon ☀️";

}
else{

    greeting.textContent =
    "Good Evening 🌙";

}

const copyBtn =
document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(
        "govardhanreddybadam@gmail.com"
    );

    alert("Email copied successfully!");

});

const image =
document.querySelector(".profile-image img");

image.addEventListener("click", () => {

    image.classList.toggle("zoom");

});