function checkID(){
            const id = document.getElementById("id");
            
            if (id.value == ""){
                alert("아이디를 입력해 주세요.");
                return false;
            }
            return true;
        }