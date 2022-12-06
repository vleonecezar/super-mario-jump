import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  animation: screenTransition 0.5s;

  > ul {
    display: inline-block;
    list-style: none;
    margin: auto 0;

    > li {
      & + li {
        padding-top: 30px;
      }
    }

    > li:nth-child(2) {
      pointer-events: none;

      > a {
        color: #666;
      }
    }
  }
`;
