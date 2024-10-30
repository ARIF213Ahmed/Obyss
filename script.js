function loadinganimation(){
    var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:0.6,
    delay:0.6
})
tl.from("#line-part1, .line h2",{
    opacity:0,
    onStart:function(){
    var h1timmer = document.querySelector("#line-part1 h5");
    var count = 0;
    setInterval(function(){
    if(count<100)
    {   
        h1timmer.innerHTML = count++;
    }
    else{
        h1timmer.innerHTML = count;
    }
    
}, 35);
    }

})
tl.to("#loader",{
    opacity:0,
    duration:0.6,
    delay:4
}
)
tl.from(".page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4,
})
tl.from(".nav",{
    opacity:0
})
tl.from(".hero h1",{
    y:120,
    stagger:0.2,
    duration:0.6,
    delay:0.6
})


}
loadinganimation();

function cursor(){
    document.addEventListener("mousemove", function(dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
            duration: 0.1
        });
    });
    
    
    const navLinks = document.querySelectorAll("#cur");
    
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function() {
            gsap.to(".cursor", {
                scale: 1.3,
                duration: 0.2
            });
        });
    
        link.addEventListener("mouseleave", function() {
            gsap.to(".cursor", {
                scale: 1, 
                duration: 0.2
            });
        });
    });
    Shery.makeMagnet("#cur" , {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    
    
}
cursor();



