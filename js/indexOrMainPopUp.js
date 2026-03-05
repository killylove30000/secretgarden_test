    $(window).on("load", function(){
        $("#modal").show();
    });
    function closeModal(){
        $("#modal").hide();
    }

        // -> hideModal 쿠키 확인
    $(function(){
        if (localStorage.getItem("hideModal") === "true") {
            $("#modal").hide();
        } else

    })
    /*    window.onload = function(){
            document.getElementById("modal").style.display = "block";
        }
        function closeModal(){
            document.getElementById("modal").style.display = "none";
        }*/
    /*$(function (){
        // 1. "today close"쿠키 확인=> 엄청 생뚱맞을수 있는데 밑에서 함수 적용된거 보면 오늘하루 닫기 설정이 적용될때 함수 발동된 흔적이 있는지 확인하고 함수 실행하는 것. 흔적이 있다? 함수 실행할 이유가 없어짐. 
        if (getCookie("today_close") !== "Y"){
            $("#modal").show();
        }
    });
     //쿠키 ~ 
    function getCookie(name){
        var value = ";" + document.cookie;
        var parts = value.split(";"+name+"=");
        if(parts.length === 2) return parts.pop().split(";").shift();
    }
      //쿠키 저장-체크박스 관련
    function closeToday(){
        var date = new Date();
        date.setTime(date.getTime()+(24*60*60*1000));
        document.cookie = "today_close=Y; path=/; expires=" + date.toUTCString();

        $("#modal").hide();
    }
    //근데 이제 유효기간이 24시간....
     */   
        
        /* //일단 최근의 크롬이나 엣지 브라우저들은 팝업을 자동으로 차단시켜버림... 
        window.onload = function openSesame(){
        var _width = 500;
        var _height = 500;
        var url = "popup_info.html";
        var name = "주의안내";
        
        var _top = Math.ceil((window.screen.height - _height) / 2);
        var _left = Math.ceil((window.screen.width - _width) / 2);

        var options= "width =" + width + ", height="+ height + ", top=" + top + ", left="+ left +", location=no, status=no, toolbar=no"; 
        //그래 어쩐지 이상하더라 이게 맞지.. 
        var windowPopup = window.open(url, name, options);
        //팝업 차단되었는지 확인 한번더 
        if (!windowPopup || windowPopup.closed || typeof windowPopup.close == "undefined"){
            alert("브라우저에서 팝업이 차단되었습니다. 주소창의 팝업 차단 설정을 해제해주세요. ");
        }
        };
        */
