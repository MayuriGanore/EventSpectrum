import React, { Component } from "react";
import "./Cards.css";
export class Cards extends Component {
  render() {
    return (
      <div>
        <h2
          className="Head"
          style={{ marginTop: "10px", fontFamily:"cursive", color: "blue"}}
        >
          Technical Events
        </h2>
        <div className="card-container">
          <div className="card" style={{ backgroundcolor: "red" }}>
            <img
              src="https://signalprocessingsociety.org/sites/default/files/uploads/images/community_involvement/TC_pgs.jpg"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Tech Guru</h5>
              <p className="card-text">
                Exploring the transformative impact of artificial intelligence
                on modern healthcare systems
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3dw3OHlOjJyCOfbYCoBzViXdhQrOqtDxFg&usqp=CAU"
              style={{ width: "100%", height: "300px" }}
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Blockchain Seminar</h5>
              <p className="card-text">
                Unlocking the potential of blockchain technology for secure,
                transparent, and decentralized solutions.
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4LciHGYCCOVagWWPaPsy1m1Tx2l27nWbYhg&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Cybersecurity Summit</h5>
              <p className="card-text">
                Dive into the world of Kathak, where storytelling meets
                enchanting rhythms,Join us!!
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
              src="data:image/jpeg;base64,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"
              className="card-img-top"
              style={{ width: "100%", height: "300px" }}
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Quantum Computing</h5>
              <p className="card-text">
                Dive into the quantum realm and harness the power of quantum
                computing,Join Us!
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
