import {
  certifications,
  education,
  experience,
  profile,
  projects,
  technical,
} from './data'

function Stamp({ children, className = '' }) {
  return <span className={`stamp ${className}`}>{children}</span>
}

export default function App() {
  return (
    <div className="page">
      <div className="noise" aria-hidden="true" />

      <header className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Stamp className="stamp-yellow">Resume</Stamp>
              Software · Cloud · Platforms
            </p>
            <h1 className="brand">{profile.name}</h1>
            <p className="role">{profile.title}</p>
            <p className="tagline">{profile.tagline}</p>

            <div className="cta-row">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                {profile.phone}
              </a>
            </div>

            <nav className="link-row" aria-label="Social links">
              {profile.links.map((link) => (
                <a
                  key={link.href}
                  className="link-chip"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <aside className="hero-mark" aria-hidden="true">
            <div className="monogram">
              <span>PH</span>
              <span>C</span>
            </div>
            <div className="mark-bars">
              <span />
              <span />
              <span />
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="experience">
          <div className="section-head">
            <h2>Experience</h2>
            <p>Shipping platforms under real production load.</p>
          </div>

          <div className="stack">
            {experience.map((job) => (
              <article
                key={job.company}
                className="block"
                style={{ '--block-accent': job.accent }}
              >
                <div className="block-bar" />
                <div className="block-body">
                  <div className="block-meta">
                    <div>
                      <h3>{job.company}</h3>
                      <p className="meta-role">{job.role}</p>
                    </div>
                    <Stamp className="stamp-white">{job.period}</Stamp>
                  </div>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <h2>Projects</h2>
            <p>Side builds focused on search, data, and money flows.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                key={project.name}
                className="project"
                style={{ '--block-accent': project.accent }}
              >
                <div className="project-top">
                  <h3>{project.name}</h3>
                  <Stamp className="stamp-ink">{project.period}</Stamp>
                </div>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="creds">
          <div>
            <div className="section-head">
              <h2>Certifications</h2>
              <p>Current credentials.</p>
            </div>
            <ul className="cred-list">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <span>{cert.name}</span>
                  <Stamp className="stamp-cyan">{cert.year}</Stamp>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-head">
              <h2>Education</h2>
              <p>Foundation in software engineering.</p>
            </div>
            <div className="edu">
              <h3>{education.school}</h3>
              <Stamp className="stamp-coral">{education.period}</Stamp>
              <p>{education.degree}</p>
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-head">
            <h2>Technical</h2>
            <p>Tools I use to design, ship, and operate systems.</p>
          </div>

          <div className="tech-grid">
            {technical.map((group) => (
              <div key={group.label} className="tech">
                <h3>{group.label}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </div>
  )
}
