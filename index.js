var tl =gsap.timeline({scrollTrigger:{
    trigger:".second-page",
    start:"0% 95%",
    end:"60% 50%",
    scrub:true,
    // markers:true
}})
tl.to(".fanta-can",{
    x:"-120%",
    y:"170%",
    // duration:5,
},"orange")
tl.to(".orange-cut",{
    x:"-90%",
    top:"150%",
    // duration:5,
},"orange")
tl.to(".orange-full",{
    left:"70%",
    top:"160%",
    // duration:5,
},"orange")
tl.to(".leaf3",{
    rotate:"-10deg",
    left:"79%",
    top:"110%",
    // duration:5,
},"orange")
tl.to(".leaf",{
    rotate:"80deg",
    left:"0%",
    top:"100%",
    // duration:5,
},"orange")
/* -------------------------------------------------------------------------- */
/*                                new-timeline                                */
/* -------------------------------------------------------------------------- */
var tl2=gsap.timeline({scrollTrigger:{
    trigger:".third-page",
    start:"8% 95%",
    end:"60% 50%",
    scrub:true,
    // markers:true,
}})
tl2.to(".fanta-can",{
    x:"2%",
    y:"311%",
    
    
},"v")
   
tl2.from(".sprite",{
    right:"80%",
    rotate:"-15deg"
}
  ,"v"  
)
tl2.from("#coca-can",{
    left:"73%",
    // right:"80%",
    rotate:"15deg"
}
  ,"v"  
)
tl2.from("#spr",{
     x:-300,
     y:100,
    // left:"0.006%",
   
    // rotate:"-15deg"
}
  ,"v"  
)

 
tl2.from("#cpr",{
    x:300,
    y:100,
   // left:"0.006%",
  
   // rotate:"-15deg"
}
 ,"v"  
)
tl2.to(".orange-cut",{
    x:"17%",
    y:"80%"
}
,"v")