import React, { useState } from "react";

function GenderForm() {
  const [gender, setGender] = useState("");
  const handleSubmit = (even) => {
    even.preventDefault(); 
    alert("Giới tính : "+gender);
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <h2>Giới tính:</h2>
        <label>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={gender === "Nam"}
            onChange={(even) => setGender(even.target.value)}
          />
          Nam
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={gender === "Nữ"}
            onChange={(even) => setGender(even.target.value)}
          />
          Nữ
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={gender === "Khác"}
            onChange={(even) => setGender(even.target.value)}
          />
          Khác
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GenderForm;
