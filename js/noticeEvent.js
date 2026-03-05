$(document).ready(function(){
    $(".notice, .event").click(function(e){
        e.preventDefault(); //a태그링크 이동 방지라고 함.
        $(".notice, .event").removeClass("active"); //이전 효과 제거
        $(this).addClass("active"); //클릭한거 활성화
        var c = $(this).index(); //클릭한거 인덱스 순서
        $(".notice_page, .event_page").removeClass("active"); //이전 효과 제거
        $(".notice_page, .event_page").hide();
        $(".notice_page, .event_page").eq(c).show();
    });
    
});