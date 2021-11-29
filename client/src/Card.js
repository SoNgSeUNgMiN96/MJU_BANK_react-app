import React from "react";
import { Link } from "react-router-dom";
import './card.css';

function Card({match}) {
    return (
    
        <label for="sidebtn" class="sidebtn">

            <span>
                <button className = "accountSee">
                    <Link to="/newcard">카드 발급</Link>
                </button>
            </span>
            <span>
                <button className = "accountSee" >
                    <Link to="/viewcard">카드 조회</Link>
                </button>
            </span>
        </label>
    );
  }
  
  export default Card;
  