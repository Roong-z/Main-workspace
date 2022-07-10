// 버튼 0 누르면 
// 모든 버튼에 붙은 orange 클래스명 제거 
// 버튼 0 클래스에 orange 추가
// 모든 div에 붙은 show 클래스명 제거
// div 0 클래스에 show 추가

// 좋은관습 == 반복되는 셀렉터는 변수에 담아서 활용하자 (속도향상)
let btn = $(".tab-button");
let tab = $(".tab-content");

// for 반복문
            // 복붙할 횟수 var로 하면 안됨
    for (let i = 0; i < btn.length; i++){
        btn.eq(i).on('click',function(){
            btn.removeClass('orange');
            btn.eq(i).addClass('orange');
            tab.removeClass('show');
            tab.eq(i).addClass('show');
            });
        }

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