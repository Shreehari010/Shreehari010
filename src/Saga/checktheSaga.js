
import { call, all, takeEvery, put } from "@redux-saga/core/effects";
import {history}  from "../store";
import axios from "axios";
import {CHECK_THE_REDUCER, CONTACT_SAVE} from "../ActionTypes/Actiontypes";
//import {createBrowserHistory} from 'history';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function* checkthesaga() {
    //console.log("saga is working");
//     try {
     
//           localStorage.removeItem('user');
//           localStorage.removeItem("contact123334443");
//           yield call(history.push, "/signin");
//   } catch (error) {
//     console.log(error);
//       //yield put(showAuthMessage(error));
//   }
  }

function* check() {
    yield takeEvery(CHECK_THE_REDUCER, checkthesaga);
  }


function * contactSave(payload){
 console.log("contactSaga",payload.payload.Designation);
  try {
    let form=new FormData();
    form.append("status",1);
    form.append("firstName",payload.payload.firstName);
    form.append("lastName",payload.payload.lastName);
    form.append("email",payload.payload.Email);
    form.append("phoneNo",payload.payload.phoneNo);
    form.append("designation",payload.payload.Designation);
    form.append("content",payload.payload.content);
  


    var response= yield axios
    .request({
      method:"post",
      url: "http://localhost/CI44/Test_api/saveContact",
      data:form
    })
    .then((res)=>{
          return res;
    })
  .catch((error)=> 
    console.log(error)
  );
  if(response.status==200){
   // yield call(history.push ,"/TermsAndCondition");

    yield put({
      type:"SAVE_CONTACT",
      payload:"",
    })
  }
}
  catch(error){
    console.log(error);
  }
  
}

  function* contact(){
    yield takeEvery(CONTACT_SAVE,contactSave)
  }

export default function* rootSaga() {
    yield all([check(),
      contact()
      
    ]);
  }
  