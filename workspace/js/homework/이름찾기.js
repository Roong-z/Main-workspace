var 출석부 = ["흥민", "영희", "철수", "재석", "철수"];

function 이름찾기(name) {
  for (i = 0; i < 5; i++) {
    if (name == 출석부[i]) {
      console.log("있어요");
    }
  }
  return;
}

이름찾기("영희");
