import {Link} from "react-router-dom";
import mjuLogo from './mjuLogo.png';
import './App.css';

function Header() {

    
  
    return (
          <div className = "header">
            <img src={mjuLogo} className="mjuLogof" alt="mjuLogod" />
            <h1 className="mjuMain"> 명지은행</h1>
          
            <button className = "account_result" >
              <Link to="/">Home</Link>
            </button>

            <button className = "account_result" >
              <Link to="/account">계좌</Link>
            </button>
  
            <button className = "card_result" >
              <Link to="/card">카드</Link>
            </button>
  
            
            <button className = "createId">
              <Link to="/createId">회원가입</Link>
            </button>
  
            <button className = "login" >
              <Link to="/login">로그인</Link>
            </button>
          </div>
    );
  }
  
  export default Header;
  
