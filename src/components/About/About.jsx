import React from "react";
import "./About.css";
import profileImage from "../../assets/images/halil-aybar.jpeg";

const About = () => (
  <section className="about">
    <div className="about__avatar">
      <img src={profileImage} alt="Halil Aybar" className="about__image" />
    </div>
    <div className="about__content">
      <h2 className="about__title">About the author</h2>
      <p className="about__description">
        Hi, I&apos;m Halil Aybar, a passionate full-stack web developer with a
        strong foundation in modern web technologies. I specialize in React,
        JavaScript, Node.js, and creating responsive, user-friendly applications
        that solve real-world problems.
      </p>
      <p className="about__description">
        Through my journey with TripleTen&apos;s intensive web development
        bootcamp, I&apos;ve mastered frontend and backend development, API
        integration, database management, and deployment strategies. I&apos;m
        passionate about writing clean, efficient code and creating seamless
        user experiences.
      </p>
      <p className="about__description">
        I&apos;m excited to bring my technical skills, problem-solving mindset,
        and collaborative spirit to help businesses build innovative web
        solutions that drive growth and user engagement.
      </p>
    </div>
  </section>
);

export default About;
