import telNum from './telNum.png';
import './App.css';

function Main() {
    return (
          <div className = "blueText">
              <img src = {telNum} className = "telNumf" alt = "telNumd" />
      
              <h1 className = "bestProduct"> 명지은행 고객님이 선택한 BEST 인기상품</h1>
              <p>예금 BEST : MJ내맘대로적금</p>
              <p>카드 BEST : MJ플래티넘카드</p>
         
          </div>
    );
  }
  export default Main;
