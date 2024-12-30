/** @jsxImportSource theme-ui */
import React, { useState } from "react";

const OTPInput: React.FC = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        mt: "24px",
      }}
    >
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          sx={{
            width: "50px",
            height: "50px",
            textAlign: "center",
            fontSize: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            "&:focus": {
              borderColor: "primary",
              boxShadow: "0 0 4px rgba(0, 122, 255, 0.5)",
            },
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
