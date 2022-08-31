import styled from "styled-components";

export const BtnMenu = styled.button`
    background: none;
    border: none;
    height: 50px;
    width: 100px;
    position: fixed;
    top:10px;
    right: 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
    z-index: 999;
    transition: all .4s ease-in-out;

    span{
        width: 35px;
        height: 3px;
        background-color: #000;
        position:absolute;
        border-radius: 5px;
        transition: top .4s ease, transform .2s ease;
    }
    span:nth-child(1){
        top: 10px;
    }
    span:nth-child(2){
        top: 20px;
    }
    span:nth-child(3){
        top: 30px;
    }

    &.toggled span:nth-child(1){
    transform: rotate(45deg);
    top:20px;
    }
    &.toggled span:nth-child(2){
    transform:translateX(30px);
    opacity: 0;
    width: 5px;
    }
    &.toggled span:nth-child(3){
    transform: rotate(-45deg);
    top: 20px;
    }
    @media(min-width: 1024px){
        display:none;
    }
`;

