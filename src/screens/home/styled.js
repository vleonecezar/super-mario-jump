import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  > ul {
    display: inline-block;
    list-style: none;
    margin: auto 0;

    > li {
      & + li {
        padding-top: 30px;
      }

      > a {
        display: block;
        color: yellow;
        width: 150px;
        padding: 8px 10px;
        text-align: center;

        border: 1px solid black;
        border-radius: 10px;
        background: blue;
      }
    }

    > li:nth-child(2) {
      pointer-events: none;

      > a {
        color: #666666;
      }
    }
  }
`;
