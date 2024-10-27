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
    ease:Power4
})
tl.to("#loader",{
    display:none
})


