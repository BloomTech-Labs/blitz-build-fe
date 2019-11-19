import React from "react";
import styled from "styled-components";

import Task from "./Task";

function TaskCard() {
  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <p>View All</p>
      </Section>
      <Card>
        <Task
          status="Urgent"
          address={"1640 Riverside Drive"}
          current={"3 days past due"}
          type={"Building Inspection"}
        />
        <Task
          status="Overdue"
          address={"12 Grimmauld Place"}
          current={"3 days past due"}
          type={"Building Inspection"}
        />
        <Task
          status="Pending"
          address={"Apartment 5A, 129 West"}
          current={"3 days past due"}
          type={"Building Inspection"}
        />
      </Card>
    </Container>
  );
}

export default TaskCard;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-family: "Roboto";
    font-size: 16px;
    line-height: 19px;
    color: #8a827d;
    font-weight: 500;
  }
`;

const Container = styled.div`
  margin-bottom: 48px;
`;

const Card = styled.div`
  border: 1px solid #dcd9d5;
`;
