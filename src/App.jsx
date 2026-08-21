import { useState } from 'react'
import heroStories from './assets/hero-stories.webp'
import './App.css'

function LoopMark({ size = 44 }) {
  return (
   <div><img src="/images-removebg-preview.png" alt=""  className='logo'/></div> 
  )
}

function MetaLikeMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 1.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.6.4 3.1 1.3 4.4.2.3.3.7.2 1l-.6 2.1c-.2.6.3 1.2 1 1l2.3-.8c.3-.1.6-.1.9.1 1.1.5 2.3.7 3.4.7 4.7 0 8.5-3.8 8.5-8.5S14.7 1.5 10 1.5z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

export default function App() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="page">
      

      <main className="split">
        <section className="showcase">
          <LoopMark />
          <h1 className="tagline">
            Catch the little moments from <span className="tagline-accent">your close friends</span>.
          </h1>
          <img
            className="hero-img"
            src={heroStories}
            alt="Stack of phone screens showing friends' everyday photo updates"
          />
        </section>
        

        <section className="auth">
          <div className="auth-card">
            <h2 className="auth-title">Log in to Loop</h2>

            <form onSubmit={handleSubmit} noValidate>
              <label className="field">
                <span className="sr-only">Mobile number, username or email</span>
                <input
                  type="text"
                  placeholder="Mobile number, username or email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  autoComplete="username"
                />
              </label>

              <label className="field">
                <span className="sr-only">Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </label>

              <button type="submit" className="btn-primary" disabled={!identifier || !password}>
                Log in
              </button>
            </form>

            <a className="forgot-link" href="#forgot">
              Forgot password?
            </a>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="btn-secondary">
              <MetaLikeMark />
              Log in with Facebook
            </button>
          </div>

          <div className="auth-card auth-card--signup">
            <span>
              Don&rsquo;t have an account? <a href="#signup">Sign up</a>
            </span>
          </div>

          <div className="app-cta">
            <p>Get the app.</p>
            <div className="store-badges">
              <span className="store-badge">App Store</span>
              <span className="store-badge">Google Play</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <nav className="footer-links">
          {['About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations', 'Loop Lite', 'Contact Uploading & Non-Users'].map(
            (item) => (
              <a key={item} href="#footer">
                {item}
              </a>
            ),
          )}
        </nav>
        <div className="footer-meta">
          <span className="lang-select">English ▾</span>
          <span>© 2026 instagram</span>
        </div>
      </footer>
    </div>
  )
}
