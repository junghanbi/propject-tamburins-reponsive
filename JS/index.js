// Best Item Swiper slide option
new Swiper("#best-item .swiper", {
  direction: "horizontal",
  slidesPerView: 4, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: "#best-item .swiper-prev", // 이전 버튼 선택자
    nextEl: "#best-item .swiper-next", // 다음 버튼 선택자
  },
  breakpoints: { //반응형 조건 속성
    320: { //320 이상일 경우
      slidesPerView: 1, //레이아웃 2열
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }
});

//햄버거 메뉴 클릭하면 .mo-nav등장
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.querySelector('.mo-nav');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
  isHideMenu = !isHideMenu;
  if(isHideMenu){
    menuHide.classList.add('show');
    menuToggleBtn.classList.add('active');
  }else{
    menuHide.classList.remove('show');
    menuToggleBtn.classList.remove('active');
  }
});

// search 닫기
$('.close').click(function(){
  $('#search').stop().fadeOut();
});
// search 열기
// const Long = $('.open')
const searchE2 = document.querySelector('.inputBox');

$('.open').click(function(){
  $('#search').stop().fadeIn();
  searchE2.classList.add('long');
});
//돋보기 버튼
const searchEl = document.querySelector('.open');

searchEl.addEventListener('click',function(){
  searchEl.focus();
});

//focus가 들어가면 class="move"추가
searchEl.addEventListener('focus', function(){
  searchEl.classList.add('move');
});

//focus가 나가면 class="move"제거
searchEl.addEventListener('blur', function(){
  searchEl.classList.remove('move');
});



// Scroll Magic
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement : spyEl, //보여짐 여부를 감지할 요소를 지정
    triggerHook : 0.8,
  })
  // show 넣었다가 뺏다가
  // .setClassToggle(토글할요소,'넣었다 뺄 class 이름')
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});

function navigo (){
  const header = document.querySelector('header');
  const headerheight = header.clientHeight;
document.addEventListener('scroll', onScroll, { passive: true });
 function onScroll () {
     const scrollposition = pageYOffset;
   const nav = document.querySelector('header');
   if (headerheight<=scrollposition){
     nav.classList.add('fix')
   }
   else {
     nav.classList.remove('fix');
   }
 } 
  
}
navigo()