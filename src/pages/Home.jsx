
import "./Home.css";
import { Link } from 'react-router-dom';
const features = [
  {
    icon: "☻",
    color: "pink",
    title: "Understands You",
    description:
      "Advanced AI detects your stress, fatigue, focus and engagement in real-time.",
  },
  {
    icon: "♧",
    color: "blue",
    title: "Adapts Instantly",
    description:
      "Game speed, difficulty, visuals and sound adjust based on your emotional state.",
  },
  {
    icon: "▥",
    color: "purple",
    title: "Boosts Your Flow",
    description:
      "Stay in the perfect state of flow for maximum performance and enjoyment.",
  },
  {
    icon: "♢",
    color: "green",
    title: "Privacy First",
    description:
      "All processing happens on your device. Your data stays 100% private.",
  },
];

const engineSteps = [
  {
    icon: "◎",
    color: "pink",
    title: "Detect",
    description: "Capture facial & behavioral signals in real-time.",
  },
  {
    icon: "♧",
    color: "blue",
    title: "Analyze",
    description: "AI engine interprets your emotional & cognitive state.",
  },
  {
    icon: "☷",
    color: "purple",
    title: "Adapt",
    description: "Game mechanics adjust instantly for you.",
  },
  {
    icon: "☆",
    color: "orange",
    title: "Recommend",
    description: "Get AI-powered tips & game suggestions.",
  },
  {
    icon: "♧",
    color: "green",
    title: "Learn",
    description: "Engine improves over time the more you play.",
  },
];

const emotionData = [
  { name: "Stress", value: 45, color: "pink" },
  { name: "Focus", value: 80, color: "blue" },
  { name: "Fatigue", value: 35, color: "purple" },
  { name: "Engagement", value: 70, color: "green" },
];

const stats = [
  { icon: "♧", value: "2.5K+", label: "Active Players", color: "pink" },
  { icon: "♧", value: "12K+", label: "Games Played", color: "blue" },
  { icon: "▥", value: "94%", label: "Better Focus", color: "purple" },
  { icon: "☺", value: "4.8★", label: "User Rating", color: "green" },
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="EmotiCore Home">
        <span className="brand-logo">♡</span>
        <span className="brand-copy">
          <strong>EmotiCore</strong>
          <small>
            Powered by <b>Emotion.</b> Driven by <b>AI.</b>
          </small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a className="active" href="#home">Home</a>
        <a href="#features">Dashboard</a>
        <a href="#engine">Emotion Engine</a>
        <a href="#arena">Game Arena</a>
        <a href="#stats">Analytics</a>
        <a href="#footer">Settings</a>
      </nav>

     
<div className="nav-actions">
  <Link to="/auth" className="login-btn">
    Login/Sign Up
  </Link>

  <a className="button gradient-button nav-cta" href="#arena">
    🎮 Launch Arena
  </a>
</div>

    </header>
  );
}

