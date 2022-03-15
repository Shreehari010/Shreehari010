import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import {changeTheState} from "../../Action/checkAction";
import {contactSave} from "../../Action/checkAction";
import {validation} from "../../Action/checkAction";


class ConatactPopUp extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit =(e) =>{
   e.preventDefault();
  
    this.props.validation(this.props);
    
           // this.props.contactSave(this.props);
   //console.log("propsinpopopopopoo",this.props);
  }


  render() {
    const {onContactClose, open} = this.props;
    console.log("contact form");
    
    return (
      <>
      <Modal className="col-md-12 col-sm-12 pr-4 mr-5" toggle={onContactClose} isOpen={open} >
        <ModalHeader className="modal-box-header bg-primary text-white">
        <h7 clasname="" style={{ fontFamily: "'Times New Roman', Times, serif",
    fontWeight: "bolder",
    fontSize:"30px",
    color:"#CF5E15",
    textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)"}}>
            Syneins
          </h7>
          <div style={{float:'right'}}>
          <IconButton className="text-white"
                      onClick={onContactClose}>
            <CloseIcon/>
          </IconButton>
          </div>
        </ModalHeader>
        <div className="col-md-12">
          <form action="" className="contact-form jr-card">
            <div className="row">
              <div className="col-md-6 col-8">
                <div className="form-group">
                  <label form="firstName">Name</label>
                  <input className="form-control form-control-lg" 
                  id="firstName" 
                  name="firstName"
                  type="text"
                value={this.props.firstName}
                  onChange={(val) => {
                    this.props.changeTheState({
                      props: "firstName",
                      value: val.target.value,
                      error: "firstNameError",
                    });
                  }}
                         placeholder="First Name"/>
                          <span style={{ color: "red" }}>{this.props.firstNameError}</span>    
                </div>
              </div>

              <div className="col-md-6 col-8">
                <div className="form-group">
                  <label htmlFor="lastName">&nbsp;</label>
                  <input className="form-control form-control-lg" id="lastName" type="text"
                  value={this.props.lastName}
                  onChange={(val) => {
                    this.props.changeTheState({
                      props: "lastName",
                      value: val.target.value,
                      error: "lastNameError",
                    });
                  }}
                         placeholder="Last Name"/>  <span style={{ color: "red" }}>{this.props.lastNameError}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-8">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className="form-control form-control-lg" id="email" type="email"
                    value={this.props.Email}
                    onChange={(val) => {
                      this.props.changeTheState({
                        props: "Email",
                        value: val.target.value,
                        error: "EmailError",
                      });
                    }}
                         placeholder="E-mail"/>
                           <span style={{ color: "red" }}>{this.props.EmailError}</span>
                </div>
              </div>

              <div className="col-md-6 col-8">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input className="form-control form-control-lg" id="phoneNumber" type="tel"
                   value={this.props.phoneNo}
                   onChange={(val) => {
                     this.props.changeTheState({
                       props: "phoneNo",
                       value: val.target.value,
                       error: "phoneNoError",
                     });
                   }}
                         placeholder="Phone"/>
                           <span style={{ color: "red" }}>{this.props.phoneNoError}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="form-group">
                  <label htmlFor="webSite">Designation</label>
                  <input className="form-control form-control-lg" id="webSite" type="text"
                     value={this.props.Designation}
                     onChange={(val) => {
                       this.props.changeTheState({
                         props: "Designation",
                         value: val.target.value,
                         error: "DesignationError",
                       });
                     }}
                         placeholder="Designation"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="form-group">
                  <label>How can we help you?</label>
                  <textarea className="form-control form-control-lg"
                   value={this.props.content}
                   onChange={(val) => {
                     this.props.changeTheState({
                       props: "content",
                       value: val.target.value,
                       error: "contentError",
                     });
                   }} rows="3"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
        
         </>
    );
  }
}


const mapStateToProps=({NavTopReducer})=>{
 const { firstName,
  lastName,
  Email,
  phoneNo,
  Designation,
  content,


  firstNameError,
  lastNameError,
  EmailError,
  phoneNoError,
  DesignationError,
  contentError } = NavTopReducer;

  return{
    firstName,
    lastName,
    Email,
    phoneNo,
    Designation,
    content,
  
  
    firstNameError,
    lastNameError,
    EmailError,
    phoneNoError,
    DesignationError,
    contentError

  }
}
const mapDispatchToProps= {
  changeTheState,
  contactSave,
  validation
}

export default connect(mapStateToProps,mapDispatchToProps)(ConatactPopUp);