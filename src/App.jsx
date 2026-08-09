import {
  certifications,
  education,
  experience,
  profile,
  projects,
  technical,
} from './data'

const MARK_TONES = [
  'yellow',
  'coral',
  'cyan',
  'lime',
  'pink',
  'violet',
  'orange',
  'mint',
  'sky',
  'punch',
]

function Stamp({ children, className = '' }) {
  return <span className={`stamp ${className}`}>{children}</span>
}

function Mark({ children, tone = 'yellow', tilt = 0 }) {
  return (
    <strong
      className={`mark mark-${tone}${tilt ? ` tilt-${tilt}` : ''}`}
    >
      {children}
    </strong>
  )
}

function RichText({ text, start = 0 }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g)
  let markIndex = start

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const tone = MARK_TONES[markIndex % MARK_TONES.length]
      const tilt = (markIndex % 5) - 2
      markIndex += 1
      return (
        <Mark key={`${part}-${index}`} tone={tone} tilt={tilt}>
          {part.slice(2, -2)}
        </Mark>
      )
    }

    return <span key={`${part}-${index}`}>{part}</span>
  })
}

function BrandName({ name }) {
  const tones = ['coral', 'yellow', 'cyan']
  return (
    <h1 className="brand" aria-label={name}>
      {name.split(' ').map((word, index) => (
        <span
          key={word}
          className={`brand-word mark mark-${tones[index % tones.length]}`}
        >
          {word}
        </span>
      ))}
    </h1>
  )
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
              <Mark tone="cyan" tilt={-1}>
                Software
              </Mark>
              <Mark tone="lime" tilt={1}>
                Cloud
              </Mark>
              <Mark tone="pink" tilt={-2}>
                Platforms
              </Mark>
            </p>

            <BrandName name={profile.name} />
            <p className="role">{profile.title}</p>
            <p className="tagline">
              <RichText text={profile.tagline} />
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                {profile.phone}
              </a>
            </div>

            <nav className="link-row" aria-label="Social links">
              {profile.links.map((link, index) => (
                <a
                  key={link.href}
                  className={`link-chip chip-${MARK_TONES[index % 3]}`}
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
            <h2>
              <Mark tone="yellow" tilt={-1}>
                Experience
              </Mark>
            </h2>
            <p>
              Shipping platforms under{' '}
              <Mark tone="coral" tilt={1}>
                real production load
              </Mark>
              .
            </p>
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
                      <h3>
                        <Mark tone="ink" tilt={-1}>
                          {job.company}
                        </Mark>
                      </h3>
                      <p className="meta-role">
                        <Mark tone="violet" tilt={1}>
                          {job.role}
                        </Mark>
                      </p>
                    </div>
                    <Stamp className="stamp-white">{job.period}</Stamp>
                  </div>
                  <ul>
                    {job.points.map((point, pointIndex) => (
                      <li key={point}>
                        <RichText text={point} start={pointIndex * 3} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <h2>
              <Mark tone="lime" tilt={1}>
                Projects
              </Mark>
            </h2>
            <p>
              Side builds focused on{' '}
              <Mark tone="cyan">search</Mark>,{' '}
              <Mark tone="pink" tilt={-1}>
                data
              </Mark>
              , and{' '}
              <Mark tone="orange" tilt={2}>
                money flows
              </Mark>
              .
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                key={project.name}
                className="project"
                style={{ '--block-accent': project.accent }}
              >
                <div className="project-top">
                  <h3>
                    <Mark tone="mint" tilt={-1}>
                      {project.name}
                    </Mark>
                  </h3>
                  <Stamp className="stamp-ink">{project.period}</Stamp>
                </div>
                <p>
                  <RichText text={project.description} />
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="creds">
          <div>
            <div className="section-head">
              <h2>
                <Mark tone="sky" tilt={-2}>
                  Certifications
                </Mark>
              </h2>
              <p>
                <Mark tone="yellow">Current credentials.</Mark>
              </p>
            </div>
            <ul className="cred-list">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <span>
                    <RichText text={cert.name} />
                  </span>
                  <Stamp className="stamp-cyan">{cert.year}</Stamp>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-head">
              <h2>
                <Mark tone="punch" tilt={1}>
                  Education
                </Mark>
              </h2>
              <p>
                Foundation in{' '}
                <Mark tone="violet">software engineering</Mark>.
              </p>
            </div>
            <div className="edu">
              <h3>
                <Mark tone="coral" tilt={-1}>
                  {education.school}
                </Mark>
              </h3>
              <Stamp className="stamp-coral">{education.period}</Stamp>
              <p>
                <RichText text={education.degree} />
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-head">
            <h2>
              <Mark tone="orange" tilt={-1}>
                Technical
              </Mark>
            </h2>
            <p>
              Tools I use to{' '}
              <Mark tone="lime">design</Mark>,{' '}
              <Mark tone="cyan" tilt={1}>
                ship
              </Mark>
              , and{' '}
              <Mark tone="pink" tilt={-2}>
                operate
              </Mark>{' '}
              systems.
            </p>
          </div>

          <div className="tech-grid">
            {technical.map((group, groupIndex) => (
              <div key={group.label} className="tech">
                <h3>{group.label}</h3>
                <p>
                  <RichText text={group.items} start={groupIndex * 2} />
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()}{' '}
          <Mark tone="yellow">{profile.name}</Mark>
        </p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </div>
  )
}
