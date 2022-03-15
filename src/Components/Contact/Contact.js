import React, { Component } from "react";
// import CustomScrollbars from 'util/CustomScrollbars';
import Button from "@material-ui/core/Button";

import ContactPopUp from "./ContactPopUp";
export class contact extends Component {
  //constructor
  constructor() {
    super();
    this.state = {
      drawerState: false,
      addContactState: false,
    };
  }
  onAddContact = () => {
    this.setState({ addContactState: true });
  };
  onContactClose = () => {
    this.setState({ addContactState: false });
  };

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState,
    });
  }
  render() {
    console.log("loggedState", this.state.addContactState);
    return (
      <>
        <div className="module-side-content">
          <div className="module-add-task"  >
            <Button
              className="jr-btn btn-block"
              variant="contained"
              color="primary"
              aria-label="add"
              align="center"
              onClick={this.onAddContact}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
        <ContactPopUp
          open={this.state.addContactState}
          onContactClose={this.onContactClose}
        />
      </>
    );
  }
}

export default contact;
