// import styled from "styled-components";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {MdOutlineKeyboardDoubleArrowUp} from 'react-icons/md'
import {MdOutlineKeyboardDoubleArrowDown} from 'react-icons/md'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {PiArrowCounterClockwiseBold} from 'react-icons/pi'
import {PiHashBold} from 'react-icons/pi'


const Counter = () =>{

    const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif
    }
    `;

    const PageContainer = styled.section`
        background-color: #c09dc8;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width: 320px;
        margin: 0;
        padding: 0;
    `;

    const Wrapper = styled.div`
        background-color: white;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        padding: 4em; 
        border-radius: 6px;
        text-align: center;

    `;

    const Head = styled.div`
        p {
            color: grey; 
        }  
        h1 {
            font-size: 32px; 
            color: blue; 
            font-weight: bold
        }  
    `;

     const ButtonContainer = styled.div`
        display: flex;
        gap: 10px; 
    `;
        
    const StyledButton = styled.button`
        background-color: #f5f5f5;
        border: 1px solid grey;
        padding: 22px 30px;
        font-size: 2em;
        border-radius: 5px;
        cursor: pointer;
        position: relative; 
        transition: transform 0.5s ease-in-out;
    
        &::before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: -50%;
        left: 50%;
        transform: translateX(-45%);
        opacity: 75;
        background-color: black;
        color: white;
        padding: 5px 8px;
        border-radius: 5px;
        font-size: 10px;
        white-space: nowrap;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.4s ease-in-out;   
        z-index: 2;
     
        }

        &:hover {
            transform: scale(1.1); 
          }

        &:hover::before {
            opacity: .75;
            font-weight: bold;
            visibility: visible;
            transform: translateX(-50%) translateY(-5px); 
            }
        }
    `;
  

    const [count, setCount] = useState(0)

    const resetCount = () =>{
        setCount(0)
    }

    const randomCount = () =>{
       const randomNumbers =  Math.floor(Math.random() * 100) + 1;
       setCount(randomNumbers)
    }
    return(
        <>
            <GlobalStyle /> 
            <PageContainer>

                <Wrapper>
                    <Head>
                        <p>Current value:</p>
                            <h1>{count}</h1>
                    </Head>

                    <ButtonContainer>
                        <StyledButton data-tooltip="Increment by 1" onClick={() => setCount(count + 1)}><MdOutlineKeyboardArrowUp /></StyledButton>
                        <StyledButton data-tooltip="Increment by 10" onClick={() => setCount(count + 10)}><MdOutlineKeyboardDoubleArrowUp /></StyledButton>
                        <StyledButton data-tooltip="Reset to 0" onClick={resetCount}><PiArrowCounterClockwiseBold /></StyledButton>
                        <StyledButton data-tooltip="Random number (1-100)" onClick={randomCount}><PiHashBold /></StyledButton>
                        <StyledButton data-tooltip="Decrement by 10" onClick={() => setCount(count - 10)}><MdOutlineKeyboardDoubleArrowDown /></StyledButton>
                        <StyledButton data-tooltip="Decrement by 1" onClick={() => setCount(count - 1)}><MdOutlineKeyboardArrowDown /></StyledButton>
                    </ButtonContainer>
                    
                </Wrapper>
            </PageContainer>

        </>
        
   
    )
}

export default Counter;