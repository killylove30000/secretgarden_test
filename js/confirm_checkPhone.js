  function checkPhone(){
            const num2 = document.getElementById("num2");
            const num3 = document.getElementById("num3");
            const cell = document.getElementById("cell");
            const password = document.getElementById("password");

            const num1 = cell.value;
            var reg = /^[0-9]+$/;
            const fields = [num2, num3]; //대괄호 사용 -> 배열 

            if (password.value === ""){
                alert("비밀번호를 입력해주세요.");
                password.focus();
                return false;
            }

            for (const field of fields){
                if (field.value == ""){
                alert("번호를 입력해주세요.");
                field.focus();
                return false;
            }
                if (!reg.test(field.value)){
                    alert("전화번호는 숫자만 입력할 수 있습니다.");
                    field.focus();
                    return false; 
                }
            if (field.value.length !== 4){
                alert("4자리 숫자를 각각 입력해주세요.");
                field.focus();
                return false;
            }
            }
            //번호 틀 = 최종 조합 참고하기.
            const fullPhoneNumber = `${num1}-${num2.value}-${num3.value}`;
            console.log("확인되었습니다.", fullPhoneNumber)
            return true;
        }