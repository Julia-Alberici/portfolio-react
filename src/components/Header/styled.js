import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(-45deg, #FAA719, #D67613,#EB691E, #D43D11);
    background-size: 400% 400%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: transitionBackground 6s ease-in-out infinite;
    position: relative;
    box-sizing: border-box;
    z-index: 2;
`;