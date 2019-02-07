import React, { Component } from "react";
import image from "./profile.jpg";
import "./sidenav.css";

class Sidenav extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("/users", {
      method: "GET"
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log("Got the data: ", data);
        this.setState({
          users: data
        });
      })
      .catch(err => {
        console.log("caught it!", err);
      });
  }

  render() {
    return (
      <div className="sidenav">
        <div className="image round fit">
          <img alt="customer profile" id="customerPhoto" src={image} />
        </div>
        <div className="navlist">
          <h4 id="customerName">{this.state.users.name}</h4>
          <a href="#profile-settings" className="button alt small fit">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </a>
          <a href="#profile-settings" className="button alt small fit">
            <i className="fas fa-info-circle" /> Profile Settings
          </a>
          <a href="#add-project" className="button alt small fit">
            <i className="fas fa-plus" /> Add Projects
          </a>
          <a href="#open-invites" className="button alt small fit">
            <i className="fas fa-inbox" /> Open Invites
          </a>
          <a href="#open-projects" className="button alt small fit">
            <i className="fas fa-folder-open" /> Open Projects
          </a>
          <a href="#completed-projects" className="button alt small fit">
            <i className="fas fa-briefcase" /> Completed Projects
          </a>
          <a
            id="hibernateButton"
            href="#hibernate"
            className="button alt small fit"
          >
            <i className="fas fa-sign-out-alt" /> Signout
          </a>
        </div>
      </div>
    );
  }
}

export default Sidenav;
