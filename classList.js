// 문서의 .toggle li 태그를 선택하는 elFaq_q라는 변수를 만든다.
const elFaq_q = document.querySelectorAll(".toggle li");

// 변하는 값인 keep을 let으로 선언한다.
let keep = 0;

// forEach 반복문을 사용하여 elFaq_q를 열고 닫을 수 있게 한다.
// 반복은 총 3번 발생한다.
elFaq_q.forEach(function (li, key) {

    // ※ 클릭한 li만 열고 다른 li는 닫기
    // li를 클릭하면 함수를 실행하는데,
    li.onclick = function () {
        // !을 붙이면 부정으로 간주한다.
        // 만약 li가 active라는 클래스를 지니고 있지 않는다면
        if (!li.classList.contains("active")) {
        // elFaq_q에게서 active 클래스를 삭제하는 것을 반복시킨다.
        elFaq_q.forEach(function (removeLi) {
            removeLi.classList.remove("active");
        });
        }

    // elFaq_q:li li들에게서 active들을 지움.
    // elFaq_q[keep].classList.remove('active');

    // li에게 active클래스의 toggle값을 줌
    this.classList.toggle("active");

    // keep의 값을 내가 클릭한 key값으로 변환
    // keep = key;
    };
});


// ※ tab menu

const elTab_btn = document.querySelectorAll('.tab-head button');
const elTab_contents = document.querySelectorAll('.tab-body div');

// ele -> elTab_btn 값 idx -> elTab_btn의 인덱스값(배열)
elTab_btn.forEach(function(btn,idx){
    btn.onclick = function(){

        elTab_btn.forEach(function(ele,k){
            elTab_btn[k].classList.remove('active');
            elTab_contents[k].classList.remove('active');
        });

        // btn->this 에 'active'라는 클래스를 추가한다.
        this.classList.add('active');
        // elTab_contents의 idx 인덱스값에 'active'라는 클래스를 추가한다.
        elTab_contents[idx].classList.add('active');
    }
})






// ※ popup창 js

// data속에 이미지랑 타이틀을 배열로 집어넣는다
const data = [
    {
    title : '토끼',
    imgUrl : './img/ra.jpg'
    },
    {
    title : '코알라',
    imgUrl : './img/co.jpg'
    },
    {
    title : '여우',
    imgUrl : './img/fox.jpg'
    },
    {
    title : '호랑이',
    imgUrl : './img/ho.jpg'
    }
];

// .gallery ul 태그를 선택하는 변수 elUl 생성
const elUl = document.querySelector('.gallery ul');

// 내용을 집어넣을 수 있는 변수 tagElement 생성
let tagElement = '';

// tagElement에 li의 데이터 인덱스값이 차례대로 들어가고,
// 그 안에 이미지가 순서대로 들어가는 forEach 반복문을 만든다.
// 만든 값은 누적이 될 수 있게 tagElement에 += 연산자로 집어넣기.
data.forEach(function(item, idx){
    tagElement += `<li data-num="${idx}"><img src="${item.imgUrl}" alt=""></li>`
})
// elUl 변수에 tagElement을 넣는다.
elUl.innerHTML = tagElement;

// li와 팝업 변수 선언
const elItems = document.querySelectorAll('.gallery li')
const elPopup = document.querySelector('.popup')

// li 반복문을 만드는데,
elItems.forEach(function(item, idx){
    // < this.dataset.num -> item의 데이터값을 가져옴. >
    //  item(elItems)를 클릭하면, num이라고 선언한 item의 데이터 인덱스값이
    // 팝업(elPopup)에 들어가게 되는 div를 수정시킨다.
    item.onclick = function(){
        let num = this.dataset.num;
        elPopup.innerHTML =
        // (data[num]->li의 값의 imgUrl-> 이미지를 가져옴)
        // 마찬가지로 title도 변경시킨다.
        `<div>
        <img src="${data[num].imgUrl}" width="400px">
        <p>${data[num].title}</p>
        </div>`;
        // 팝업이 보여질 수 있도록 active 클래스를 추가한다.
        elPopup.classList.add('active');
    }
})

// ※ 다른 곳을 누르면 팝업창이 닫히게 하기
// target(이벤트가 발생한 대상(요소) 얻기)

// e.target.classList.contains('.popup')
// ㄴ 내가 선택한 요소에 .popup 이란 클래스가 포함되어 있나?
// ㄴ 답을 true, false로 알려줌(contains 역할)

// e.target.className -> 가진 클래스 이름 모두 불러오기

// elPopup을 클릭했을때 만약 내가 선택한 요소가
// popup 클래스를 포함하고 있다면, elPopup에서 active 클래스를 삭제하라
elPopup.onclick = function(e) {
    if(e.target.classList.contains('popup')){
        elPopup.classList.remove('active');
    }
}