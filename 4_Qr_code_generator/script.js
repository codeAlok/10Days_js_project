// alert("it's working");

const wrapper = document.querySelector(".wrapper");
const generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", ()=> {
    wrapper.classList.add('active');
});