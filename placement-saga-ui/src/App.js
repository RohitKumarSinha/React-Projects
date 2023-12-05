import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";
import {render} from "react-dom";
import Navbar from "./component/Navbar";
import Body from "./component/Body";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <hr />
      <div className="row">
        <div class="col-sm-3 col-md-4 col-lg-2">
          <img src="/image/adobe.png" class="img-fluid logo" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-2">
          <img src="/image/amazon.png" class="img-fluid" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-2">
          <img src="/image/google.png" class="img-fluid" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-2">
          <img src="/image/microsoft.png" class="img-fluid" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-2">
          <img src="/image/flipkart.png" class="img-fluid" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-2">
          <img src="/image/paytm.png" class="img-fluid" />
        </div>
      </div>
      {/* 
      <img src="/image/google.png" class="img-fluid" />
      <img src="/image/microsoft.png" class="img-fluid" />
      <img src="/image/flipkart.png" class="img-fluid" />
      <img className="image" src="/image/paytm.png" class="img-fluid" /> */}
      <p className="information">
        Every topic you need for Your <br />{" "}
        <span className="topic">coding interview</span>
      </p>
      <div className="row main">
        <div class="img-hover-zoom col-sm-4 col-md-3 col-lg-2">
          <img src="/image/array.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/sorting.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/strings.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/linked-list.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/stack.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Trees.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Dynamic.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Graphs.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/searching.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Recursion.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Binary.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Mathematical.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Bit.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Heaps.JPG" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Hashing.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Back.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Tries.png" alt="" class="img-fluid"></img>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <img src="/image/Famous.png" alt="" class="img-fluid"></img>
        </div>
      </div>
      {/* <div className="col-lg-2 card card-pink">
        <p className="text">Trees</p>
      </div>
      <main>
        <div className="card card-pink">
          <p className="text">Dynamic Programming</p>
        </div>
        <div className="card card-lightblue">
          <p className="text">Graphs</p>
        </div>
        <div className="card card-orange">
          <p className="text">Searching</p>
        </div>
        <div className="card card-red">
          <p className="text">Recursion</p>
        </div>
        <div className="card card-blue">
          <p className="text">Binary Search Tree</p>
        </div>
        <div className="card card-cyan">
          <p className="text">Mathematical</p>
        </div>
      </main>
      <main>
        <div className="card card-cyan">
          <p className="text">Bit-Manipulation</p>
        </div>
        <div className="card card-blue">
          <p className="text">Heaps</p>
        </div>
        <div className="card card-red">
          <p className="text">Hashing</p>
        </div>
        <div className="card card-orange">
          <p className="text">Backtraking</p>
        </div>
        <div className="card card-lightblue">
          <p className="text">Tries</p>
        </div>
        <div className="card card-pink">
          <p className="text">Famous Algorithms</p>
        </div>
      </main> */}
    </React.Fragment>
  );
};

export default App;
