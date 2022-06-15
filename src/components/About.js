import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState(
  //     {          // object
  //         color: "black",
  //         backgroundColor: "white",
  //         border: "1px solid black"
  //     });

  let myStyle = {
    color: props.enablemode === "dark" ? "black" : "#0091cc",
    backgroundColor: props.enablemode === "dark" ? "#0091cc" : "black",
    border: props.enablemode === "dark" ? "1px solid black" : "1px solid white",
  };

  // const [btnText, setBtnText] = useState("Enble Dark Mode");

  // const toggleStyle = () => {
  //     if (myStyle.color === "white") {
  //         setMyStyle({
  //             color: "black",
  //             backgroundColor: "white",
  //             border: "1px solid black"
  //         });

  //         setBtnText("Enble Dark Mode");
  //     }
  //     else {
  //         setMyStyle({
  //             color: "white",
  //             backgroundColor: "black",
  //             border: "1px solid white"
  //         });
  //         setBtnText("Enble Light Mode");
  //     }
  // }
  return (
    <>
      <div className="container">
        <h1
          className="my-4"
          style={{ color: props.enablemode === "dark" ? "black" : "white" }}
        >
          About TextUtils
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Numan Star
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
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
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button  collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hamad Don
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
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
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Usman Boss
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
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

      {/* <div className="container my-4">
                <button onClick={toggleStyle} type="button" className="btn btn-outline-primary">{btnText}
                </button>
            </div> */}
    </>
  );
}
