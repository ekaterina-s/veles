console.log("hjhjh");const headerToggle=document.querySelector(".header__toggle"),nav=document.querySelector(".nav"),pageBody=document.querySelector(".page-body");headerToggle.addEventListener("click",()=>{headerToggle.classList.toggle("_active"),nav.classList.toggle("_active"),pageBody.classList.toggle("_lock")});