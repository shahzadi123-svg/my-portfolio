import profile from '../assets/profile-image.jpeg'

function Home() {
  return (
    <section id="Home" className="hero">
      <div className="hero-text">
        <p className="hello">Hello, I am</p>
        <h1>Farah shahzadi</h1>
        <h2>Software Engineer and Data Analyst</h2>
        <p>I build clean websites and turn data into useful insights.</p>
        <a href="#contact" className="btn">Contact me</a>
      </div>

      <img src={profile} alt="Photo of Farah shahzadi" className="profile" />
    </section>
  )
}

export default Home