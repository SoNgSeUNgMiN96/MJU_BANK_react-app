import React from "react";
import Card from "./Card";
import './card.css';

function Newcard() {
    return (
            <div className = "fromleft">
                <Card/>
                <h2 className="left20">카드 발급</h2>
                <form className = "left20">
                    카드 종류:
                    <input type="text" name="nickname" requied/>
                    <br />
                    <input type="submit" />
                </form>
                <input className = "left20"type="text" name="nickname" requied/>
            </div>
    );
  }
  
  export default Newcard;
  