$(function () {
    // 키워드 등록
    const t_Close = $('.top_banner .close')
    const HEADER = $('header')
    const rightQuick = $('#right_quick')
    const topBtn = $('#right_quick .top_btn')
    const BODY = $('body')  // mNav_active
    const mobBtn = $('.mob_btn')
    const mobCBtn = $('.mNav_cBtn')
    const mSubMenu = $('.mCategory >ul >li >a')
    const mSubBBtn= $('.mNav_sumMenu dt')
    
    const smallTit= $('.small_tit')
    smallTit.click(function(){
        if(window.innerWidth<1111){

            $(this).toggleClass('On')
            $(this).children('.hidden').slideToggle()
        }
    })

    $(window).resize(function(){
        if(window.innerWidth>=1111){

            smallTit.children('.hidden').removeAttr('style')
        }
    })


    mSubMenu.click(function(){
        $(this).siblings('dl').addClass('On')
    })

    mSubBBtn.click(function(){
        $(this).parent('dl').removeClass('On')
    })

    // mobBtb을 click하면 BODY에 mNav_active class가 붙는다.

    mobBtn.click(function(){
        BODY.addClass('mNav_active')
    })
    mobCBtn.click(function(){
        BODY.removeClass('mNav_active')
    })



    const dep3_slider = new Swiper(".dep3_slider", {
        loop:true,
        speed:800,
        spaceBetween:30
      });



    const collect_slider = new Swiper(".collect_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".collect_slider .swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".collection_wrap .next",
            prevEl: ".collection_wrap .prev",
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
                centeredSlides: true,
            },
            1112:{
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });



    const visu_nav = new Swiper(".visu_slider", {
        pagination: {
            clickable: true,
            el: ".visu_nav",
        },
        navigation: {
            nextEl: ".visu_slider .next",
            prevEl: ".visu_slider .prev",
        },
    });








    // 위로 올라가는 버튼 클릭
    topBtn.click(function (e) {
        e.preventDefault()
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: '#app'
            }
        })
    })





    // scroll event
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            HEADER.addClass('scroll')
            rightQuick.addClass('up')

        } else {
            HEADER.removeClass('scroll')
            rightQuick.removeClass('up')
        }


    })



    // 상단 빨간 배너 클릭
    t_Close.click(function () {
        $(this).parent('.top_banner').addClass('hidden')
        HEADER.removeClass('top_Open')
    })














    const t_banner = new Swiper(".t_banner_slide", {
        direction: "vertical",
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 800
    });



})