import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '고양이 맛집';
  let [글제목, b] = useState(['고양이 양말 추천', '츄르 추천', '캣닢향 중독'])
  let logo = 'ReactBlog';





  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style = { {color : 'white'} }>{ logo }</h4>
      </div>
        <div className = "list">
          <h4>{ 글제목[0] }</h4>
        <p>7월 18일 발행</p>
        </div>
        <div className = "list">
          <h4>{ 글제목[1] }</h4>
        <p>7월 18일 발행</p>        
        </div>
        <div className = "list">
          <h4>{ 글제목[2] }</h4>
        <p>7월 18일 발행</p>
        </div>
    </div>
  );
}

export default App;
