import React, { Component } from "react";
import "./Cards.css";
export class Cards extends Component {
  render() {
    return (
      <div>
        <h2
          className="Head"
          style={{ marginTop: "10px", fontFamily:"cursive", color: "blue" }}
        >
        Featured Business Events
        </h2>
        <div className="card-container">
          <div className="card" style={{ backgroundcolor: "red" }}>
            <img
              src="data:image/jpeg;base64,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"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Leadership Summit</h5>
              <p className="card-text">
              Unlock your leadership potential and drive success in this immersive business summit.
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
          <div className="card" style={{ backgroundcolor: "red" }}>
            <img
              src="data:image/jpeg;base64,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"
              style={{ width: "100%", height: "300px" }}
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Tech Innovation Expo</h5>
              <p className="card-text">
              Discover cutting-edge tech solutions shaping the future of business at this premier event.
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
          <div className="card" style={{ backgroundcolor: "red" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRq3KXZ8XPAMEgY_lUsSuOrphC-j81tddhKA&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Global Business Forum</h5>
              <p className="card-text">
              Explore international opportunities and insights with industry experts at this influential forum
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
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nA_59tEg0ROMTNknd2TwpuTdrUwPCrmc3Q&usqp=CAU"
              className="card-img-top"
              style={{ width: "100%", height: "300px" }}
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Entrepreneurship Bootcamp</h5>
              <p className="card-text">
              Launch your business journey with practical skills and mentorship in this intensive program
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
          <button
            type="button"
            class="btn btn-link"
            style={{ textAlign: "right", fontSize: "20px" }}
          >
            Show All Events
          </button>
        </div>
      </div>
    );
  }
}

export default Cards;
