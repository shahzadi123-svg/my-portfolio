const skills = ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Data Analysis', 'SQL']

function Skills() {
  return (
    <section id="skills" className="section alt">
      <h2 className="title">Skills</h2>
      <ul className="skills">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills