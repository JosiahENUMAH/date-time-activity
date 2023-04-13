import React, { useState } from "react";
import {
  Container,
  Title,
  Content,
  Days,
  Textarea,
  Details,
  Summary,
  Time,
  Activity,
} from "./AppStyled";

function App() {
  const [data, setData] = useState([
    { day: "Sunday", value: "", from: "", to: "" },
    { day: "Monday", value: "", from: "", to: "" },
    { day: "Tuesday", value: "", from: "", to: "" },
    { day: "Wednesday", value: "", from: "", to: "" },
    { day: "Thursday", value: "", from: "", to: "" },
    { day: "Friday", value: "", from: "", to: "" },
    { day: "Saturday", value: "", from: "", to: "" },
  ]);

  const handleActivityChange = (e, index) => {
    const newData = [...data];
    newData[index].value = e.target.value;
    setData(newData);
  };
  const handleFromChange = (e, index) => {
    const fromData = [...data];
    fromData[index].from = e.target.value;
    setData(fromData);
  };
  const handleToChange = (e, index) => {
    const toData = [...data];
    toData[index].to = e.target.value;
    setData(toData);
  };
  return (
    <Container>
      <Title>Paul's availability for the next 7 days.</Title>
      <Content>
        {data.map((day, index) => {
          return (
            <Details key={index}>
              <Summary>
                <p>
                  {day.day}
                  {day.from || day.to || day.value ? ":-" : null}
                </p>
                <Activity> {day.value && ` ${day?.value}`}</Activity>
                <Activity> {day.from && `~~~ From: ${day?.from}`}</Activity>
                <Activity> {day.to && `~~~ To: ${day?.to}`}</Activity>
              </Summary>
              <Days>
                <p>
                  <Textarea
                    value={day.value}
                    onChange={(e) => handleActivityChange(e, index)}
                  />
                </p>
                <p>
                  <label htmlFor="from">From: </label>
                  <Time
                    id="from"
                    value={day.from}
                    onChange={(e) => handleFromChange(e, index)}
                  />
                </p>
                <p>
                  <label htmlFor="to">To: </label>{" "}
                  <Time
                    id="to"
                    value={day.to}
                    onChange={(e) => handleToChange(e, index)}
                  />
                </p>
              </Days>
            </Details>
          );
        })}
      </Content>
    </Container>
  );
}

export default App;
