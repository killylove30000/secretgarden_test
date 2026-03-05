        /*만들것 : 인원 선택수에따른 금액 변화 , 이름 입력 확인 연락처 입력 확인 비밀번호 입력확인 */

        /*function people_check(){
            const people = document.getElementById("people");
            const price = document.getElementById("price");
            if (people.selectedIndex === -1) return;  //배열값 없을때 대비

            const selected = people.options[people.selectedIndex].value;
            price.innerText = selected;

        };*/
        /*
        function people_check(){
            const people = document.getElementById("people");
            const price = document.getElementById("price");
            price.innerText = people.value;  // people에서 선택했기 때문에 price값 정의내릴 때, price값이 선택한 people값이다 라고 작성한거니까 순서가 반대인거 잊지말기  
            
        }
        people_check();
        */
        //제이쿼리로 바꿨을때 ㅠㅠ..헷갈리네..
        $(document).ready(function(){
                //url 정보 읽어서 화면에 입력해주기 (...와 진짜 처음보니까 너무 어려워요 )
            const urlParams = new URLSearchParams(window.location.search);
            const branchName = urlParams.get("branchName");
            const date = urlParams.get("date");
            const time =urlParams.get("time");
            const selectedTheme = urlParams.get("theme");

            //화면에 데이터 넣기 + ${} 쓸때는 무조건 백틱!!! ``  
            if (branchName && date && time) {
                $("#display_info").text(`${branchName} / ${date} / ${time} 예약 진행 중`);
            }
            //각 정보가 있을때 해당되는 html요소에 값 넣기 
            if (branchName){
                $("#selected_branch").text(branchName); 
            }
            if (time){
                $("#selected_time").text(time);  
            };
            if (date){
                $("#selected_date").text(date);
            }
            if (selectedTheme){
                $("#selected_theme").text(selectedTheme);
            }
            
            // 인원 선택하면 가격/인원 표시되기 
            function people_check(){
            const selectedPrice = $("#people").val(); //제이쿼리에서 값 불러오기는 value()가 아니라 val()만 써도 됨 
            
            if (selectedPrice) {
                $("#price").text(selectedPrice);
            } else {
                $("#price").text("0원");
            }
        }
        people_check(); //초기 실행 
        $("#people").on("change", function(){
            people_check();
            });    
    });
        

        function checkVisitor(){
            const name = document.getElementById("name");

            const num2 = document.getElementById("num2");
            const num3 = document.getElementById("num3");
            const password = document.getElementById("password");
            const agree = document.getElementById("agree");
            var reg = /^[0-9]+$/;

            if (name.value == ""){
                alert("이름을 입력해 주세요");
                name.focus();
                return false;
            }

            if (password.value){
                if (password.value == ""){
                alert("비밀번호를 입력해 주세요");
                password.focus();
                return false;
            }
            }
            const fields = [num2, num3]; 
            for (const field of fields){
                if (!reg.test(field.value)){
                    alert("전화번호는 숫자만 입력해주세요.");
                    field.focus();
                    return false;
                }
            }

            if (!agree.checked){
                alert("개인정보 동의가 필요합니다. ");
                return false;
            }
            return true;
        };