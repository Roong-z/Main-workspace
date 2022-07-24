/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import $ from 'jquery';

function App() {

  let post = '고양이 맛집';
  const [글제목, 제목변경] = useState(['츄르 추천', '캣닢향 중독', '고양이 양말 추천'])
  let logo = 'ReactBlog';
  let [좋아요, 좋아요증가] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style = { {color : 'white'} }>{ logo }</h4>
      </div>

          {/* 가나다순 정렬 sort사용법 */}
          <button onClick={ ()=>{
            let 제목정렬 = [...글제목];
            제목정렬.sort();
            제목변경(제목정렬)
          }}>가나다순 정렬</button>

          {/* 카피해서 해야지 확장성 업 */}
          {/* [...] <<-- 괄호 벗겨주세요 */}
          <button onClick={ () => {
            let copy = [...글제목];
            copy[0] = '댕댕이 양말 추천';
            제목변경(copy);
          }}>제목변경!</button>

        {
          글제목.map(function(a, i){
            return (
            <div className = "list" key={i}>
              <h4 onClick={() => { 
                setModal(!modal); setTitle(i) }}>{ 글제목[i] } 
              <span onClick={ (e) => { e.stopPropagation();
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요증가(copy)
              }}>👍</span> { 좋아요[i] }
              </h4>
              <Date/>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                제목변경(copy)
              }}>삭제</button>
            </div>
            )
          })
        }

        <input onChange={(e)=>{ 
           입력값변경(e.target.value);
           }}
           type="text"/>

        <input onClick={()=>{
          let copy = [...글제목];
          copy.unshift(입력값);
          제목변경(copy)
        }} type="submit"/>
        
        {
          modal == true ? <Modal title={title} 글제목={글제목}/> : null
        }

    </div>
  );
}

// 다른 function 에서 데이터 가져올수 없음..
// function Title(){
//   return(
//     <h4>{ 글제목[1] } <span onClick={ () => { 두번째숫자증가(두번째숫자+1) }}>👍</span> { 두번째숫자 } </h4>
//   )
// }

function Date(){
  return (
    <p>7월 18일 발행</p>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
   </div>
  )
}


export default App;
