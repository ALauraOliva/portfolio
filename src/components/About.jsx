import React, { useContext } from "react"
import { langContext } from "../context/langContext"
import techs from "../projects/techs"

const About = () => {
  const categories = ["front", "back", "other"]
  const { messages } = useContext(langContext)

  return (
    <section id="about" className="about_section">
      <div className="about_title">
        <h1>{messages.about.title}</h1>
      </div>
      <article className="about_info">
        <div className="about_resume">
          <p dangerouslySetInnerHTML={{ __html: messages.about.p1 }}></p>
          <p>{messages.about.p2}</p>
        </div>
        <div className="title_content">
          <div className="about_line"></div>
          <h2>{messages.about.subtitle1}</h2>
        </div>
        <div className="about_categories">
          {categories.map((category) => (
            <div key={category} className="about_category">
              <h3>
                {category === "front"
                  ? "Front"
                  : category === "back"
                  ? "Back"
                  : `${messages.about.other}`}
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
          <h2>{messages.about.subtitle2}</h2>
          <div className="about_line"></div>
        </div>
        <div className="timeline_cont">
          <section>
            {messages.timeLine?.map((exp, index) => (
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
