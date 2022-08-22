function Navigation() {
  return (
    <div className="nav-wrapper">
      <div className="checkbox-container">
        {/* <input type="checkbox" id="toggle" /> */}
        {/* <label for="toggle" className="checkbox"> */}
        <button className="btn-menu">
          <span className="trace"></span>
          <span className="trace"></span>
          <span className="trace"></span>
        </button>
        {/* </label> */}
        <div className="menu">
          <nav className="menu-itens">
            <ul>
              <li>
                <a href="#home">
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
