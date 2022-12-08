// alert("it's working");

const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const qrImg = wrapper.querySelector(".qr-code img");
const generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", ()=> {
    let qrValue = qrInput.value;
    
    if(!qrValue) return; // if the input is empty then return from here

    generateBtn.innerText = "Generating QR Code....";

    // **** QR generator api link: https://goqr.me/api/ ****

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        wrapper.classList.add('active');
        generateBtn.innerText = "Generate QR Code";
    })

});

// Remove QR code if no value in input
qrInput.addEventListener("keyup", () => {
    if(qrInput.value) {
        wrapper.classList.remove("active");
    }
});