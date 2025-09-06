import React from "react";
import "./About.css";

const About = () => (
  <section className="about">
    <div className="about__avatar">
      <div className="about__image-placeholder">
        <span className="about__smile">☺</span>
        <p className="about__placeholder-text">
          Placeholder image.
          <br />
          Put an image of yourself here.
        </p>
      </div>
    </div>
    <div className="about__content">
      <h2 className="about__title">About the author</h2>
      <p className="about__description">
        This block describes the project author. Here you should indicate your
        name, what you do, and which development technologies you know.
      </p>
      <p className="about__description">
        You can also talk about your experience with TripleTen, what you learned
        there, and how you can help potential customers.
      </p>
    </div>
  </section>
);

export default About;
