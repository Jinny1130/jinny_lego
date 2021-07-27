/* 제품탭버튼 */
$(document).ready(function(){

    var swiperVisual = new Swiper('.visual', {
   
   
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        autoplay: {
        delay: 3000,
        }
    
      
    });
    
        var swiperBanner = new Swiper('.bandBanner', {
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
        });
    
        AOS.init();


    $('.tabBtn>li').on('click',function(){
        
        $('.tabBtn>li').removeClass('on');
        $(this).addClass('on');

        var i =$(this).index();

        $('.tabBox>div').removeClass('on');
        $('.tabBox>div').eq(i).addClass('on');
    });


    $('.dragonBtn>li').on('click',function(){
        
        $('.dragonBtn>li').removeClass('on');
        $(this).addClass('on');

        var i =$(this).index();

        $('.dragonBox>.dragonTab').removeClass('on');
        $('.dragonBox>.dragonTab').eq(i).addClass('on');
    });


    $('.numberBtn>li').on('click',function(){
        
        $('.numberBtn>li').removeClass('on');
        $(this).addClass('on');

        var i =$(this).index();

        $('.tabBox>.panel_page').removeClass('on');
        $('.tabBox>.panel_page').eq(i).addClass('on');
    });


    $('#open>img').on('click',function(){
        $('.top_img').fadeOut(); 
        
        $('.videoPlay').css({'display':'block'}); 
        $('#close').css({'display':'block'});

    });

    $('#close').on('click',function(){ 
        $('.top_img').show();

        $('.video_wrap video').css({'display':'none'});
        $('#close').css({'display':'none'});
    });

    

});