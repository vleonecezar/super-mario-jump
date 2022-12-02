import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  > div {
    padding: 10px 0;
    > p {
      font-size: 0.75rem;
      font-style: italic;
      text-align: justify;
      padding: 0 10px;

      :last-child {
        padding-top: 20px;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: center;

    > a {
      text-align: center;
      margin-top: 20px;
      color: yellow;

      border: 1px solid black;
      border-radius: 10px;
      padding: 5px 10px;
      background: blue;
    }
  }
`;
