function checkIdPw(){
            const password = document.getElementById("password");
            const id = document.getElementById("id");
            const alphabet = /^[a-zA-Z0-9]{10,15}$/;
            if (id.value == ""){
                alert("아이디를 입력해 주세요.");
                return false;
            }
            if (password.value){
                if (password.value == ""){
                alert("비밀번호를 입력해 주세요");
                return false;
            }
                if (!alphabet.test(password.value)){
                alert("비밀번호는 10~15자리 숫자와 영문자를 섞어서 써야 합니다.")
                return false;
                }

            return true;
            }
        }