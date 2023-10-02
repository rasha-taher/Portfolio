import React from 'react'
import { useState, useEffect } from "react";



const Updateproject = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <div className="email" id="email">
          <h3> Delete Project</h3>
          <div className="email-search">
            <p className="email-label"> Enter a Project title<br/></p>
            <input className="email-name-search" placeholder="Enter a  Title"  onChange={(e) => setTitle(e.target.value)}></input>
              <button className="email-name-button"> Add Project</button>
          </div>
    </div>
    </div>
  )
}

export default Updateproject;
