import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiMysql,
  DiHtml5,
  DiDjango,
  DiAndroid,
  
} from "react-icons/di";
import {

  SiNextdotjs,
  SiAngularjs,
  SiFlutter,
  SiOpencv
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiHtml5 />
          <p style={{ fontSize: "13px" }}>HTML 5</p>
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiJavascript1 />
          <p style={{ fontSize: "13px" }}>JavaScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiReact />
          <p style={{ fontSize: "13px" }}>React</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <SiAngularjs />
          <p style={{ fontSize: "13px" }}>Angular.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiNodejs />
          <p style={{ fontSize: "13px" }}>Node.js</p>
        </div>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <SiNextdotjs />
          <p style={{ fontSize: "13px" }}>Next.js</p>
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiDjango />
          <p style={{ fontSize: "13px" }}>Django</p>
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiPython />
          <p style={{ fontSize: "13px" }}>Python</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiJava />
          <p style={{ fontSize: "13px" }}>Java</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <SiOpencv />
          <p style={{ fontSize: "13px" }}>OpenCV</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiMysql />
          <p style={{ fontSize: "13px" }}>Mysql</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <DiAndroid />
          <p style={{ fontSize: "13px" }}>Android</p>
        </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <SiFlutter />
          <p style={{ fontSize: "13px" }}>Flutter</p>
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ textAlign: "center" }}>
          <CgCPlusPlus />
          <p style={{ fontSize: "13px" }}>C++</p>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
