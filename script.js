
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if(menuToggle){
  menuToggle.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
  });
}
document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>navLinks?.classList.remove("open"));
});
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(link=>{
  const target = link.getAttribute("href");
  if(target === current || (current === "" && target === "index.html")){
    link.classList.add("active");
  }
});
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll("form[data-demo-form]").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const status=form.querySelector(".form-status");
    if(status){
      status.textContent="Thank you! Your request has been recorded in this demo form. Please call or WhatsApp us to complete your enquiry.";
      status.style.color="#238a28";
    }
    form.reset();
  });
});
