import mjuLogo from './mjuLogo.png';
import './App.css';

function Header() {

    const accountClick= () =>{
  
    }
    const cardClick= () =>{
  
    }
    const createIdClick = () =>{

    }

    const loginClick = () =>{
        return (
            <h1>test</h1>
        );
    }
  
    return (
          <div className = "header">
            <img src={mjuLogo} className="mjuLogof" alt="mjuLogod" />
            <h1 className="mjuMain"> 명지은행</h1>
          
            <button className = "account_result" onClick={accountClick}>
              계좌
            </button>
  
            <button className = "card_result" onClick={cardClick}>
              카드
            </button>
  
            
            <button className = "createId" onClick={createIdClick}>
              회원가입
            </button>
  
            <button className = "login" onClick={loginClick}>
              로그인
            </button>
          </div>
    );
  }
  
  export default Header;
  
