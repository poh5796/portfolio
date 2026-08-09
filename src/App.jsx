import {
  certifications,
  education,
  experience,
  profile,
  projects,
  spotify,
  steam,
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
    <strong className={`mark mark-${tone}${tilt ? ` tilt-${tilt}` : ''}`}>
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
              {profile.links.map((link, index) => (
                <a
                  key={link.href}
                  className={`link-chip chip-${MARK_TONES[index % MARK_TONES.length]}`}
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
            <div className="monogram">hcpooh</div>
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
            {experience.map((job, jobIndex) => (
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
                        <RichText text={job.company} start={jobIndex} />
                      </h3>
                      <p className="meta-role">{job.role}</p>
                    </div>
                    <Stamp className="stamp-white">{job.period}</Stamp>
                  </div>
                  <ul>
                    {job.points.map((point, pointIndex) => (
                      <li key={point}>
                        <RichText
                          text={point}
                          start={jobIndex * 4 + pointIndex}
                        />
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
            <h2>Projects</h2>
            <p>Side builds focused on search, data, and money flows.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, projectIndex) => (
              <article
                key={project.name}
                className="project"
                style={{ '--block-accent': project.accent }}
              >
                <div className="project-top">
                  <h3>
                    <RichText text={project.name} start={projectIndex + 2} />
                  </h3>
                  <Stamp className="stamp-ink">{project.period}</Stamp>
                </div>
                <p>
                  <RichText text={project.description} start={projectIndex + 5} />
                </p>
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
              {certifications.map((cert, certIndex) => (
                <li key={cert.name}>
                  <span>
                    <RichText text={cert.name} start={certIndex + 1} />
                  </span>
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
              <h3>
                <RichText text={education.school} start={3} />
              </h3>
              <Stamp className="stamp-coral">{education.period}</Stamp>
              <p>
                <RichText text={education.degree} start={6} />
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="steam">
          <div className="section-head">
            <h2>Steam</h2>
            <p>
              Playing as <Mark tone="cyan">{steam.persona}</Mark> —{' '}
              <Mark tone="yellow">{steam.gamesOwned} games</Mark> owned, topped by{' '}
              <Mark tone="coral">Dota 2</Mark>.
            </p>
          </div>

          <div className="steam-panel">
            <div className="steam-profile">
              <img
                className="steam-avatar"
                src={steam.avatar}
                alt={`${steam.persona} Steam avatar`}
                width={96}
                height={96}
              />
              <div className="steam-profile-copy">
                <h3>
                  <Mark tone="coral" tilt={-1}>
                    {steam.persona}
                  </Mark>
                </h3>
                <p className="steam-meta">
                  Level {steam.level} · Member since {steam.memberSince}
                </p>
                <div className="steam-actions">
                  <a
                    className="btn btn-primary"
                    href={steam.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Steam profile
                  </a>
                  <a
                    className="btn"
                    href={steam.gamesUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View library
                  </a>
                </div>
              </div>
            </div>

            <div className="steam-games">
              {steam.games.map((game, gameIndex) => (
                <a
                  key={game.appId}
                  className="steam-game"
                  href={`https://store.steampowered.com/app/${game.appId}/`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ '--block-accent': game.accent }}
                >
                  <img
                    src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.appId}/capsule_231x87.jpg`}
                    alt=""
                    width={231}
                    height={87}
                    loading="lazy"
                  />
                  <div>
                    <h3>
                      <RichText
                        text={`**${game.name}**`}
                        start={gameIndex + 4}
                      />
                    </h3>
                    <p>
                      <Mark
                        tone={MARK_TONES[(gameIndex + 1) % MARK_TONES.length]}
                      >
                        {game.hours} hrs
                      </Mark>{' '}
                      on record · last played {game.lastPlayed}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <p className="steam-note">
              Showing recent public playtime from Steam. Browse the full{' '}
              <Mark tone="lime">{steam.gamesOwned}-game</Mark> library{' '}
              <a href={steam.gamesUrl} target="_blank" rel="noreferrer">
                on Steam
              </a>
              .
            </p>
          </div>
        </section>

        <section className="section" id="spotify">
          <div className="section-head">
            <h2>Spotify</h2>
            <p>
              Listening as <Mark tone="lime">{spotify.persona}</Mark> across{' '}
              <Mark tone="pink">{spotify.playlists.length} public playlists</Mark>.
            </p>
          </div>

          <div className="spotify-panel">
            <div className="spotify-top">
              <div className="spotify-profile">
                <img
                  className="spotify-avatar"
                  src={spotify.avatar}
                  alt={`${spotify.persona} Spotify avatar`}
                  width={96}
                  height={96}
                />
                <div className="spotify-profile-copy">
                  <h3>
                    <Mark tone="lime" tilt={-1}>
                      {spotify.persona}
                    </Mark>
                  </h3>
                  <div className="genre-row" aria-label="Genres">
                    {spotify.genres.map((genre) => (
                      <Mark key={genre.label} tone={genre.tone}>
                        {genre.label}
                      </Mark>
                    ))}
                  </div>
                  <a
                    className="btn btn-primary"
                    href={spotify.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Spotify profile
                  </a>
                </div>
              </div>

              <div className="spotify-embed-wrap">
                <p className="spotify-embed-label">
                  <Mark tone="yellow">Highlighted songs</Mark> from{' '}
                  {spotify.highlightPlaylist.name}
                </p>
                <iframe
                  className="spotify-embed"
                  title={`Spotify: ${spotify.highlightPlaylist.name}`}
                  src={`https://open.spotify.com/embed/playlist/${spotify.highlightPlaylist.id}?utm_source=generator&theme=0`}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="spotify-playlists">
              {spotify.playlists.map((playlist, playlistIndex) => (
                <a
                  key={playlist.id}
                  className="spotify-playlist"
                  href={`https://open.spotify.com/playlist/${playlist.id}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ '--block-accent': playlist.accent }}
                >
                  <h3>
                    <RichText
                      text={`**${playlist.name}**`}
                      start={playlistIndex + 2}
                    />
                  </h3>
                  <p>
                    <Mark tone={MARK_TONES[(playlistIndex + 3) % MARK_TONES.length]}>
                      {playlist.tracks} tracks
                    </Mark>
                  </p>
                </a>
              ))}
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
