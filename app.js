'use strict';

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index){ // 지정된 순서의 index에 따라 slide의 left의 100%값을 차등하여 주려고 index 파라미터를 전달한 거.
  // left값을 100%씩 차등하게 줘서 슬라이드 띠를 만드려는 거
  slide.style.left = `${index * 100}%` // 항상 element.style로 접근해서 스타일값을 할당해주려면 `${}`템플릿 리터럴이나 문자열로 할당해줘야 함.
});

// 이 버튼에 의해서 바뀌는 counter값을 이용해서 slide의 translateX() 값을 얼마나 이동시킬지 컨트롤할거임.
let counter = 0;

nextBtn.addEventListener('click', function(){
  counter++;
  carousel(); // 버튼을 누를때만 슬라이드 띠를 움직이는 carousel 함수를 호출해야 함.
});
prevBtn.addEventListener('click', function(){
  counter--;
  carousel();
});

function carousel(){
  // working with slides
  /*
  if (counter === slides.length) { 
    // 즉, 카운터 값이 슬라이드 노드리스트(= 4)의 개수와 같다? 
    // 마지막 슬라이드가 슬라이더 컨테이너에 위치한 상태(counter = 3)에서 next버튼을 한번 더 눌러서(counter = 4) 카운터 값이 하나 더 증가했다는 뜻!
    
    counter = 0; 
    // 즉, 마지막 슬라이드에서 next버튼을 한번 더 누르면 counter = 0으로 초기화해라. 즉, 슬라이드 띠의 위치를 초기화해라는 뜻.
  }
  if (counter < 0) {
    // 즉, 카운터 값이 0보다 작아졌다는 것은, 
    // 슬라이드 띠가 초기화된 상태(counter = 0)에서 prev버튼을 몇 번 더 눌렀다는 뜻 (counter = -1 or -2, -3, ...)

    counter = slides.length - 1; 
    // 이럴 경우, 카운터값을 슬라이드 노드리스트 개수에 -1 한 값을 넣어라(counter = 3) 
    // 즉, 마지막 슬라이드가 보이는 곳으로 슬라이드 띠의 위치를 옮기라는 뜻.
  }

  요런 방법이 한 가지가 있고~
  */

  // working wuth buttons
  // 이거는 아예 사용자가 슬라이드 띠가 순환을 못하도록 특정 슬라이드에서 버튼을 감추는 방법임.
  if (counter < slides.length - 1) { // 그니까 counter < 3 일때는 next버튼을 보이게 하고
    nextBtn.style.display = 'block';
  } else { // 3이 넘어가면, 그니까 마지막 슬라이드에서 next 버튼을 클릭하면 그 버튼을 감추라는거지... 사용자가 아예 넘기지 못하게.
    nextBtn.style.display = 'none'; 
  }

  if (counter > 0) { // 그니까 슬라이드가 두번째 장면에 놓여있는 경우부터는 prev버튼을 보여주라는 거고
    prevBtn.style.display = 'block';
  } else { // 슬라이드가 젓번째 장면에 놓여있는 경우부터는 prev 버튼을 감춰라. 사용자가 아예 버튼으로 못 넘기게.
    prevBtn.style.display = 'none';
  }

  slides.forEach(function(slide){
    // next는 ++시키고, prev는 -- 시키는 상태에서, next버튼을 누르면 슬라이드 띠가 왼쪽으로 움직이게 해서
    // 다음 슬라이드가 보이게 하려는 거니까 기본 이동방향이 왼쪽이어야 함. 그래서 마이너스 % 로 값을 할당하는 거임.
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// counter의 기본값은 0 이므로 prev버튼은 기본적으로 보이면 안되겠지.
prevBtn.style.display = 'none';
