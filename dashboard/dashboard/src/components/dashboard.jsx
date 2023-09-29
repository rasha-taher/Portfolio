import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="Header">
        <div className="header">
          <div className="title">Admin Dashboard</div>
          <div className="menu">
            <a href="#email">
              <p>email</p>
            </a>
            <a href="#projet">
              <p>Project</p>
            </a>
            <a href="#cv">
              <p>CV</p>
            </a>
          </div>
        </div>
        <div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
