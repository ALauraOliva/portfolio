import React from "react"
import techs from "../projects/techs"

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
          <h2>TECHnologies</h2>
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
          <h2>STUDIES & experiencie</h2>
          <div className="about_line"></div>
        </div>
        <div className="timeline_cont">
          <section>
            <div className="line">
              <img src="/src/assets/svg/graduateIcon.svg" alt="graduateIcon" />
              <div className="details">
                <span>2023</span>
                <h3>Full Stack Developer / soyHenry Bootcamp</h3>
              </div>
              <p>
                curse el bootcamp de henry donde aprendi tal y tech1 tehc2
                jsjssks otro.
              </p>
            </div>
            <div className="line">
              <img src="/src/assets/svg/workIcon.svg" alt="workIcon" />
              <div className="details">
                <span>2022</span>
                <h3>Incalpaca</h3>
              </div>
              <p>
                curse el bootcamp de henry donde aprendi tal y tech1 tehc2
                jsjssks otro.
              </p>
            </div>
            <div className="line">
              <img src="/src/assets/svg/workIcon.svg" alt="workIcon" />
              <div className="details">
                <span>2021</span>
                <h3>BANTOTAL</h3>
              </div>
              <p>
                curse el bootcamp de henry donde aprendi tal y tech1 tehc2
                jsjssks otro.
              </p>
            </div>
            <div className="line">
              <img src="/src/assets/svg/graduateIcon.svg" alt="graduateIcon" />
              <div className="details">
                <span>2017 - 2021</span>
                <h3>
                  Bachiller en Ing. de sistemas / Universidad Catolica de Santa
                  Maria
                </h3>
              </div>
              <p>
                curse el bootcamp de henry donde aprendi tal y tech1 tehc2
                jsjssks otro.
              </p>
            </div>
          </section>
        </div>
      </article>
    </section>
  )
}
