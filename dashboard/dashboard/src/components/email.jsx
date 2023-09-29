import { useEffect, useState } from "react";
import React from "react";
import "./email.css";
import Temail from "./Temail";
import axios from "axios";

function Email() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl = "http://localhost:8000/projets/getAll";

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="email" id="email">
          <h2>Email</h2>
          <table className="tEmail">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
            {data.map((projets) => (
              <Temail
                key={projets.id}
                title={projets.title}
                publisher={projets.description}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Email;
