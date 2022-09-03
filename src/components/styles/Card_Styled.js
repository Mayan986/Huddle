import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};

  img {
    width: 80%;
    margin: 20px;
    @media (max-width: ${({ theme }) => theme.smmobile}) {
      width: 100%;
      margin: 0px;
    }
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.smmobile}) {
    flex-direction: column;
    padding: 20px;
  }
`;
