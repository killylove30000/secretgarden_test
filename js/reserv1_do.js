    $(window).on('pageshow', function(event) {
        // 뒤로가기로 왔거나 새로고침 시 메뉴를 강제로 닫음
        $(".nav ul ul, .nav_bg").hide();

                //오늘 날짜 이전은 선택안할거라는 코드
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
            //console.log(today);

        const minDate = `${year}-${month}-${day}`;

        $("#reserv_date").attr("min", minDate).val(minDate);
    });
        $('.nav ul ul li').click(function(){
            $('.depth2').removeClass('active');
    });
        
        //각 지역별 지점 배열 선언 /
        //요건 DOM방식 
        /*document.addEventListener("DOMContentLoaded", function(){

        const branchList = {
                "seoul":[
                    {value:"kd1", text:"건대점"}, 
                    {value:"kd2", text:"포레스트건대"}, 
                    {value:"dhr",text:"대학로점"},
                    {value:"hh", text:"시네마틱혜화"},
                    {value:"hj", text:"미드나잇합정"}
                ],
                "jeolla":[
                    {value:"jj", text:"전주점"}, 
                    {value:"gj", text:"광주점"}
                ],
                "gyungsang":[
                    {value:"dsr", text:"동성로점"}, 
                    {value:"sm", text:"서면점"}
                ]
            };
            
            //지역 선택시 지점 옵션 변경  : 이제 이거는 select option에 따라 div(테마 목록) 보이냐 안보이냐 하는 방법으로. 
            
                const select_r = document.getElementById("select_r"); //지역 선택한거 선언
                const select_b = document.getElementById("select_branch"); //지점 선택한거 선언
                const theme_div = document.querySelectorAll(".List_div"); //테마 보여질 div
                
                function hideAllContents(){
                //테마들을 잠시 초기화 시킨다고 볼때 공통적으로 적용되는 이름이 필요해서 여기서 클래스 갖고온것임. 헷갈리지 말기 
                theme_div.forEach(div =>  div.style.display = "none");
            }
                //지역 선택한 값과 연관되어 바꿔준다고 할때... 
                select_r.addEventListener("change",function(){
                    const selectedRegion = this.value;
                    //일단 지점 초기화 시켜놓고 ..
                select_b.innerHTML = '<option value="">지점 선택</option>';
                hideAllContents(); //초기화

                if (selectedRegion && branchList[selectedRegion]){
                    select_b.disabled = false; 

                    branchList[selectedRegion].forEach(item =>{
                        const option = document.createElement("option");
                        option.value = item.value;
                        option.text = item.text;
                        select_b.add(option);
                    });
                }else{
                    select_b.disabled = true;
                }
            });
            
                //여기서 지점 선택시 해당 지점 테마 목록 나온다고 설정하고싶은거니까 (가정하면)

            select_b.addEventListener("change", function(){
                hideAllContents();
                const select_b_id = this.value;

                if (select_b_id){
                    const target = document.getElementById(select_b_id);
                    if (target){
                        target.style.display = "block";
                }
            }
        });
    });
    */
                //요게 바로 제이쿼리 방식
    $(document).ready(function(){
        //1. 선택한 날짜가 오늘인지 다른 날짜인지 여부에 대하여 정해보는 함수 
        //여기서 selectedDate는 매개변수. 응용방법 복습 좀 하기
    function DateCheck1(selectedDate){
        const today = new Date();
        //const todayStr = today.toISOString().split("T")[0]; //YYYY-MM-DD 형식으로 맞추고자 쓴것; 어려움
        const todayStr = today.toLocaleDateString('sv-SE'); // 한국시간에 맞춘것. 'sv-SE' 로케일은 YYYY-MM-DD 형식을 반환 
        return selectedDate === todayStr;
    }
            //2. 참고하여 가져온 함수 : 함수2 - 현재 시간과 예약시간 비교해서 가능/마감 보여주기
        function updateReservationStatus(){
        const now = new Date();
        const currentTime = (now.getHours() * 100) + now.getMinutes(); 
        //이걸 왜 하냐면 보통 시간을 10:30 이렇게 써놨기 때문에 현실 시간을 (시*100+분) 천,백의 자리로 만들어버리고자 100을 곱하는 것. 즉 시간 데이터를 네자리수 1030으로 뽑아내려는 꼼수 

        $(".reserv_time > li").each(function(){
            const $this = $(this);
            const timeText = $this.text().trim();//시간(텍스트) 갖고오기->.trim() : 문자열 시작과 끝에 있는 공백 잘라내주는 역할.기억해두자. 

            if (timeText){
                const targetTime = parseInt(timeText.replace(":", ""));
                if (currentTime >= targetTime){
                    $this.css({
                        "background-color":"#333", "opacity":"0.5", "cursor":"not-allowed","pointer-events": "none" //클릭 방지
                    });
                    $this.find(".on").hide();
                    $this.find(".off").show();
                }
            }
        });
    }

     //3. 예약마감을 해제시키는 함수3 -> $items 변수 선언으로 더 간편화시킴 여기서 좀 헷갈려했음 
    function resetReservationStatus(){
        const $items = $(".reserv_time > li");
        $items.css({
            "background-color":"#008848",
            "opacity":"1", 
            "pointer-events":"auto", 
            "cursor":"pointer"
        });

        $items.find(".on").show();
        $items.find(".off").hide();

    }
        //4. 오늘 날짜가 맞다면 실시간 마감 적용을, 다른 날짜라면 예약가능 적용을 하는 함수4  
    const $dateInput = $("#reserv_date");
        function DateCheck2(){
            const selectedValue = $dateInput.val(); 
            
            if (!selectedValue) return; //보완: 값이 비어있다면 실행 안하기
            if(DateCheck1(selectedValue)){
                console.log("오늘입니다. 시간별 마감 로직을 실행합니다.");
                updateReservationStatus(); 
            } else {
                console.log("오늘이 아닙니다. 모든 타임 슬롯을 활성화합니다.");
                resetReservationStatus(); 
            }
        }
         //함수 구동시킴. 
        
        $dateInput.on("change input", DateCheck2); //이게 날짜 변경했을때 작동함. 기억하기
        //제이쿼리 + change 및 input까지 이벤트 연결해서 반응속도를 높여줌. *TIP 
        
        $(window).on("load", function(){
            DateCheck2(); 
        });
        //60000밀리세컨드=1분마다 검토 -> 데이터값으로 불러온 날짜(입력받은날짜)가 현재시간, 예약시간이랑 비교해주고 적용시켜줌.
        setInterval(function(){
            if(DateCheck1($dateInput.val())){
                updateReservationStatus(); 
            }
        }, 60000);
        


        const branchList = {
            "seoul":[{value:"kd1", text:"건대점"},{value:"kd2", text:"포레스트건대"},{value:"dhr", text:"대학로점"},{value:"hh", text:"시네마틱혜화"},{value:"hj", text:"미드나잇합정"}],
            "jeolla":[{value:"jj", text:"전주점"},{value:"gj", text:"광주점"}],
            "gyungsang":[{value:"dsr", text:"동성로점"},{value:"sm", text:"서면점"}]
        };
        const $select_r = $("#select_r");
        const $select_b = $("#select_branch");
        const $theme_div = $(".List_div");

        function hideAllContents(){
            $theme_div.hide(); //이것이 제이쿼리의 장점ㅠㅠ + 테마 초기화를 위해 숨기기 적용시킬 공통 클래스 
        }
        $select_r.on("change",function(){
            const selectedRegion = $(this).val();
            $select_b.html('<option value="">지점 선택</option>');
            hideAllContents();
            
            if (selectedRegion && branchList[selectedRegion]){
                $select_b.prop("disabled", false); //.prop() 자바스크립트의 프로퍼티 취급 -> 함수 적용하면서 수정된 값을 가져와야 하기 때문에 prop을 쓰는것. 
                
                $.each(branchList[selectedRegion], function(index, item){
                    $select_b.append($('<option>', {
                        value: item.value,
                        text: item.text
                    }));
                });
            } else{
                $select_b.prop("disabled",true);
            }

    });
    //id값이 각 지점별로 되어있기때문에 $("#"+select_b_id).show();  
    $select_b.on("change", function(){
        hideAllContents();
        const select_b_id = $(this).val();

        if (select_b_id) {
            $("#"+select_b_id).show(); // .style.display = "block" 대신 show() 사용하는것.. 편리하니까 외우기 
        };
    });

        //리서브타임 클래스를 클릭했을때, a태그에게 함수 적용...을 이렇게도 쓸수 있구나 ㅠㅠ  
    $(".reserv_time").on("click", "li > a", function(e){
        e.preventDefault();
            //데이터 갖고오기 -> 지점 값, 텍스트, 선택한 날짜값, 선택한 시간값 
        const selectedBranch = $("#select_branch").val(); 
        const selectedBranchText = $("#select_branch option:selected").text();
        const selectedDate = $("#reserv_date").val();
        const selectedTime = $(this).find(".time").text();
        //테마 이름값을 어떻게 갖고 올것인지?-> 테마이름값 가져오는데 오류 및 시행착오가 있었음. 단순히 선택한 부분에서 텍스트값을 가져오는데 (h3 영역에 다른 값도 있었기 때문에) 1차 :  $(this).closest(".time_Area").find(".h3_theme").text(); 2차 : .contents().get(0).nodeValue()로 진행. 
        const themeName = $(this).closest(".time_Area").find(".h3_theme").contents().get(0).nodeValue.trim();


    
    if (!selectedBranch || !selectedDate) {
        alert("지점과 날짜를 먼저 선택해주세요!");
        return;
    }
            //공부 더 해야함 -> 예약페이지로 데이터 url에담아서 전송하기. encodeURIComponent는 한글이나 특수문자가 깨지지 않게 변환.
            //백틱 ` 을 이용해야한다. 
        const url = `reserv2.html?branch=${selectedBranch}&branchName=${encodeURIComponent(selectedBranchText)}&date=${selectedDate}&time=${selectedTime}&theme=${encodeURIComponent(themeName)}`;
        location.href= url;
    });
});
    