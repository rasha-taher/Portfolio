import { useEffect, useState } from "react";
import React from "react";
import "./email.css";
import Temail from "./Temail";
import axios from "axios";

function Email() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl = "http://localhost:3000/emails/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
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
            {data.map((emails) => (
              <Temail
                name={emails.name}
                email={emails.email}
                message={emails.message}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Email;
