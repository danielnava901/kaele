import React from "react";
import styled from "styled-components";


const QuoteWrapper = styled.div`
  background-image: url("/photos/flores1.jpeg");
  background-size: cover;
  background-position: center;
  width: 100%;
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  margin: 20px auto;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const QuoteText = styled.p`
  font-size: 2rem;
  text-align: center;
  color: #292929;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #777;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

function Quote({ text, author }) {
    return (
        <QuoteWrapper>
            <QuoteContainer>
                <QuoteText>{text}</QuoteText>
                <QuoteAuthor>- {author}</QuoteAuthor>
            </QuoteContainer>
        </QuoteWrapper>
    );
}

export default Quote;
