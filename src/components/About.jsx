import React from "react"

export const About = () => {
  return (
    <section id="about" className="about_section">
      <h1>
        about me <div className="about_line"></div>
      </h1>
      <article className="about_content">
        <p>
          Graduated in <span>Systems Engineering</span>, in search of exciting
          challenges in the field of Full Stack development, with a particular
          focus on the
          <span> Front-End</span>. I also possess strong skills in the{" "}
          <span> Back End</span>, which allows me to comprehend and tackle
          projects comprehensively, from user interface design to data
          management in the backend.
        </p>
        <p>
          My goal is to contribute to the development of innovative and
          efficient technological solutions, leveraging my education and passion
          for delevopment to make an impact in the digital world.
        </p>
      </article>
      <h2>
        <div className="about_line"></div> technologies
      </h2>
      <article className="about_techs">
        <div>
          <h3>Front-End</h3>
        </div>
        <div>
          <h3>Back-End</h3>
        </div>
        <div>
          <h3>Others</h3>
        </div>
      </article>
    </section>
  )
}
