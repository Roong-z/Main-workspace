// 10프로 할인인데 첫구매시(true) 1.5달러 추가할인

function 함수(a,b){
    var result = (a * 0.9).toFixed(2);
    if(b == true){
        result = result -1.5;
    }
    return parseFloat(result)

}

console.log(함수(70,false))

console.log(함수(21.24, false))

console.log(함수(10,true))