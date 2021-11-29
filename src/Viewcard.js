import React from "react";
import Card from "./Card";
import './card.css';
import { TableRow , TableCell } from "@material-ui/core";

function Viewcard() {
    return (
            <div className = "fromleft">
              <Card/>
              <h2 className="left20">카드 조회</h2>
            </div>
    );
  }
  
export default Viewcard;
  