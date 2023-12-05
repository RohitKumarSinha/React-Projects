import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <section className="body-container">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <article>
            Master Your <br /> Destiny With
            <h3>Placement Saga</h3>
            <a class="gradient-button gradient-button-4">
              View Sample Question
            </a>
          </article>
        </div>
        <div className="col-sm-12 col-lg-6">
          <article>
            <img src="/image/right-image.jpg" width="700px!important" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Body;
