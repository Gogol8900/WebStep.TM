// Плавная прокрутка

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const id=this.getAttribute("href");

document.querySelector(id).scrollIntoView({

behavior:"smooth"

});

});

});

// Анимация появления

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".service-card,.portfolio-card,.stat,.contact-box div").forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

// Кнопка наверх

const btn=document.createElement("button");

btn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

btn.className="top-btn";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

btn.classList.add("active");

}else{

btn.classList.remove("active");

}

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
