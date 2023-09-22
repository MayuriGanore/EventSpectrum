import React, { Component } from "react";
import "./Cards.css";
export class Cards extends Component {
  render() {
    return (
      <div>
        <h2 className="Head" style={{ marginTop: "10px", fontFamily:"cursive", color:'blue'}}>
          Featured Social Events
        </h2>
        <div className="card-container">
          <div className="card" style={{backgroundcolor:"red"}}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqZZCxo6bIzCyDBJeWNU4hG-AHyuMUmFEVw&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLx_5zjfD7VrHmghhQ69qy3Lc7Op2lNZg8AGDf14tj2v8ckZjah9XQFn-KUa3sncrXtU&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Stay Connected</h5>
              <p className="card-text">
              Join us for a night of fun, friends, and unforgettable memories,Don't Miss this chance
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrSEYGnVL9qpKZclTOVa8Ns21YXiQv7RtTA&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Social Media Webinar</h5>
              <p className="card-text">
              Learn top social strategies in our interactive online event.Get Ready and Join us.
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrxOs6HI4Xl2OrWu6a8kqVWDDn1kp8Y4l4w&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body" >
              <h5 className="card-title">Influencer Insights Live</h5>
              <p className="card-text">
              Join the conversation with top influencers. Get inspired and connect with more and more people!
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
