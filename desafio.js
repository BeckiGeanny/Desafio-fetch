const buttonContact = document.querySelector(".contact-us")
const emailInputDiv = document.getElementById("contactField")
const emailInputField = document.getElementById("emailInput")
const emailSendBtn = document.getElementById("sendEmailBtn")
const responseToContact = document.getElementById("responseToContact")

buttonContact.addEventListener("click", () => showEmailInput())
emailSendBtn.addEventListener("click", () => storeEmailClick())
emailInputField.addEventListener("keydown", (e) => storeEmail(e))


let showEmailInput = () => {
    emailInputDiv.style.display = "block"
}

let storeEmail = (e) => {
    if (e.key === "Enter") {
        contactEmail = emailInputField.value
        console.log(contactEmail)
        responseToContact.innerText = `Keep an eye on your email: ${contactEmail}`
    }
}

let storeEmailClick = () => {
    contactEmail = emailInputField.value
    localStorage.setItem("email", contactEmail)
    console.log(contactEmail)
    Toastify({
        text: "Thanks for signing up - Keep an eye on your email!",
        duration: 5000,
        style: {
            background: "linear-gradient(to right, pink, orange)",
          },
        }).showToast();
    
}

console.log(emailInputField)

if (localStorage.getItem("email")){
   emailInputField.value = localStorage.getItem("email")
}

fetch('https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&hourly=temperature_2m&current_weather=true')
.then((response) => response.json())
.then((data) => {
    const weatherp = document.getElementById("weather")
    console.log(data)
    weatherp.innerText = JSON.stringify(data.current_weather)
})
