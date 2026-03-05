        /*선언 넣어주고*/
        const card_cont = document.querySelector(".card_cont");
        const left = document.querySelector(".left");
        const right = document.querySelector(".right");
            /*nth-of-type 형태로 넣었을때 진행시 
            마지막 카드를 맨앞으로 이동시킨대요 이전, 다음 버튼 진행시, 이전 버튼은 순서를 명확하게 뒤집어주기 위해 append가 아닌, pretend로 바꿔준다. */
        /*left.addEventListener("click", (e)=>{
            e.preventDefault(); //a태그 링크 작동 방지한다고 함 
            const cards = document.querySelectorAll(".card");
            card_cont.prepend(cards[cards.length-1]);
        });*/
        /*첫번째 카드를 맨 뒤로 이동시킨대요*/
        /*right.addEventListener("click", (e)=>{
            e.preventDefault(); 
            const cards = document.querySelectorAll(".card");
            card_cont.append(cards[0]);
        });*/
        /*class로 배열을 만든뒤 각각 넣어서 진행시 */
        let positions = ["p1", "p2","p3", "p4", "p5", "p6", "p7","p8","p9"];

        function updateCards(){
            const Allcards = document.querySelectorAll(".card");
            Allcards.forEach((card, index)=>{
                card.classList.remove("p1","p2","p3","p4","p5","p6","p7","p8","p9");
                card.classList.add(positions[index]);
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