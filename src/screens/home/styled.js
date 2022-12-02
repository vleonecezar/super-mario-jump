import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > ul {
    display: inline-block;
    list-style: none;

    > li {
      padding: 15px 0;
      text-align: center;

      > a {
        font-size: 1.1rem;
        color: black;
        font-weight: bold;
        transition: 0.3s;

        &:hover {
          color: red;
        }
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
