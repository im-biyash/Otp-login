import React, { useState, useRef, useEffect } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[1]) {
      inputRef.current[1].focus();
    }
  }, []);

  const handleChange = (index) => (e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
  
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
  
    const nextIndex = index + 1;
    if (nextIndex < length && value.length === 1) {
      inputRef.current[nextIndex].focus(); // Move focus to the next input field
    }
  
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp); // Call onOtpSubmit when OTP is fully entered
    }
  };
  
  const handleClick = () => {};

  const handleKeyDown = (index) => (e) => {
    // Add your logic for handling key down events here
  };

  return (
    <div className="flex gap-2 mt-2 ">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            ref={(input) => (inputRef.current[index] = input)}
            className="border-2 outline-1 flex items-center rounded w-[30px] h-[40px] mx-5px "
            type="text"
            value={value}
            onClick={() => handleClick(index)}
            onChange={handleChange(index)}
            onKeyDown={handleKeyDown(index)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
