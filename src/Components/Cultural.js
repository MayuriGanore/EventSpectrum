import React, { Component } from "react";
import "./Cards.css";
export class Cards extends Component {
  render() {
    return (
      <div>
        <h2 className="Head" style={{ marginTop: "10px", fontFamily:"cursive", color:'blue'}}>
          Featured Cultural Events 
        </h2>
        <div className="card-container">
          <div className="card" style={{backgroundcolor:"red"}}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbAeWLCCDrRNX4pR1fgU5xFGb_0meWiIy384C9Jj_iftAT5LlhfjSYyTfitHCK3Ct7GA&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Garba Extravaganza</h5>
              <p className="card-text">
              Celebrate the festival with energetic Garba dance, music, and vibrant cultural festivities
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0Eslotv7_5WGRa8SC_fEfpzG71WQu9DeNA&usqp=CAU"
              className="card-img-top"
              style={{width:'100%',height:'300px'}}
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAedm9Wf0yp1XNr6X5ymPZETLNK3dz57r8AQ&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Kathak Elegance Unveiled</h5>
              <p className="card-text">
              Dive into the world of Kathak, where storytelling meets enchanting rhythms,Join us!!
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvol0TqY-oadUXizRx4sk4UsEWA_KDU7QkfQ&usqp=CAU"
              className="card-img-top"
              style={{width:'100%',height:'300px'}}
              alt="Card 2"
            />
            <div className="card-body" >
              <h5 className="card-title">A Night of Jazz Dance</h5>
              <p className="card-text">
              Get your groove on with jazz-inspired moves in an electrifying dance extravaganza!              </p>
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
