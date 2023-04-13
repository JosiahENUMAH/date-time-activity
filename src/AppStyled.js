import styled from "styled-components";
import bg from "./assets/bg.jpg";

export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  @media screen and (max-width: 960px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    font-size: 22px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 1rem;

  @media screen and (max-width: 960px) {
    gap: 0.5rem;
    width: 100%;
  }
`;

export const Days = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Textarea = styled.textarea.attrs({
  rows: "3",
  placeholder: `What activities would you engage in?`,
})`
  width: 300px;
  border: 2px solid rgba(173, 201, 241, 0.9);
  padding: 0.5em;
  border-radius: 8px;
`;
export const Time = styled.input.attrs({ rows: "3", type: "time" })`
  border: 2px solid rgba(173, 201, 241, 0.9);
  width: 100px;
  cursor: pointer;
  padding: 0.5em;
  border-radius: 8px;
`;

export const Details = styled.details`
  border: 2px solid rgba(173, 201, 241, 0.9);
  border-radius: 8px;
  margin-bottom: 0.2rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

export const Summary = styled.summary`
  background-color: rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(173, 201, 241, 0.9);
  }
`;

export const Activity = styled.p`
  font-style: italic;
  font-size: 14px;
  padding-left: 0.3rem;
`;
