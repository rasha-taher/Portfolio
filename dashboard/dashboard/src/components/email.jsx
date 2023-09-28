import { useEffect, useState } from 'react';
import React from "react";
import "./email.css";
import Temail from "./Temail";

function Email() {
    const [data, setData] = useState([]);
  
    const fetchData = () => {
      fetch('http://localhost:8000/projets/getAll')
        .then((response) => response.json())
        .then((data) => setData(data.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div>
        <div className="container">
          {data.map((projets) => (
            <Temail
              key={projets.id}
              title={projets.title}
              publisher={projets.description}
            />
          ))}
        </div>
      </div>
    );
  }

  export default Email;