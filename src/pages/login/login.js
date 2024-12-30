import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom"; // Import useHistory

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory(); // Initialize history

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if phone number or password are empty
    if (!phoneNumber || !password) {
      setError("يرجى إدخال رقم الهاتف وكلمة المرور");
      return;
    }

    try {
      const response = await axios.post(
        "https://logeenacadmey.online/api/Users/login",
        {
          phoneNumber,
          password,
        }
      );

      const { status, data } = response;
      const { errorCode, errorMessage } = data;

      // Check if the status code is 200 and there is no errorCode (indicating a successful login)
      if (status === 200 && errorCode === 0) {
        console.log("Login successful:", data);
        // Redirect to a new route (for example, the dashboard or home page)
        history.push("/navbar"); // Adjust the path to wherever you want to redirect
      } else if (errorCode === 1) {
        setError("غير مصرح. يرجى التحقق من بيانات الدخول.");
      } else if (status === 404) {
        setError("غير موجود.");
      } else {
        // If there's an error code, display the error message
        setError("حدث خطأ غير معروف");
        console.log(response);
        console.log("Login failed:", errorMessage);
      }
    } catch (err) {
      console.error("Login failed:", err); // This will catch any network or other errors
      setError("فشل تسجيل الدخول. يرجى التحقق من رقم الهاتف أو كلمة المرور.");
    }
  };

  return (
    <div style={{ direction: "rtl", textAlign: "right", padding: "20px" }}>
      <h2>تسجيل الدخول</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>رقم الهاتف:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="أدخل رقم الهاتف"
            required
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              width: "100%",
            }}
          />
        </div>
        <div>
          <label>كلمة المرور:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="أدخل كلمة المرور"
            required
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              width: "100%",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "10px",
            border: "none",
            width: "100%",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول
        </button>
      </form>

      <div>
        <p>
          ليس لديك اشتراك؟ <Link to="/register">اشترك</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
