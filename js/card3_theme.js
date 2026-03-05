        const cardSections = document.querySelectorAll(".card_body");
        //전체 요소 가져오기 선언 들어갔는데 이게..맞나 헷갈린다. 
        //ft cardSections = document.querySelectorAll(".card_body");
        //document.querySelector 대신 Section. querySelector 을 사용하여 속한 박스안의 버튼만 찾아가게 됨. 

            /*선언 넣어주고-> section(영역 안에서만)*/
        cardSections.forEach((section) =>{
            const card_cont = section.querySelector(".cards");
            /*card_cont 왜 선언하나 했더니 css에서 이게 공간감-깊이감을 주게끔 돕고 있어서 제이쿼리에서도 한번 언급해주면서 진행해야함. */ 
            const left = section.querySelector(".left");
            const right = section.querySelector(".right");
            const cards = section.querySelectorAll(".card");
            
            /* 카드가 1~4개라면 어떻게 해야 할까!!!!! ㅠㅠ  -> 자바스크립트 통해서 카드UI 3~4개일때 p4부터 시작되도록 바꿔야함. 관련 공부: 중앙 인덱스  */
            const total = cards.length;
            const centerOffset = 5; //css에서 메인으로 두는 클래스 번호가 p5
            const startNum = centerOffset - Math.floor (total / 2); //여기서 시작 번호룰 계산한다.
        /*카드 개수가 적어도 항상 p5부터 시작- 포함하도록 배열 생성. -> 1) 카드 개수부터 확인 2) css에서 P5 (클래스 번호) 중앙으로 지정. 3)시작하는 번호를 계산-가운데에 있는 수가 중앙이니까. total /2 가 되는 것. 4) 배열 요소들은 총 배열 개수들: 전체 , p의 순번값은 차례대로 배열+중앙에있는 배열번째 이렇게 진행*/ 
        
            /*메인에서는 슬라이드를 매끄럽게 하고자 클래스를 지정했었고, 여러번 적용 시키려고 만들고자 배열을 자동으로 만들어주도록 유도ㅠ.. 이거 어려우니까 관련 공부하거나 외우기  */
        let positions = Array.from({ length : total  }, (_, i) => `p${ i + startNum }`);

        function updateCards(){
            
            cards.forEach((card, index)=>{
                //여기서는 이전 함수 선언에서는 지정해왔던 클래스 삭제했었는데 여기서는 정규식을 활용해서 삭제한다. (일정수 증가하는 방식으로 p번호가 생기니까. -> p로 시작하고 숫자가 붙은 클래스만 정확히 찾아 지워준다. 다만 클래스가 섞여있어도 p1만 꼭 골라 지움. )
                const clearClass = card.className.replace(/\bp\d+\b/g, "").trim(); 
                card.className = clearClass;
                //여기서 다시 p배열 재부여. 

                if(positions[index]){
                    card.classList.add(positions[index]);
                }
            });
        }
    left.addEventListener("click", (e)=>{
        e.preventDefault();
        positions.unshift(positions.pop());
        updateCards();
    });
    right.addEventListener("click", (e)=>{
        e.preventDefault();
        positions.push(positions.shift());
        updateCards();
    });
    updateCards();

    /*장난아님. 마우스 드래그로 카드가 움직임. 모르던 거니까 이거 관련 공부하기*/
    let startX = 0;
    let isDragging = false;

    card_cont.addEventListener("mousedown", (e) => {
        startX = e.pageX; 
        isDragging = true;
    });

    card_cont.addEventListener("mouseup", (e) =>{
        if (!isDragging) return; 

        const endX = e.pageX;
        const diff = startX - endX;  
        
        if(diff > 50) {
            positions.push(positions.shift());
            updateCards();
        }
        isDragging = false;
    });
    card_cont.addEventListener("mouseleave", () => {
        isDragging = false;
    });
});