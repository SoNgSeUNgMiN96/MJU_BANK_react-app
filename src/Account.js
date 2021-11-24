import React from "react";
import './Account.css';


function Account() {
    return(
        <div className="accountSee">  
         
          <input type="button" className ="accountSee" value="계좌조회"/> <br></br>
        
          <div>
          <input type="button" className="accountMake" value="계좌개설"/><br></br>
          <input type="button" className="trade" value="거래내역"/><br></br>
          <input type="button" className="deposit" value="입금하기"/><br></br>
          <input type="button" className="withdraw" value="출금하기"/>
          </div>
        
        </div>
    );
    
  }
  
  export default Account;
  