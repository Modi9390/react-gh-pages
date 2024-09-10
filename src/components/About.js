
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About the Project</h2>
      <p>
      The inspiration for StyleSphere-Fashion came from my personal <br />
      experience of feeling overwhelmed and frustrated with the online<br />
      shopping process. As someone who loves fashion but struggled to find a<br />
      platform that catered to both my unique style and my desire for a seamless<br />
      shopping experience, I realized there was a gap in the market for an online<br />
      store that combines style, simplicity, and personalization.
        It is also a portfolio project for <a href="https://www.holbertonschool.com" target="_blank" rel="noopener noreferrer">Holberton School</a>.
      </p>

      <div className="links">
        <a href="https://github.com/modibokeita" target="_blank" rel="noopener noreferrer">My GitHub</a>
        <a href="https://www.linkedin.com/in/modibo-keita/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
        <a href="https://x.com/ModiboK72064944" target="_blank" rel="noopener noreferrer">My Twitter</a>
      </div>
    </section>
  );
}

export default About;
