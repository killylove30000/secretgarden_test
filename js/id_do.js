        function checkEmail(){
            const em = document.getElementById("email");
            const mailTest = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            const tel = document.getElementById("tel");
            const telTest = /^\d{3}-\d{3,4}-\d{4}$/;

            if (em.value == ""){
                alert("이메일을 입력해주세요.");
                return false;
            }
            if (!mailTest.test(em.value)){
                alert("입력한 메일주소를 다시 확인해서 입력해주세요.");
                return false;
            }
            return true;
        }
        function checkPhone(){
            const tel = document.getElementById("tel");
            const telTest = /^\d{3}-\d{3,4}-\d{4}$/;

            if (tel.value == ""){
                alert("전화번호를 입력해주세요.");
                return false;
            }
            if (!telTest.test(tel.value)){
                alert("010-0000-0000 방식으로 숫자를 입력해주세요.");
                return false;
            }
            return true;
        }