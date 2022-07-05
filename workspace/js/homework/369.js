// 철수의 바보 369 게임 (3의 배수에 박수쳐라)

/*function 삼육구게임 (num){
    if( num % 3 == 0){
        console.log('박수');
    }
    else{
        console.log('통과');
    }
}
삼육구게임(15);*/

// 기본 + 9의 배수에서는 박수2번

function 삼육구구게임 (num){
    if( num % 9 == 0){
        console.log('박수박수')
    }
    else if( num % 3 == 0){
        console.log('박수')
    }
    else{
        console.log('통과')
    }
}

삼육구구게임(333);