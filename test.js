const elCalc_input = document.querySelectorAll('.calc input')
const elCalc_btn = document.querySelector('.calc button')

const elCalc_result = document.querySelector('.result')
const elCalc_text = document.querySelectorAll('.result dd')

// * 필요명령
// - value onclick innerHTML
// classList.add('active')
// - +, /


elCalc_btn.onclick = function(){
    let html = Number(elCalc_input[0].value);
    let css = Number(elCalc_input[1].value);
    let js = Number(elCalc_input[2].value);

    let total = html+css+js;
    let avg = total / 3;
    let msg = '';

    if(avg >= 60) {
        msg = '성공';
    }else{
        msg = '실패';
    }

    elCalc_text[0].innerHTML = total;
    elCalc_text[1].innerHTML = avg.toFixed(2);
    elCalc_text[2].innerHTML = msg;

    elCalc_result.classList.add('active');
}






// 전진후진

const elStyle_btn = document.querySelectorAll('.count button');
const elStyle_img = document.querySelector('.count img');

let styleCount = 0;

elStyle_btn[0].onclick = function(){
        if(styleCount == -300){
            alert('더이상 뒤로 못가!');
            return
        }
        styleCount-=100;
        elStyle_img.style = `transform:translateX(${styleCount}px)`;
        
    }
elStyle_btn[1].onclick = function(){
        if(styleCount == 300){
            alert('더이상 앞으로 못가!');
            return
        }
        styleCount+=100;
        elStyle_img.style = `transform:translateX(${styleCount}px)`;
    }





// attribute

const elAttr_large = document.querySelector('.large img');
const elAttr_small = document.querySelectorAll('.small img');

elAttr_small.forEach(function (img) {
    img.onclick = function () {
        // 작은 이미지 값 src 받기
        let smallSrc = this.src;
        // 큰 이미지가 선택한 작은 이미지로 값 변경
        elAttr_large.src = smallSrc;

        // 모든 작은 이미지의 클래스 삭제
        for(let i=0; i<4; i++){
            elAttr_small[i].classList.remove('active');
        }
        // 선택한 이미지에 active 클래스 추가
        img.classList.add('active');
    }
})
