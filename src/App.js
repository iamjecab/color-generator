import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
     
    }
`;

function App() {
    const [color, setSolor] = useState(`30,30,30`);
    const [notification, setNotification] = useState(false);
    const changeColor = () => {
        const getColor = () => {
            return Math.floor(Math.random() * 255);
        };
        setSolor(`${getColor()},${getColor()},${getColor()}`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setNotification(false);
            return () => {
                window.clearInterval(interval);
            };
        }, 3000);
    }, [notification]);

    return (
        <>
            <GlobalStyles />
            <AppContainer bgColor={color}>
                <BtnContainer>
                    <Btn onClick={changeColor}>change color</Btn>
                </BtnContainer>
                <Color
                    onClick={() => {
                        navigator.clipboard.writeText(color);
                        setNotification(true);
                    }}
                >
                    RBG Value: {color}
                </Color>
                {notification && (
                    <Notification>Copied To Clipboard</Notification>
                )}
            </AppContainer>
        </>
    );
}

export default App;

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(${({ bgColor }) => bgColor});
`;

const BtnContainer = styled.div`
    padding: 1rem;
`;

const Btn = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    text-transform: capitalize;
`;

const Color = styled.h3`
    cursor: pointer;
`;

const Notification = styled.p``;
