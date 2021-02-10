/*
* Project Name: Malls
* FrontEnd Author: MostafaKhanipour
* BackEnd Author: PayamJafari
* Android & Windows Author: RezaGhaedi
* Author URL: https://themeforest.net/user/mostafakhanipour
* Version: 0.1
*/

(function($) {

// alert("test");
    //functions



    //On Window load & Resize


    //On Document Load


    $(document).ready(function(){

        // menu
        $(".listCategory").hover(function(){
            $("#category1").css("display","block");
            $(".listCategory-sublist-container").stop(true,true).fadeIn(200).css("display","flex");
        },function(){
            $(".listCategory-sublist-container").stop(true,true).fadeOut(200);
        });

        // sub menu
        $(".listCategory-sublist li").hover(function(){
            var idDataSublistIndex = $(this).attr("data-sublistIndex");
            $(this).addClass("listCategory-sublist--hoverd");
            $("#category"+idDataSublistIndex).css("display","block");
            $("#category"+idDataSublistIndex).hover(function(){

            },function(){

            });
        },function(){
            var idDataSublistIndex = $(this).attr("data-sublistIndex");
            $(this).removeClass("listCategory-sublist--hoverd");
            $("#category"+idDataSublistIndex).css("display","none");
            // alert("tess")
        });


    });
})(jQuery);
