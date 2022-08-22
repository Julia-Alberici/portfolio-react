import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header-wrapper" id="home">
      <Navigation />
      <h1>Julia Alberici</h1>

      <h2>
        <i className="fa-solid fa-code"></i> Desenvolvedora Front-end{" "}
        <i className="fa-solid fa-code"></i>
      </h2>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/julia-alberici-787109237/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/Julia-Alberici"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </header>
  );
}
