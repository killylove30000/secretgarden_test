$(window).on('pageshow', function(event) {
        // 뒤로가기로 왔거나 새로고침 시 메뉴를 강제로 닫음
        $(".nav ul ul, .nav_bg").hide();
    });
    $('.nav ul ul li').click(function(){
        $('.depth2').removeClass('active');
    });