import { NavContainer, NavWrapper, Menu, Nav } from './styled';
import ButtonToggle from '../ButtonToggle';
import { useState } from 'react';

function Navigation() {
  const [ toggle, setToggle ] = useState(false);
  return (
    <NavWrapper>
      <NavContainer>
        {/* <input type="checkbox" id="toggle" /> */}
        {/* <label for="toggle" className="checkbox"> */}
        <ButtonToggle onClick={() => setToggle(!toggle)} />
        {/* </label> */}
        <Menu>
          <Nav isOpened={toggle}>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </Nav>
        </Menu>
      </NavContainer>
    </NavWrapper>
  );
}

export default Navigation;
