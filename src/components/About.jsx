import React from "react"
import { FormattedMessage } from "react-intl"
import techs from "../projects/techs"
import timeLine from "../projects/education_details"

const About = () => {
  const categories = ["front", "back", "other"]
  return (
    <section id="about" className="about_section">
      <div className="about_title">
        <h1>
          <FormattedMessage id="about.title" defaultMessage="about ME" />
        </h1>
      </div>
      <article className="about_info">
        <div className="about_resume">
          <p>
            <FormattedMessage
              id="about.p1"
              defaultMessage="about me paragraph 1"
              values={{
                span: (chunks) => (
                  <span dangerouslySetInnerHTML={{ __html: chunks.join("") }} />
                ),
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="about.p2"
              defaultMessage="about me paragraph 2"
            />
          </p>
        </div>
        <div className="title_content">
          <div className="about_line"></div>
          <h2>
            <FormattedMessage
              id="about.subtitle1"
              defaultMessage="Technologies"
            />
          </h2>
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
                      <img src={tech.icon} alt={tech.techName} />
                      <figcaption>{tech.techName}</figcaption>
                    </figure>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="title_content">
          <h2>
            <FormattedMessage
              id="about.subtitle"
              defaultMessage="Technologies"
            />
          </h2>
          <div className="about_line"></div>
        </div>
        <div className="timeline_cont">
          <section>
            {timeLine?.map((exp, index) => (
              <div className="line" key={index}>
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

export default About
