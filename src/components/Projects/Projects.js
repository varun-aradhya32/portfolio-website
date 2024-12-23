import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emergency from "../../Assets/Projects/emergency.png";
import assignment from "../../Assets/Projects/assignment.png";
import hotel from "../../Assets/Projects/hotel.png";
import forensic from "../../Assets/Projects/forensic.png";
import drowsiness from "../../Assets/Projects/drowsiness.png";
import socialmediaapp from "../../Assets/Projects/socialmediaapp.png";
import traffic from "../../Assets/Projects/traffic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forensic}
              isBlog={false}
              title="Forensic Evidence Management and Investigation System"
              description="The Forensic Evidence Management and Investigation System is designed to streamline the collection, cataloging, and analysis of forensic evidence for law enforcement agencies and forensic teams. It helps investigators document case details, link suspects to evidence, and generate reports to aid in the investigation process."
              ghLink="https://github.com/varun-aradhya32/Forensic-Evidence-Management-and-Investigation-System.git"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic Jam and Accident-prone Vehicle Prediction"
              description="Created a Traffic Analysis Dashboard that uses deep learning to analyze video footage for predicting traffic congestion and accident-prone vehicles. The tool offers a seamless interface for uploading videos, processing results in real-time, and downloading outputs, enhancing traffic monitoring and predictive capabilities."
              ghLink="https://github.com/varun-aradhya32/Traffic_Jam_and_Accident_Prone_Vehicle_Prediction.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assignment}
              isBlog={false}
              title="Online Assignment Management System"
              description="A platform where teachers can create assignments with deadlines, students can view and submit assignments in PDF format. Teachers can grade assignments, and students can view their marks."
              ghLink="https://github.com/varun-aradhya32/Online-Assignment-Portal.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialmediaapp}
              isBlog={false}
              title="Social Media Feed app using Django"
              description="The Social Media Feed App is a Django-based platform designed for users to create and share posts, follow other users, and interact with content through likes and comments. The application mimics core features of popular social media platforms by providing a dynamic feed of posts from the users that someone follows. It also includes features like user profiles and hashtags for a rich user experience"
              ghLink="https://github.com/varun-aradhya32/Social-Media-Feed-App-Django.git"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Management using C"
              description=" The Hotel Management System is a console-based application developed in C, designed to manage the daily operations of a hotel. This system simplifies tasks such as room booking, viewing customer records and searching for a record. It is an efficient tool for small to medium-sized hotels to handle guest reservations and monitor room availability."
              ghLink="https://github.com/varun-aradhya32/Hotel-Management-System.git"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emergency}
              isBlog={false}
              title="Android apk for Emergency Services with real time location tracking"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drowsiness}
              isBlog={false}
              title="Drowsiness and Yawn Detection"
              description="The Driver Drowsiness and Yawn Detection System is designed to enhance road safety by continuously monitoring the driver’s face for signs of fatigue. Using computer vision techniques, the system detects both drowsiness and yawning, common indicators of tiredness. If the system detects either prolonged eye closure or repeated yawning, it triggers an alert, helping prevent accidents caused by driver fatigue."
              ghLink="https://github.com/varun-aradhya32/Drowsiness-and-Yawn-Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
