import React from "react";
import { useState } from "react";
import OtpInput from "./otp-input";
 // Corrected import statement


function PhoneOtpForm() {
  const [phone, setPhone] = useState("");
 const[showOtp, setshowOtp] = useState(false);
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
//  phone validations
 const regex =   /[^0-9]/g;
 if (phone.length > 0 && regex.test(phone))
 {
        alert("Invalid phone");
        return;  
    } 
    setshowOtp(true); 
};

const handleOtpSubmit = (otp) =>{
  console.log("login nsucessfull",otp)
}
 

  return (
    <div>
     {!showOtp?  <form
     action="
  "
     onSubmit={handlePhoneSubmit}
   >
     <input
       type="text"
       className="bg-gray-300 bg-rounded outline-1"
       placeholder="enter phone number"
       value={phone}
       onChange={handlePhone}
     />
     <button type="submit">Submit</button>
   </form> :
 <div>
    <p>Enter OTP sent to {phone}</p> 
    <OtpInput onOtpSubmit = {handleOtpSubmit}/>
    </div>

     } 
    </div>
  );
}

export default PhoneOtpForm;
