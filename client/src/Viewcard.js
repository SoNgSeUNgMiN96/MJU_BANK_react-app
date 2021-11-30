import React, { Component } from 'react';
import Card from "./Card";
import './card.css';



class Viewcard extends Component {

  state = {
    card : ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({card :res}))
      .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/api/viewcard');
    const body = await response.json();
    //console.log(response);
    return body;
  }

  render(){
    return  (
      <div className = "fromleft">
        <Card/>
        <h2 className="left20">카드 조회</h2>
            {this.state.card ? this.state.card.map(c =>{
              return ( 
                <div>
                  <p className="left20">고객 이름 : {c.client_name}</p>
                  <p className="left20">고객 주민등록번호 : {c.client_registration_number}</p>
                </div>
              )
            }): "null"}
      </div>
    );
  }
}

export default Viewcard;
  