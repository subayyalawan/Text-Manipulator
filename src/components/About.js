export default function About(props) {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.theme === "dark" ? "#212529" : "white",
          color: props.theme === "dark" ? "white" : "black",
        }}>
        <h1>About Text Manipulator</h1>
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
                Easy to Use
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
                <strong>Our Text Manipulator is easy to use. </strong> simply
                you just have to copy and paste a paragrah or a sentence, no
                matter how much its length is. Our app will tell the the eact
                word counts, alphabet count and timeto read it.
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
                convert text
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
                <strong>
                  You can convert your text to upper and lower case.
                </strong>{" "}
                Simply just copy your text and press the "To Upper Case" button
                to convert it to Upper case, and press "TO Lower Case" to
                convert it to lower case. You can also copy whole text from the
                "Copy" button
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
                More Features In Future
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
                <strong>
                  More Features</strong> We will keep updating this app
                wth more feature in the future. This is just a practice project
                for my full stack developer journey.
                <br /> <strong>Developed by Shibly</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
