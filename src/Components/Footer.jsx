const socials = [
  { name: 'GitHub', url: 'https://github.com/your-username' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-name' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        {socials.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
            {s.name}
          </a>
        ))}
      </p>
      <p>&copy; {year} Farah shahzadi. All rights reserved.</p>
    </footer>
  )
}

export default Footer