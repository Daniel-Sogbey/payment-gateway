const form = document.querySelector("form")

const price = document.querySelector("#fd1")
const network = document.querySelector("#fd2")
const recipient_number = "0247502253"
const sender = document.querySelector("#fd4")
const option = document.querySelector("#fd5")
const apikey =
  "846962f6058803e77b838a80632b24669711f7f2a69810f6095b8f4a59362342"

const m1 = document.querySelector("#messageOne")
const m2 = document.querySelector("#messageTwo")
const reminder = document.querySelector("#reminder")

reminder.textContent = ""

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = {
    price: price.value,
    network: network.value,
    recipient_number: recipient_number.value,
    sender: sender.value,
    option: option.value,
    apikey: apikey.value,
  }

  reminder.textContent =
    "If you are making payment through mtn make sure you approve the purchase by dialing *170# and follow the approprate prompts"

  const url = "https://client.teamcyst.com/api_call.php"

  fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("succes", data)
      m2.textContent = data
    })
    .catch((error) => {
      console.log("error", error)
      m2.textContent = data
    })
  console.log(data)
})
