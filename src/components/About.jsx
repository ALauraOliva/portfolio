import React from "react"
import techs from "../projects/techs"
import timeLine from "../projects/education_details"

export const About = () => {
  const categories = ["front", "back", "other"]
  return (
    <section id="about" className="about_section">
      <div className="about_title">
        <h1>about ME</h1>
      </div>
      <article className="about_info">
        <div className="about_resume">
          <p>
            Graduated in <span>Systems Engineering</span>, in search of exciting
            challenges in the field of Full Stack development, with a particular
            focus on the
            <span> Front-End</span>. I also possess strong skills in the
            <span> Back End</span>, which allows me to comprehend and tackle
            projects comprehensively, from user interface design to data
            management in the backend.
          </p>
          <p>
            My goal is to contribute to the development of innovative and
            efficient technological solutions, leveraging my education and
            passion for delevopment to make an impact in the digital world.
          </p>
        </div>
        <div className="title_content">
          <div className="about_line"></div>
          <h2>Technologies</h2>
        </div>
        <div className="about_categories">
          {categories.map((category) => (
            <div key={category} className="about_category">
              <h3>
                {category === "front"
                  ? "Front"
                  : category === "back"
                  ? "Back"
                  : "Others"}
              </h3>
              <div key={category} className="about_stack">
                {techs
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <figure key={tech.techName}>
                      <figcaption>{tech.techName}</figcaption>
                    </figure>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="title_content">
          <h2>Studies & Experience</h2>
          <div className="about_line"></div>
        </div>
        <div className="timeline_cont">
          <section>
            {timeLine?.map((exp) => (
              <div className="line">
                <img src={exp.img} alt={exp.alt} />
                <div className="details">
                  <span>{exp.year}</span>
                  <h3>{exp.title}</h3>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>
        </div>
      </article>
    </section>
  )
}
