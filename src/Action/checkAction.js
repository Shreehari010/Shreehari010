import {CHECK_THE_REDUCER,
DARK_MODE_CHANGER,
INPUT_CHANGE_CONTACT,
CONTACT_SAVE,
FIRST_NAME,
LAST_NAME,
EMAIL_ID,
PHONE_NO,
VALIDATE_CONTACT,
FIRSTNAME_ERROR,
LASTNAME_ERROR,
EMAILIDFORMAT_ERROR,
CONTACTNUMBER_ERROR} from "../ActionTypes/Actiontypes";


export const checktheaction=()=>{
    console.log("action");
    return{
        type:CHECK_THE_REDUCER,
        payload:""
    }
}
export const darkModeAction=(props)=>{
    return {
        type:DARK_MODE_CHANGER,
        payload:props
    }
}

export const changeTheState=(props)=>{
    //console.log("action",props);
        return{
                type:INPUT_CHANGE_CONTACT,
                payload:props
        }    
}

export const contactSave=(props)=>{
     console.log("action",props);
    return {
        type:CONTACT_SAVE,
        payload:props
    }
}


export const validation=(props)=>{
let firstNameError="",
    lastNameError="",
  EmailError="",
  phoneNoError="";

  if(!props.firstName){
    firstNameError=FIRST_NAME;
  }
  if (props.firstName) {
    var re = /^[a-zA-Z]*$/;
    var isValid = re.test(props.firstName);
    if (!isValid) {
      firstNameError = FIRSTNAME_ERROR;
    }
  }
  if(!props.lastName){
    lastNameError=LAST_NAME;
  }
  if (props.lastName) {
    var re =/^[a-zA-Z ]*$/;
    var isValid = re.test(props.lastName);
    if (!isValid) {
      lastNameError = LASTNAME_ERROR;
    }
  }
  if(!props.Email){
    EmailError=EMAIL_ID;
  }
  if (props.Email) {
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var isValid = re.test(props.Email);
    if (!isValid) {
        EmailError = EMAILIDFORMAT_ERROR;
    }
  }
  if(!props.phoneNo){
    phoneNoError=PHONE_NO;
  }
  if(props.phoneNo){
    var re= /^\d{10}$/;;
    var isValid = re.test(props.phoneNo);
    if(!isValid){
        phoneNoError = CONTACTNUMBER_ERROR;
    }
  }

  if(firstNameError ||
    lastNameError||
    EmailError||
    phoneNoError
    ){
        return{
            type:VALIDATE_CONTACT,
            payload:{
                firstNameError,
                lastNameError,
                EmailError,
                phoneNoError
            }
        }
    }
     else{
    return{
        type:CONTACT_SAVE,
        payload:props
    }
        }
    }






