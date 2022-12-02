import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px;
  margin: 0 auto;

  > div {
    padding-top: 10px;
    > p {
      font-size: 0.75rem;
      font-style: italic;
      text-align: justify;
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

    > a {
      text-align: center;
      color: yellow;

      border: 1px solid black;
      border-radius: 10px;
      width: 150px;
      padding: 8px 10px;
      background: blue;
    }
  }
`;
