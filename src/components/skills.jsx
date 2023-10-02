import React from "react";
import figma from "../Svgs/figma1.svg";
import github from "../Svgs/github1.svg";
import gitlab from "../Svgs/gitlab1.svg";
import javascript from "../Svgs/javascript1.svg";
import mongodb from "../Svgs/mongodb1.svg";
import node from "../Svgs/node.svg";
import database from "../Svgs/database1.svg";
import html from "../Svgs/html1.svg";
import javascript2 from "../Svgs/javascript2.svg";
import css from "../Svgs/css.svg";

const Skills = () => {
  return (
    <div className="skill-section" id="skill">
      <div className="skill1">
        <p className="title">Skills</p>
        <img className="skill" src={html}></img>
        <img className="skill" src={javascript2}></img>
        <img className="skill" src={figma}></img>
        <img className="skill" src={github}></img>
        <img className="skill" src={gitlab}></img>
      </div>
      <div className="skill2">
        <img className="skill" src={css}></img>
        <img className="skill" src={javascript}></img>
        <img className="skill" src={mongodb}></img>
        <img className="skill" src={node}></img>
        <img className="skill" src={database}></img>
      </div>
      <div></div>
    </div>
  );
};
export default Skills;
