import React, { Component } from "react";
import "./Cards.css";
export class Cards extends Component {
  render() {
    return (
      <div>
        <h2 className="Head" style={{ marginTop: "10px", fontFamily:"cursive",color:'blue'}}>
          Latest Events in @Location
        </h2>
        <div className="card-container">
          <div className="card" style={{backgroundcolor:"red"}}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjJMKMKszS1_yvkoYAemCDXXyHvu4w_FLpg&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Stay Social</h5>
              <p className="card-text">
                Join us for an unforgettable evening of laughter and connection
                at our upcoming social event
              </p>
              <div
                className="buttons"
                style={{ justifyContent: "space-between" }}
              >
                <button
                  className="btn btn-primary"
                  style={{ justifyContent: "start" }}
                >
                  More Info
                </button>
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px" }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="card" style={{backgroundcolor:"red"}}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnX96kfQXcsbj2wveWTb4-xUXZBTHR0uebA&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Let's Dance</h5>
              <p className="card-text">
                Grab your feet and get ready to dance the night away in a
                mesmerizing rhythm with Us
              </p>
              <div
                className="buttons"
                style={{ justifyContent: "space-between" }}
              >
                <button
                  className="btn btn-primary"
                  style={{ justifyContent: "start" }}
                >
                  More Info
                </button>
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px" }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="card" style={{backgroundcolor:"red"}}>
            <img
              src="data:image/jpeg;base64,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"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Unlocking Innovations</h5>
              <p className="card-text">
                Explore cutting-edge tech trends and network and dive deep into
                innovation at 2023.
              </p>
              <div
                className="buttons"
                style={{ justifyContent: "space-between" }}
              >
                <button
                  className="btn btn-primary"
                  style={{ justifyContent: "start" }}
                >
                  More Info
                </button>
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px" }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="card" >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnx5rJLMD2yd8tX3pzhWuim5yvW_X4KAlNw&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body" >
              <h5 className="card-title">Business Symposium</h5>
              <p className="card-text">
                Unlock growth strategies and network with industry leaders at
                our Business Innovation Symposium.
              </p>
              <div
                className="buttons"
                style={{ justifyContent: "space-between" }}
              >
                <button
                  className="btn btn-primary"
                  style={{ justifyContent: "start" }}
                >
                  More Info
                </button>
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px" }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
  <button type="button" class="btn btn-link" style={{textAlign:"right",fontSize:'20px'}}>Show All Events</button>
</div>

      </div>
    );
  }
}

export default Cards;
