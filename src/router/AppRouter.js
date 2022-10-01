import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Life from "../pages/Life"
import Mine from "../pages/Mine"
import Shop from "../pages/Shop"
import NotFound from "../pages/NotFound"


export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/life" element={<Life />}></Route>
                    <Route path="/mine" element={<Mine />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route element={<NotFound />}></Route>
                </Routes>
            </Router>
        )
    }
}