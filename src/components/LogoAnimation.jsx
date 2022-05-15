import React from 'react';
import styled from 'styled-components';
import logo from 'logo.svg';


const LogoAnimation = () => {
  return (
    <Container>
      <div className="App-logo">
         <img src={logo} className="App-logo" alt="logo" />
      </div>
    </Container>
  );
}


const Container = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`;




export default LogoAnimation;

