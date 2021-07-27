$(document).ready(function(){
    
    $('.sideMenu>li').on('click',function(){
        
        $('.sideMenu>li').removeClass('on');
        $(this).addClass('on');
    
        var i =$(this).index();
    
        $('.customerTitWrap>.panel_tit').removeClass('on');
        $('.customerTitWrap>.panel_tit').eq(i).addClass('on');

        $('.titleWrap>.title').removeClass('on');
        $('.titleWrap>.title').eq(i).addClass('on');
    });

    $('.tabMenu>li').on('click',function(){
        
        $('.tabMenu>li').removeClass('active');
        $(this).addClass('active');
    
        var i =$(this).index();
    
        $('.faq_wrap').removeClass('on');
        $('.faq_wrap').eq(i).addClass('on');
    });


    $('.faq_wrap>.faq').on('click',function(){
        
        
        $(this).find('dd').toggleClass('on');

        
    });

});