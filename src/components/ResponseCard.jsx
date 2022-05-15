import React from 'react';
import styled from 'styled-components';


const ResponseCard = ({ textprompt, response }) => {
  return (
    <Container>
      <div className="row">
        <p className="left">Prompt:</p>
        <p className="right">{ textprompt }</p>
      </div>
      <div className="row">
        <p className="left">Response:</p>
        <p className="right">{ response }</p>
      </div>
    </Container>
  );
}


const Container = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  width: 100%;
  background-color: #DADADA;
  color: black;
  border-radius: 10px; border: solid 1px black;

  font-weight: 800;

  .row {
    display: flex;
    justify-content: space-between;

    .left { text-align: left; width: 20%; }
    .right { text-align: left; width: 80%; }

  }

`;


export default ResponseCard;

