
// $(".dv img").hover(function () {
//     $(this).addClass(".active_ab1")
//     $(this).siblings().addClass(".active_ab1")

// })


$(".menu-icon").on("click", function () {
    console.log("hiiiiiiii")
    $(this).siblings().find("li").toggle()
})
// let is_show = false
// $(".menu-icon").on("click",function(){
//     if(is_show == false){
//         $("nav").slideToggle()
//         is_show = true
//     }else{
//         $("nav").slideToggle()
//         is_show = false
//     }
// })

// $("header li").on("click", function () {
//     console.log("000")
//     $("li").hide()

// })
$(window).mousemove(function (e) {
        $(".circle").css({ top: e.pageY, left: e.pageX }); 
      }); 
$(".product_img").hover(function () {
    $(this).addClass("active")
    $(this).siblings().addClass("other")
    
}, function () {
    $(this).removeClass("active")
    $(this).siblings().removeClass("other")
})
$(".slide:last-child ").clone().prependTo(".slidecontent")


$(".slide").eq(1).clone().appendTo(".slidecontent")


let current_slide_offset = -1140

function prev() {
    current_slide_offset = current_slide_offset + 1140
    if (current_slide_offset == 0) {
        $(".slidecontent").animate({
            "margin-left": current_slide_offset
        }, 400, function () {
            $(".slideontent").css({
                "margin-left": -4560
            })
        })
        current_slide_offset = -4560
    } else {
        $(".slidecontent").animate({
            "margin-left": current_slide_offset
        }, 200)

    }
} //#prev click end


function next() {

    console.log(current_slide_offset)
    current_slide_offset = current_slide_offset - 1140

    if (current_slide_offset != -5700) {
        $(".slidecontent").animate({
            "margin-left": current_slide_offset
        }, 400)
    } else {
        //callback
        $(".slidecontent").animate({
            "margin-left": current_slide_offset
        }, 400, function () {
            $(".slidecontent").css({
                "margin-left": -1140
            })
        })

        current_slide_offset = -1140
    }
    // $(".slide_content").animate({"margin-left":-1140},400)
} // #next click end

$("#prev").on("click", function () {

    prev()
}) //#prev click end

$("#next").on("click", function () {
    next()


}) // #next click end


function loop() {

    setInterval(function () {
        next()
    }, 4000)

}

loop()
console.log("???????????????",$(".img_home").offset().top)

let home_img_top = $(".img_home").offset().top
$(window).resize(function(){
 
    home_img_top = $(".img_home").offset().top
}) // windows end

$(window).scroll(function () {
    if ($(window).scrollTop() > home_img_top) {
        // $(".home_img").show()
        $(".home_img").addClass("img_active")
        console.log("gogogogo")
    } else {}
    console.log($(window).scrollTop())
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
       
        $(".gotop").show()
        $(".gotop").addClass(".gotop_active")

        
    } else {
        // ($(window).scrollTop() < 600) {
            
            $(".gotop").hide()
    }
    
})
//nav  11/14

// $("nav a").hover(function () {
//     $(this).addClass(".a_active")
//     $(this).siblings().addClass(".a_active")
// console.log("nav")
    // }, function () {
    //     $(this).show()
    //     $(this).siblings().hide()
// })


// MAP
$(".map_img").hover(function () {
    $(this).siblings().show()
})


// $(window).resize(function(){

// console.log("????????????",$(window).width());
// console.log("????????????");


// })
// if (current_slide_offset != 768) {
//     $(".home_ing").show()
// } else {
//     //callback

//     })


// }
////////////////////////// ??????????????????//////////////////////////////
$('.slide-content').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    cssEase: 'linear',
    speed: 10000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 0,
                pauseOnFocus: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                cssEase: 'linear',
                speed: 4000,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});