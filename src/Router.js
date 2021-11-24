import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";
import CreateId from "./CreateId";
import Account from "./Account";
import Card from "./Card";

function Router() {

    return (
        <BrowserRouter className="mju-group">
            <Header />
            <Routes>
                <Route exact = {true} path="/login" element={<Login/>}/>
                <Route exact = {true} path="/" element={<Main/>}/>
                <Route exact = {true} path="/createId" element={<CreateId/>}/>
                <Route exact = {true} path="/account" element={<Account/>}/>
                <Route exact = {true} path="/card" element={<Card/>}/>
                <Route render={() => <div>에러페이지</div>} />
            </Routes>
        </BrowserRouter>
    );
  }
  
  export default Router;