function EmotionFeed() {
  return (
    <aside className="hero-widgets" aria-label="Emotion status">
      <div className="glass-card emotion-feed">
        <div className="widget-heading">
          <strong>Live Emotion Feed</strong>
          <span className="live-dot">
            <span className="live-indicator" /> Live
          </span>
        </div>

        {emotionData.map((emotion) => (
          <div className="emotion-row" key={emotion.name}>
            <span className="emotion-name">{emotion.name}</span>

            <div
              className={`mini-track ${emotion.color}`}
              role="progressbar"
              aria-label={emotion.name}
              aria-valuenow={emotion.value}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span style={{ width: `${emotion.value}%` }} />
            </div>

            <strong>{emotion.value}%</strong>
          </div>
        ))}
      </div>

      <div className="glass-card current-state">
        <div className="current-state-copy">
          <small>Current State</small>
          <h3>Balanced Flow</h3>
          <p>You're in the zone! Keep going!</p>
        </div>
        <span className="state-emoji" aria-label="Relaxed">😌</span>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">
          ✧ AI-Powered Emotion Adaptive Gaming
        </span>

        <h1>
          <span className="heading-black">Gaming That</span>
          <br />
          <span className="heading-gradient">Feels You.</span>
        </h1>

        <p className="hero-description">
          EmotiCore reads your emotions in real-time and adapts the game
          to match your mind, so you stay in the perfect flow.
        </p>

        <div className="hero-actions">
          
<Link to="/auth" className="button gradient-button">
  Start Your Journey <span aria-hidden="true">→</span>
</Link>


          <a className="button outline-button" href="#engine">
            <span aria-hidden="true">▷</span> Watch Demo
          </a>
        </div>

        <div className="quick-benefits">
          <div className="benefit-item">
            <span className="benefit-icon pink-text">◎</span>
            <span>Real-time<br />Emotion AI</span>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon blue-text">♧</span>
            <span>Adaptive<br />Gameplay</span>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon purple-text">♡</span>
            <span>Personalized<br />Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-art">
        <span className="floating-icon floating-game" aria-hidden="true">♧</span>
        <span className="floating-icon floating-heart" aria-hidden="true">♥</span>
        <span className="floating-icon floating-bolt" aria-hidden="true">ϟ</span>

        <img
          src="/gamer.png"
          alt="Gamer enjoying an adaptive gaming experience"
          className="gamer-image"
        />
      </div>

      <EmotionFeed />
    </section>
  );
}

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-heading">
        <span className="eyebrow section-eyebrow">
          ♧ WHY EMOTICORE?
        </span>
        <h2>Built for Smarter, Happier Gaming</h2>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className={`feature-icon ${feature.color}`}>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Engine() {
  return (
    <section className="engine-section" id="engine">
      <div className="section-heading">
        <span className="eyebrow section-eyebrow">
          ✧ HOW IT WORKS
        </span>
        <h2>The EmotiCore Engine</h2>
      </div>

      <div className="steps-grid">
        {engineSteps.map((step, index) => (
          <div className="engine-step" key={step.title}>
            <div className={`step-icon ${step.color}`}>
              {step.icon}
            </div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>

            {index < engineSteps.length - 1 && (
              <span className="step-arrow" aria-hidden="true">⟶</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-bar" id="stats" aria-label="Platform statistics">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <span className={`stat-icon ${stat.color}`}>
            {stat.icon}
          </span>

          <div className="stat-copy">
            <strong>{stat.value}</strong>
            <small>{stat.label}</small>
          </div>
        </div>
      ))}
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta-banner" id="arena">
      <div className="cta-art" aria-hidden="true">
        🎮 <span>✨</span>
      </div>

      <div className="cta-copy">
        <h2>Ready to play the future?</h2>
        <p>Step into the arena and let EmotiCore adapt every moment to you.</p>
      </div>

      <a className="button gradient-button cta-button" href="#home">
        🎮 Launch Game Arena <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-brand">
        <a className="brand" href="#home">
          <span className="brand-logo">♡</span>
          <span className="brand-copy">
            <strong>EmotiCore</strong>
            <small>
              Powered by <b>Emotion.</b> Driven by <b>AI.</b>
            </small>
          </span>
        </a>
      </div>

      <div className="footer-column">
        <h4>Quick Links</h4>
        <a href="#home">Home</a>
        <a href="#features">Dashboard</a>
        <a href="#engine">Emotion Engine</a>
        <a href="#arena">Game Arena</a>
      </div>

      <div className="footer-column">
        <h4>Resources</h4>
        <a href="#engine">Documentation</a>
        <a href="#footer">Privacy Policy</a>
        <a href="#footer">Terms of Use</a>
        <a href="#footer">Contact Us</a>
      </div>

      <div className="footer-column">
        <h4>Stay Connected</h4>
        <div className="social-links">
          <a href="#footer" aria-label="Discord">◈</a>
          <a href="#footer" aria-label="Twitter">♥</a>
          <a href="#footer" aria-label="Instagram">◎</a>
          <a href="#footer" aria-label="YouTube">▶</a>
        </div>
      </div>

      <div className="copyright">
        <span>© 2026 EmotiCore. All rights reserved.</span>
        <span>Crafted with ❤️ by Team Emotion Raiders</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Engine />
        <Stats />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
