var navbar=document.getElementById("navbar");

window.onscroll=function(){
    if(window.pageYOffset > 200){
        this.navbar.classList.add("sticky");

    }
    else{
        this.navbar.classList.remove("sticky");
    }
};


$(document).ready(function(){

// click nav
$(".navbar .collapse ul li a").click(function(e){
    e.preventDefault();
    $(this).addClass("decoration").parent().siblings().find("a").removeClass("decoration");

});


// sections
$(".navbar .collapse ul li a").click(function(){
    $("html,body").animate({
        scrollTop : $("#" + $(this).data('scroll')).offset().top-60,
    },500);
});

$(window).scroll(function(){
    $(".section").each(function(){
        if($(window).scrollTop() >= $(this).offset().top-60){
            var id=$(this).attr("id");
            $(".navbar .collapse ul li a").removeClass("decoration");
            $(".navbar .collapse ul li a[data-scroll='"+ id +"']").addClass("decoration");

        }
    });
});



// cardhover
// cardhover.onmousehover = function(){

//     cardhover.style.display = "block";

// }
// $(".cardhover"").hover(function(){
//    $(this).fadeIn('slow');
// });

// $(".pcimg").mouseleave(function(){
//     $(".cardhover").fadeOut('slow');
//  });




//  form
$(".formm").animate({
    width:"35%",
    borderRadius:"10px",


},500,function(){
   $(".formm").animate({
       height:"500px",
   },500,function(){

       $(".fc").animate({

           width:"80%",
       })
   })
});

// animate
$(window).scroll(function(){

    if($(this).scrollTop() >= 4500){
        
        $(".animate1").animate({
            left:0,
        },1000);


        $(".animate2").animate({
            top:0,
        },1000);

        $(".animate3").animate({
            right:0,
        },1000,function(){
            $(".animate1,.animate2,.animate3").css("position","static");
            $(".teamtxt").css("margin-top","100px");
            $(".box").css("position","relative");
           
        
        });


      
    }

});


$(window).scroll(function(){

    if($(this).scrollTop() >=620){
        
      


        $(".scard").animate({
            top:0,
        },1000);
    }

});


});




    


