const media = document.querySelector(".contact-media")

const contactList = [
  {
    id: 1,
    icon: "ph ph-phone-call",
    name: "Phone",
    value: "+92 3144796676",
    href: "tel:+923144796676",
  },
  {
    id: 2,
    icon: "ph ph-envelope",
    name: "E-Mail",
    value: "talal786786talal786786@gmail.com",
    href: "mailto:talal786786talal786786@gmail.com",
  },
  {
    id: 3,
    icon: "ph ph-map-pin-area",
    name: "Address",
    value: "Qasim Bela Multan",
    href: "https://maps.app.goo.gl/shW8Ypaj8Mwq4fv16",
  },
];
const contactContent = contactList.map((ele) => {
  return `
    <div class="media" key=${ele?.id}>
                        <span>
                            <i class="${ele?.icon}"></i>
                        </span>
                        <div class="contact-value">
                            <p>${ele?.name}</p>
                            <a target="_blank" href=${ele?.href}>${ele?.value}</a>
                        </div>
                    </div>`
}).join("")

if (media) {
  media.innerHTML = contactContent
}

// send msg

const sendBtn = document.querySelector("#send-btn");
const originalText = sendBtn.innerHTML;

const originalStyle = {
  backgroundColor: sendBtn.style.backgroundColor,
  color: sendBtn.style.color,
  border: sendBtn.style.border,
  boxShadow: sendBtn.style.boxShadow
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault()

    sendBtn.innerHTML = "Sending...."
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white"
    sendBtn.style.border = "none"
    sendBtn.style.boxShadow = "none"

    sendBtn.disabled = true

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    if (!name || !phone || !message || !email) {
      sendBtn.innerHTML = originalText;
      Object.assign(sendBtn.style, originalStyle)
            sendBtn.disabled=false

      return Toastify({
        text: "All feild are Mandatary",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(206,16,16)",
        },
      }).showToast();

    }



    emailjs.send("service_drvafh4", "template_3y2vd26", {
      name, email, phone, message
    }).then(() => {
      Toastify({
        text: "Message Send",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(9,222,38)",
        },
      }).showToast();

      setTimeout(()=>{
        sendBtn.innerHTML=originalText;
        Object.assign(sendBtn.style,originalStyle)
        sendBtn.disabled=false;
      },2000)
      console.log('SUCCESS!');
      nameInput.value=""
      emailInput.value=""
      messageInput.value=""
      phoneInput.value=""
    },


      (error) => {
        aToastify({
        text: "Message Failed",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(206,16,16)",
        },
      }).showToast();
       setTimeout(()=>{
        sendBtn.innerHTML=originalText;
        Object.assign(sendBtn.style,originalStyle)
        sendBtn.disabled=false;
      },2000)

        console.log('FAILED...', error);
      });


  })
})

