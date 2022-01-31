import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
const Client = () => {
  const [classes, setClasses] = useState([]);
  const [signUps, setSignUps] = useState({});

  const handleSignUps = (item) => {
    setSignUps({ ...signUps, item });
  };

  // useEffect(() => {
  //   // axiosWithAuth()
  //   axios
  //     .get("https://dog.ceo/api/breeds/image/random")
  //     .then((resp) => {
  //       setClasses(resp.data);
  //       console.log(resp.data.message);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <img src={classes.message} alt="doggie picture" />
      {/* <ul>
        {classes.map((item) => {
          return <h3>{}</h3>;
        })}
      </ul> */}
    </div>
  );
};

export default Client;
