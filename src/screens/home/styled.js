import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > ul {
    display: inline-block;
    list-style: none;

    > li {
      padding: 15px 0;

      > a {
        display: block;
        color: yellow;
        width: 150px;
        padding: 5px 10px;
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
