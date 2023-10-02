import React from 'react'
const deleteproject = () => {
  return (
    <div>
      <div className="email" id="email">
          <h3> Delete Project</h3>
          <div className="email-search">
            <p className="email-label"> Enter a Project title you want to delete<br/></p>
            <input className="email-name-search" placeholder="Enter a Project Title"  ></input>
              <button className="email-name-button"> Delete Project</button>
          </div>
    </div>
    </div>
  )
}

export default deleteproject;
