//  header section 
 const menuIcon = document.getElementById("menu-icon");
 const closeIcon = document.getElementById("close-icon");
 const headerMenu = document.getElementById("header-menu");
 menuIcon.addEventListener("click", ()=>{
    closeIcon.classList.add("block");
    headerMenu.classList.add("block");
    menuIcon.classList.add("hidden");

 })
 closeIcon.addEventListener("click", ()=>{
    closeIcon.classList.remove("block");
    headerMenu.classList.remove("block");
    menuIcon.classList.remove("hidden");
 })

// testimonial section 
let slide = new Swiper('.slide', {
   slidesPerView: 1,
   loop: true,
   autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // 3 slides per view for screens >= 768px
      spaceBetween: 30, // 30px space between slides
    },
    1024: {
      slidesPerView: 3, // 4 slides per view for screens >= 1024px
      spaceBetween: 40, // 40px space between slides
    },
  },
 });

// footer section 
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const errorMsg = document.getElementById("error-msg");
const submitMsg = document.getElementById("submit-msg");
submit.addEventListener("click", (event)=>{
  if(!email.checkValidity()){
    event.preventDefault();
    email.style.border="2px solid var(--BrightRed)";
    errorMsg.style.display="block";
  }
  else {
    email.value='';
    errorMsg.style.display = 'none'; 
    submitMsg.style.display = 'block'; 
    email.style.border="2px solid transparent";
  }
})