import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    parentNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [cities, setCities] = useState([]); // State for cities
  const [selectedCity, setSelectedCity] = useState(""); // State for selected city
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fetch cities from the backend
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "https://logeenacadmey.online/api/Cities?lang=ar",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Extract cities data from response
        if (response.data && Array.isArray(response.data.data)) {
          setCities(response.data.data);
          console.log(response);
        } else {
          console.error(
            "Cities data is not in the expected format:",
            response.data
          );
          setError("تعذر جلب المدن. يرجى المحاولة لاحقاً.");
        }
      } catch (err) {
        console.error(
          "Failed to fetch cities:",
          err.response?.data || err.message
        );
        setError("فشل في الاتصال بالخادم.");
      }
    };

    fetchCities();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("كلمتا المرور غير متطابقتين.");
      return;
    }

    // Check if a city is selected
    if (!selectedCity) {
      setError("يرجى اختيار مدينة.");
      return;
    }

    // Add selected city ID to the form data
    const formDataWithCity = { ...formData, cityId: selectedCity };

    try {
      // Make API request to register
      await axios.post(
        "https://logeenacadmey.online/api/Users/StudentRegister",
        formDataWithCity,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess("تم التسجيل بنجاح!");
      setError("");
      setFormData({
        fullName: "",
        phoneNumber: "",
        parentNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setSelectedCity("");
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      setError("فشل التسجيل. يرجى التحقق من الحقول.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        textAlign: "right",
      }}
    >
      <h2>تسجيل حساب جديد</h2>

      {/* Success and Error Messages */}
      {success && (
        <p style={{ color: "green", fontWeight: "bold" }}>{success}</p>
      )}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label>الإسم الكامل</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label>رقم الهاتف</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Parent Phone Number */}
        <div>
          <label>رقم هاتف ولي الأمر</label>
          <input
            type="text"
            name="parentNumber"
            value={formData.parentNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label>البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label>كلمة المرور</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label>تأكيد كلمة المرور</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* City Dropdown */}
        <div>
          <label>المدينة</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            required
          >
            <option value="">اختر المدينة</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit">تسجيل</button>
      </form>
    </div>
  );
};

export default RegisterPage;
