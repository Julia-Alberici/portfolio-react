import styled from "styled-components";

export const NavWrapper = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background: linear-gradient(-45deg, #FAA719, #D67613,#EB691E, #D43D11);
    background-size: 400% 400%;
    animation: transitionBackground 6s ease-in-out infinite;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menu = styled.div`
    position: fixed;
    top:70px;
    right:30px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: 0px 0px 0px 0px transparent;
    z-index:-1;
    transition: all .4s ease-in-out;

`;
export const Nav = styled.nav`
    position: absolute;
    top: 0; 
    right: 0;
    opacity: ${props => (props.isOpened ? '1' : '0')};
    z-index:2;
    transition: all .4s ease-in-out;

    ul{
        list-style: none;
        padding: 0;

        li a{
            text-decoration: none;
            color: #FAA719;
            font-size: 2em;
            letter-spacing: 6px;
            line-height: 80px;
            padding: 10px;
            text-transform: uppercase;
        }
    }
`;