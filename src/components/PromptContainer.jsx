import React, { useState } from 'react';
import styled from 'styled-components';

import ResponseCard from 'components/ResponseCard';
import api from 'api/openapi';
import emoji from 'api/emoji';




const PromptContainer = () => {
  const [ textprompt, setTextPrompt ] = useState('');

  const [ responses, setResponses ] = useState([
    { id: 1, textprompt: 'here is the prompt', response: 'here is the response' },
    { id: 2, textprompt: 'here is the prompt', response: 'here is the response' }
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const lastItem = responses[responses.length - 1];


    async function sendAPI(bookTitle){
      try {

        const response = await api.createCompletion("text-davinci-002", {
          prompt: "return an emoji for the book title : \n" + bookTitle + "\n",
        });

        if (response.data.choices.length > 0) setResponses(prev => {
          return [
            ...prev, 
            {
              id: lastItem.id + 1, 
              textprompt, 
              response: emoji.replace_colons(response.data.choices[0].text.replace("\n", ""))
            }
          ];
        });

        setTextPrompt('');
        // setLatestData(response);

        console.log(response);
        return response;

      } catch (err) {
        console.log(err);
      }
    }

    sendAPI(textprompt);


  }

  const handleChange = (event) => {
    setTextPrompt(event.target.value);
  }

  return (
    <Container>
      <h1>Fun with AI</h1>

      <form onSubmit={handleSubmit}>
        <label><h2>Enter Prompt</h2></label>
        <textarea onChange={handleChange} rows="10" value={textprompt} />
        <button type="submit" className="ui blue button submit">Submit</button>
      </form>

      <h2>Responses</h2>

      <div className="card-container">
        { responses.map(({ textprompt, response, id }) => (
          <ResponseCard key={id} textprompt={textprompt} response={response} />
        )) }
      </div>

    </Container>
  );

}



const Container = styled.div`
  padding: 2rem;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;

  form {
    label { text-align: left; font-size: 18px; }
    textarea { margin-top: 20px; padding: 15px; border-radius: 10px; }
    display: flex;
    flex-direction: column;
  }

  h2 { text-align: left; }

  .submit {
    margin-top: 20px;
    margin-left: auto;
    height: 40px;
    width: 120px;
  }


`;


export default PromptContainer;

