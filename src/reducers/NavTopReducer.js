import {CHECK_THE_REDUCER,
  DARK_MODE_CHANGER,
  INPUT_CHANGE_CONTACT,
  CONTACT_SAVE,
VALIDATE_CONTACT} from "../ActionTypes/Actiontypes"

const INITIAL_STATE={
  loading:"false",
  firstName:"",
  lastName:"",
  Email:"",
  phoneNo:"",
  Designation:"",
  content:"",


  firstNameError:"",
  lastNameError:"",
  EmailError:"",
  phoneNoError:"",
  DesignationError:"",
  contentError:""
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        
      case CHECK_THE_REDUCER:
     
        return { ...state, [payload.props]: payload.value, [payload.error]: "" };

        case DARK_MODE_CHANGER:
          return{
            ...state,
            darkMode:payload
          }

          case INPUT_CHANGE_CONTACT:
           // console.log("reducers");
            return{
              ...state,
              [payload.props]: payload.value, [payload.error]: ""
            }
            case CONTACT_SAVE:
               console.log("reducers",payload);
              return{
                ...state,
                loading:true,
              }


              case VALIDATE_CONTACT:
                return{
                  ...state,
                  firstNameError:payload.firstNameError,
                  lastNameError:payload.lastNameError,
                  EmailError:payload.EmailError,
                  phoneNoError:payload.phoneNoError
                }

        default:
            return { ...state };
    }
}