import { projects } from '../Data/Projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="title">Projects</h2>
      <div className="cards">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects