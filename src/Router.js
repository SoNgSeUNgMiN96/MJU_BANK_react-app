import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function Router() {

    return (
        <BrowserRouter className="mju-group">
            <Header />
            <Routes>
                <Route exact = {true} path="/login" element={<Login/>}/>
                <Route render={() => <div>에러페이지</div>} />
            </Routes>
        </BrowserRouter>
    );
  }
  
  export default Router;