import React, { createRef } from 'react';
import styled from 'styled-components';
import LogoAnimation from 'components/LogoAnimation';
import PromptContainer from 'components/PromptContainer';


function App() {
  const ref = createRef();


  const executeScroll = () => ref.current.scrollIntoView();

  return (
    <Container>
      <header className="App-header">
        <LogoAnimation />
        <h1>Fun with AI</h1>
        <button><i className="angle down icon" onClick={() => executeScroll()}></i></button>
      </header>
      <div className="section2" ref={ref}>
        <PromptContainer />
      </div>
    </Container>
  );
}


const Container = styled.div`
  text-align: center;

  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }


  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  button {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: inherit;
    border: none;
    color: white;
    font-size: 90px;
    i {
      cursor: pointer;
      transition: font-size 0.4s ease;

      &:hover {
         font-size: 120px;
      }
    }
  }

  .section2 {
    height: 100vh;
    width: 100%;
  }


`;


export default App;

