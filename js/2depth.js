// 왜 on("mouseenter focusin", )이 되는가? mouseenter(), mouseleave() 메소드 구현을 다음과 같이 넣음으로서 반응형을 진행할때 도움이 된다고 함.

    $(document).ready(function(){
        //페이지 로드때 메뉴가 열려있는 오류가 있어서 처음에는 숨기기 기능 넣어주기
        $(".depth2, .nav_bg").hide();

        $(".nav > ul").on("mouseenter",function(){
            $(this).find(".depth2").stop().slideDown(200);
            $(".nav_bg").stop().slideDown(200);

        });
        $(".nav > ul").on("mouseleave", function(){
            $(this).find(".depth2").stop().slideUp(200);
            $(".nav_bg").stop().slideUp(200);
        });
        //.nav 위치와 .nav_bg 위치가 달라서(범위상 .nav_bg가 밑에 있음..) 내가 .nav로 했을때와 세부적인 ul로 범위를 좁혔을때 코딩이 적용되냐 안적용되냐 굉장히 머리 싸매고 있었는데
        //원인을 알아냈음... 둘이 형제이고 서로 속한 관계는 아님. 그래서 .nav일때는 그나마 둘이 범위 겹치니까(부모요소가 .nav라서.) 반응했었고, ul로 범위를 좁힐시 레이어로 나뉜건지 범위가 안잡힘...
        //Top메뉴 2뎁스를 없애고 전부 메뉴를 위로 올려 1뎁스로 수정함.
        /*$(".top_menu2").on("mouseenter",function(){
            $(this).find(".top_sub").stop().slideDown(200);
        });
        $(".top_menu2").on("mouseleave",function(){
            $(this).find(".top_sub").stop().slideUp(200);
        });*/
    });

    