import React from "react";
import "./dashboard.css";

const Dashboard = ()=>{
    return(
        <div>
            <div className="Header">
                <div className="header">
                <div className="title">
                    Admin Dashboard
                </div>
                <div className="menu">
                    <p>Email</p>
                    <p>Project</p>
                    <p>CV</p>
                </div>
                </div>
                <div><hr/></div>
            </div>
        </div>
    )
}
export default Dashboard;