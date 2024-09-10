
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">My Project</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <a className="button" href="https://your-app-url.com" target="_blank" rel="noopener noreferrer">View App</a>
    </header>
  );
}

export default Header;
