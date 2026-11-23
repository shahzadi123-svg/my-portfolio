function ProjectCard({ title, text, image }) {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" className="link">View project</a>
    </article>
  )
}

export default ProjectCard