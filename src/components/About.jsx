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
                <h3>Full Stack Developer | soyHenry Bootcamp</h3>
              </div>
              <p>
                Participé en un bootcamp de desarrollo web donde adquirí
                habilidades para convertirme en un desarrollador Full Stack.
                Durante el programa, completé cuatro proyectos integrales que
                abarcaron tanto el desarrollo front-end como el back-end.
                Además, gané valiosa experiencia colaborando en proyectos
                grupales utilizando la metodología Scrum para la gestión de
                equipos ágiles. También tuve la oportunidad de destacarme al
                ganar varios concursos relacionados con el desarrollo web.
              </p>
            </div>
            <div className="line">
              <img src="/src/assets/svg/workIcon.svg" alt="workIcon" />
              <div className="details">
                <span>2022</span>
                <h3>Development Analyst | Incalpaca</h3>
              </div>
              <p>
                Desarrollé programas en Genexus según los requisitos
                empresariales, utilizando MySQL para consultas diarias a la base
                de datos y la integración de resultados en soluciones eficaces.
                Mejoré funcionalidades en programas existentes para satisfacer
                las demandas comerciales y optimizar el rendimiento en
                producción. Diseñé pruebas exhaustivas para validar el correcto
                funcionamiento de programas nuevos y existentes en producción,
                garantizando su eficacia
              </p>
            </div>
            <div className="line">
              <img src="/src/assets/svg/workIcon.svg" alt="workIcon" />
              <div className="details">
                <span>2021</span>
                <h3>Analyst Programmer | De Larrobla & Asociados (DL&A) </h3>
              </div>
              <p>
                Desarrollé programas utilizando GeneXus, automatizando el
                intercambio de datos a través de SOAPUI, mejorando
                funcionalidades y rendimiento en programas existentes, y
                empleando AS400 para consultas a bases de datos. Además, he
                proporcionado documentación detallada de procesos y mejoras.En
                un entorno de desarrollo de software para entidades financieras,
                donde trabajé siguiendo la metodología Scrum y colaboré con
                equipos internacionales de diferentes países.
              </p>
            </div>
            <div className="line">
              <img src="/src/assets/svg/graduateIcon.svg" alt="graduateIcon" />
              <div className="details">
                <span>2017 - 2021</span>
                <h3>
                  Bachiller en Ingenieria de sistemas | Universidad Catolica de
                  Santa Maria
                </h3>
              </div>
              <p>
                Obtuve mi formación académica en la Universidad Católica de
                Santa María, donde me gradué en Ingeniería de Sistemas.
              </p>
            </div>
          </section>
        </div>
      </article>
    </section>
  )
}
