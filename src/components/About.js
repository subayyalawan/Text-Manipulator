// import React, { useState } from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.theme === "dark" ? "#212529" : "white",
          color: props.theme === "dark" ? "white" : "black",
        }}>
        <h1>this is a heading</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={{
                  backgroundColor: props.theme === "dark" ? "#212529" : "white",
                  color: props.theme === "dark" ? "white" : "black",
                }}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                {" "}
                Accordion Item #1
              </button>
            </h2>
            <div
              style={{
                backgroundColor: props.theme === "dark" ? "#30353b" : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={{
                  backgroundColor: props.theme === "dark" ? "#212529" : "white",
                  color: props.theme === "dark" ? "white" : "black",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                {" "}
                Accordion Item #2
              </button>
            </h2>
            <div
              style={{
                backgroundColor: props.theme === "dark" ? "#30353b" : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}