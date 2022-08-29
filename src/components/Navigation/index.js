import { NavContainer, NavWrapper, Menu, Nav } from './styled';
import ButtonToggle from '../ButtonToggle';
import { useState } from 'react';

function Navigation() {
  const [ toggle, setToggle ] = useState(false);
  return (
    <NavWrapper>
        <ButtonToggle toggle={toggle} onClick={() => setToggle(!toggle)} />
        <Menu className={toggle ? 'opened' : 'closed'}>
          <Nav>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </Nav>
        </Menu>
    </NavWrapper>
  );
}

export default Navigation;
