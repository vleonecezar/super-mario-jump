import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px;
  margin: 0 auto;

  animation: screenTransition 0.5s;

  > div {
    padding-top: 10px;
    > p {
      font-size: 0.735rem;
      font-style: italic;
      text-align: justify;
      color: #000;
      font-weight: bolder;
      padding: 0 20px;

      :last-child {
        padding-top: 20px;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
`;
