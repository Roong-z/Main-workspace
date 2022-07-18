/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '고양이 맛집';
  const [글제목, 제목변경] = useState(['츄르 추천', '캣닢향 중독', '고양이 양말 추천'])
  let logo = 'ReactBlog';
  let [좋아요숫자, 숫자증가] = useState(0);


  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style = { {color : 'white'} }>{ logo }</h4>
      </div>
        <div className = "list">
          
          {/* 가나다순 정렬 sort사용법 */}
          <button onClick={ ()=>{
            let 제목정렬 = [...글제목];
            제목정렬.sort();
            제목변경(제목정렬)
          }}>가나다순 정렬</button>
          <h4>{ 글제목[0] } <span onClick={ () => { 숫자증가(좋아요숫자+1) } }>👍</span> { 좋아요숫자 } </h4>
        <p>7월 18일 발행</p>

        {/* 카피해서 해야지 확장성 업 */}
        {/* [...] <<-- 괄호 벗겨주세요 */}
        <button onClick={ () => {
          let copy = [...글제목];
          copy[0] = '댕댕이 양말 추천';
          제목변경(copy);
          }}>제목변경!</button>

        </div>
        <div className = "list">
          <h4>{ 글제목[1] } <span>👍</span> { 좋아요숫자 } </h4>
        <p>7월 18일 발행</p>        
        </div>
        <div className = "list">
          <h4>{ 글제목[2] } <span>👍</span> { 좋아요숫자 } </h4>
        <p>7월 18일 발행</p>
        </div>
    </div>
  );
}

export default App;
