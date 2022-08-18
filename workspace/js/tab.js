// 버튼 0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼 0 클래스에 orange 추가
// 모든 div에 붙은 show 클래스명 제거
// div 0 클래스에 show 추가

// 좋은관습 == 반복되는 셀렉터는 변수에 담아서 활용하자 (속도향상)
let btn = $(".tab-button");
let tab = $(".tab-content");

function TAB(num) {
  btn.removeClass("orange");
  btn.eq(num).addClass("orange");
  tab.removeClass("show");
  tab.eq(num).addClass("show");
}

// data-id 숨겨놓고 찾는 방식(제일 짧은 테크닉)
$(".list").click(function (e) {
  TAB(e.target.dataset.id);
});

// if 문으로 반복
//     if (e.target == document.querySelectorAll('.tab-button')[0]){
//         TAB(0)
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[1]){
//         TAB(1)
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[2]){
//         TAB(2)
//     }
// })

// for 반복문
// 복붙할 횟수 var로 하면 안됨
// for (let i = 0; i < btn.length; i++){
//     btn.eq(i).on('click',function(){
//         TAB(i)
//         })
//     }

// $(".tab-button").eq(1).on('click',function(){
//     $(".tab-button").removeClass('orange');
//     $(".tab-button").eq(1).addClass('orange');
//     $(".tab-content").removeClass('show');
//     $(".tab-content").eq(1).addClass('show');
// });

// $(".tab-button").eq(2).on('click',function(){
//     $(".tab-button").removeClass('orange');
//     $(".tab-button").eq(2).addClass('orange');
//     $(".tab-content").removeClass('show');
//     $(".tab-content").eq(2).addClass('show');
// });
