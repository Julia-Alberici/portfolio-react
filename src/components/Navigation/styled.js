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

export const Menu = styled.div`
    position: fixed;
    top:70px;
    height: 0;
    width: 100%;
    border-radius:0 0 10px 10px;
    background-color: #000;
    transition: height .4s ease;

    &.opened{
        z-index:1;
        background-color: #000;
        height:100%;

        Nav{
            height: auto;

            li a{
                height: 100px;
                border-bottom: 1px solid #ae3118;
            }
        }
    }
    @media(min-width: 1024px){
        position: static;
        &.opened{
            z-index:unset;
            background-color: unset;
            height:unset;
            Nav{
            height: unset;

            li a{
                height: unset;
                border-bottom: unset;
            }
        }
        }
        
        Nav{
            height: 70px;
            position: absolute;
            top: 0;
            right: 0;

            ul{
                display: flex;
                gap: 20px;
                li a{
                    height: 50px;
                    line-height: unset;
                    font-weight: bold;
                } 
            } 
        }
    }
`;
export const Nav = styled.nav`
    height: 0;
    z-index:2;

    ul{
        list-style: none;
        padding: 0;
        margin: 20px 20px 0;
        transition: height .8s  ease;
        overflow: hidden;

        li a{
            text-decoration: none;
            color: #FAA719;
            font-size: 1.2em;
            display:block;
            letter-spacing: 5px;
            line-height: 90px;
            padding: 10px;
            text-transform: uppercase;
            height: 0;
            overflow:hidden;
            transition: height .4s  ease;
        }
    }
`;