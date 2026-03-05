 function email_change(){
            const email_2 = document.getElementById("email_2");
            const mail_select = document.getElementById("mail_select");
            const em_do = mail_select.options.selectedIndex;
            const selected = mail_select.options[em_do].text;
            email_2.value = selected;
        }
            /*(출력은 하지 않지만, 핸드폰 통신사부터 번호들 입력받아서 저장하려고 만들어봄. -> 왜냐하면 예약 확인 폼에서 불러오고 싶기 때문이다 */
        function phonenum(){
            const mobile_c = document.getElementById("mobile_c");
            const cell = document.getElementById("cell");
            const selected_c = mobile_c.value;
        }
            
            // 통신사에 따라 기본 휴대폰 앞자리 010-설정 (스위치로 했던게 자연스러웠는데 역시 어느 선택이든  010으로만 한정이 되서 애매해짐.)
            /*switch(selectedCarrier) {
                case 'KT':
                case 'SK-telecom':
                case 'U+':
                    cell.value = '010';
                    break;
            
                default:
            
            }
        }*/
            /* if (selected_c === "KT" || selected_c === "SK-telecom" || selected_c === "U+") {                
                    cell.value = '010';
            } else { 

            }
        */
        
        function checkID(){
            window.open("","under_const.html","width=600px, height=200px, top=100px, left=100px");
        }

        function checkPassword(){
            const password = document.getElementById("password");
            const pw_check = document.getElementById("pw_check");
            const id = document.getElementById("id");
            const name = document.getElementById("name");
            const terms = document.getElementById("terms");
            const alphabet = /^[a-zA-Z0-9]{10,15}$/;
            const cell_num = document.getElementById("cell_num");
            const cell_num2 = document.getElementById("cell_num2");
            
            if (id.value == ""){
                alert("아이디를 입력해 주세요.");
                return false;
            }

                /*password 값을 받는것이기 때문에 .value 가 적용되는셈. */
            if (password.value){
                if (password.value == ""){
                alert("비밀번호를 입력해 주세요");
                return false;
            }
                if (!alphabet.test(password.value)){
                alert("비밀번호는 10~15자리 숫자와 영문자를 섞어서 써야 합니다.")
                return false;
                }
                if (/(\w)\1\1\1/.test(password.value)){
                alert("4444같은 문자를 4번 이상 사용하실 수 없습니다. ");
                return false;
            }
                if (pw_check.value != password.
                value){
                    alert("비밀번호와 일치하지 않습니다.");
                    return false;
                }
                
            }
            
            
            if (password.value.includes(id.value)){
                alert("비밀번호에 아이디가 포함되었습니다");
                return false;
            }

            var reg = /^[0-9]+$/; //숫자만 입력하는 정규식 -> 정규식에서 g는 넣지 않는다. 오류가 자꾸 남..  
/*
            if (!(reg.test(cell_num.value))) {
                alert("전화번호는 숫자만 입력할 수 있습니다.");
                cell_num.focus();
            return false;
            }
            */
                /*함수를 줄이면 좋은데, 일단 각각 값을 따져서 받는 것으로 짜놓았었다가 고쳐보기.
                입력 받을 변수들을 배열로 넣어버린다. 추후 또 공부해둘것 */
            const fields = [cell_num, cell_num2]; //대괄호 사용 -> 배열 
            for (const field of fields){
                if (!reg.test(field.value)){
                    alert("전화번호는 숫자만 입력할 수 있습니다.");
                    field.focus();
                    return false; 
                }
            }

            if (!terms.checked){
                alert("약관 동의가 필요합니다.");
                return false;
            }

            return true;
        }