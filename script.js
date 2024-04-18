var tl = gsap.timeline();
document.getElementById("nav").addEventListener("click", function(){
    gsap.from("#nav h3",{
        y: -50,
        opacity: 0,
        delay : 0.3,
        duration:1,
        easing: "easeInOutQuad",
        stagger: 0.3,
    }) 
})

tl.from("#nav h3",{
    y: -50,
    opacity: 0,
    delay : 0.3,
    duration:0.8,
    easing: "easeInOutQuad",
    stagger: 0.3,
})
tl.from("img",{
    x: 100,
    rotate : 45,
    opacity:0,
    scale:1,
    duration:0.5,
    easing: "easeInOutQuad",
    stagger:0.8,
})
tl.to("img",{
    scale:0.6,
    opacity:1,
    duration:1,
    filter: "blur(10px)"
})
tl.to("#main-text  span",{
    left: "0px",
    opacity: 1,
    delay : 0.3,
    duration: 0.8,
    easing: "easeInOutQuad",
    stagger: 0.4,
})
tl.from("#main-text hr",{
   
    opacity: 0,
  
    duration:0.8,
    easing: "easeInOutQuad",
    stagger: 0.3,
})
