import React,{useState} from "react";
import stylepop from './otpopup.module.css';
const OtpPopup = () => {
  const[otp,setotp] = useState({});
  function submitdata(){
    console.log(otp);
  }
  function updateOtp(e){
    setotp({...otp,[e.target.id]:e.target.value});
    console.log(document.getElementById(`${String(parseInt(e.target.id)+1)}`))
    document.getElementById(`${String(parseInt(e.target.id)+1)}`).value='';

    document.getElementById(`${String(parseInt(e.target.id)+1)}`).focus();
    console.log(otp);
  }
  return( <>
  <div id="contact-form" className={`${stylepop.overlay}`}></div>
      <div className={`${stylepop.popup} row text-center`}>
  <div className="col-12 card-body p-2">
    <h5 className="col-12 card-title p-3">Please Verify your email with OTP we have sent you on your
    registered email</h5>
    <div className={`${stylepop.inputbox}`}>
    <input id={0} onChange={event=>updateOtp(event)} className={`${stylepop.otpinput}`} type="text" maxlength="1" />
    <input id={1} onChange={event=>updateOtp(event)} className={`${stylepop.otpinput}`} type="text" maxlength="1" />
    <input id={2} onChange={event=>updateOtp(event)} className={`${stylepop.otpinput}`} type="text" maxlength="1" />
    <input id={3} onChange={event=>updateOtp(event)} className={`${stylepop.otpinput}`} type="text" maxlength="1" />

    </div>
    <a onClick={submitdata} style={{borderRadius:'2rem',marginBottom:"0.5rem",marginTop:"1rem",color:"white"}} className="col-10 btn btn-primary">Verify</a>
  </div>
</div>
  </>);
};
export default OtpPopup;
