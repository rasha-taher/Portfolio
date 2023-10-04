import { useEffect, useState } from "react";
import React from "react";
import Temail from "./Temails";
import axios from "axios";

function Emails() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const fetchData = () => {
    const apiUrl = "http://localhost:5000/emails/getAllEmail";
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
  const handleButtonClick = () => {
    const name = document.querySelector(".email-name-search").value;
    const apiUrl = `http://localhost:5000/emails/getEmailByName/${name}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setData2(response.data);
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
    <div id="emails">
      <div className="container">
        <div className="email" id="email">
          <h2>Emails</h2>
          <div className="email-search">
            <p className="email-label">
              {" "}
              Enter a name <br />
            </p>
            <input
              className="email-name-search"
              placeholder="Enter a Name"
            ></input>
            <button className="email-name-button" onClick={handleButtonClick}>
              Display Emails
            </button>
          </div>

          <div className="">
            <table className="tEmail">
              <tr>
                <td className="email-td-title">Name</td>
                <td className="email-td-title">Email</td>
                <td className="email-td-title">Message</td>
              </tr>
              {data2.map((emails2) => (
                <Temail
                  name={emails2.name}
                  email={emails2.email}
                  message={emails2.message}
                />
              ))}
            </table>
          </div>

          <div className="">
            <p className="email-p"> All your emails: </p>
            <table className="tEmail">
              <tr>
                <td className="email-td-title">Name</td>
                <td className="email-td-title">Email</td>
                <td className="email-td-title">Message</td>
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
    </div>
  );
}

export default Emails;
