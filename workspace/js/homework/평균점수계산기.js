function 함수(arr, b) {
  var result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  if (result / arr.length < b) {
    console.log("점수오름");
  } else {
    console.log("나락");
  }
}

함수([2, 3, 4], 7);
