import React from 'react'
import { Card, Col, Divider, Row, Avatar } from 'antd'

const Recommendations = ({ recommendations }) => (
  <>
    <h2 className="text-center mt-1 mb-0">About Me!</h2>
    <img src="../static/Axes.jpg" style={{ paddingLeft: "785px" }} alt="Axes" />
    <h4>Hi, my name is Lane Stuart Buckler! I am currently an undergrad student at UMGC studying Computer Science. I like writing poetry, watching horror movies, learning philosophy, playing video games, and collecting vinyl records. I am also a competitive axe thrower in a league! Alongside having a business and finance, accounting, and databasing background, I am familiar as well with some aspects of software engineering, including ReactJS, HTML, CSS, Git, and NPM, and some aspects of data science, such as SQL, Qlik, and Power BI. I have dabbled a bit in Python. I also have an interest in aerospace and mechanical engineering. I am presently looking for an entry-level or internship position somewhere in a field of engineering or programming. I have a hunger to build! 😁</h4>
  </>  
)

export default Recommendations
