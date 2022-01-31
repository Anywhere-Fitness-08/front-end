import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function AddClass(props) {
  const [newClass, setNewClass] = useState({
    name: "WareHouse BJJ",
    type: "BJJ",
    startTime: 700,
    duration: 60,
    intensityLevel: "Intermiediate",
    location: "Warehouse",
    registeredMembers: 5,
    maxClassSize: 30,
  });

  const handleChange = (e) => {
    setNewClass({
      ...newClass,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Create a new class</h1>
    </div>
  );
}

export default AddClass;
