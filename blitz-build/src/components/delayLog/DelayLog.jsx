import React, { useState,useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Global from "../../styles/Global";

import DelayLogCard from "./DelayLogCard";

const delayLogDummyData = [
  // {
  //   projectId: "orc",
  //   projectName: "orc",
  //   reason: "i don't know",
  //   taskId: "-LtkXMRfFmz3tdS9U34Z",
  //   taskName: "finish the flooring",
  //   timestamp: "November 15, 2019 11:36 AM",
  //   uid: "R3fE6DP3UgP8hQSWbGubsHb7lOw2",
  //   username: "joe@smith.com"
  // },
  // {
  //   projectId: "orc2",
  //   projectName: "orc2",
  //   reason: "i don't know",
  //   taskId: "-LtkXMRfFmz3tdS9U34Z",
  //   taskName: "finish painting",
  //   timestamp: "November 15, 2019 11:36 AM",
  //   uid: "R3fE6DP3UgP8hQSWbGubsHb7lOw2",
  //   username: "joe@smith.com"
  // }
];

const DelayLogTop = styled.div`
  width: 1144px;
  height: 96px;
  margin-left: 296px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;
const DelayLogContent = styled.div`
  position: absolute;

  width: 1144px;
  height: 1478px;
  left: 296px;
  top: 96px;

  /* 200 Gray */

  background: #ebe9e7;
`;
const DelayLogButton = styled.div`
  position: absolute;
  width: 151px;
  height: 48px;
  left: 1257px;
  top: 24px;
  border: 1px solid #dd6b20;
  box-sizing: border-box;
  border-radius: 3px;
  padding-top: 14px;
  padding-left: 30px;
  font-size: 16px;
  font-family: Roboto;
`;
const DelayLogListText = styled.p`
  width: 161px;
  height: 19px;
  margin-top: 32px;
  margin-left: 32px;
  font-family: Roboto;
  font-size: 16px;

  /* 400 Gray */

  color: #8a827d;
`;
const DelayLogTableTitles = styled.p`
  width: 1080px;
  height: 51px;
  margin-top: 8px;
  margin-left: 32px;

  /* 000 White */

  background: #ffffff;
  border-radius: 3px;
  display: flex;
`;
const TitlesTask = styled.p`
  width: 223px;
  height: 19px;
  padding-top: 16px;
  margin-left: 32px;
  font-family: Roboto;

  font-size: 16px;

  /* 600 Orange */

  color: #dd6b20;
`;
const TitlesReason = styled.p`
  width: 500px;
  height: 19px;
  padding-top: 16px;
  margin-left: 50px;
  font-family: Roboto;

  font-size: 16px;

  /* 600 Orange */

  color: #dd6b20;
`;
const TitlesCreatedTime = styled.p`
  width: 210px;
  height: 19px;
  padding-top: 16px;
  margin-left: 50px;
  font-family: Roboto;

  font-size: 16px;

  /* 600 Orange */

  color: #dd6b20;
`;
const DelayLogGrey = styled.div`
  width: 1080px;
  height: 100px;
  margin-left: 32px;

  /* 100 Gray */

  background: #fbfaf9;
  border-radius: 3px;
`;
const DelayLogWhite = styled.div`
  width: 1080px;
  height: 100px;
  margin-left: 32px;

  /* 000 White */

  background: #ffffff;
  border-radius: 3px;
`;
function DelayLog() {
  const [delayLogs, setDelayLogs] = useState([]);
  useEffect(() => {
  axios
    .get(`https://api-blitz-build-dev.herokuapp.com/api/auth/${localStorage.getItem("uid")}/delay_logs`)
    .then(res => {
      console.log(res)
      
    })
    .catch(err => {
      console.log(err);
    });
  }, [])
  
  function getDelayLogs() {
    
    if (delayLogs.length === 0) {
      return <DelayLogGrey>You do not have DelayLog</DelayLogGrey>;
    } else {
      return delayLogs.map(data => {
        return (
          <DelayLogGrey>
            <DelayLogCard data={data} />
          </DelayLogGrey>
        );
      });
    }
  }
  return (
    <div>
      <Global />
      <DelayLogTop>
        <DelayLogButton>Export to CSV</DelayLogButton>
      </DelayLogTop>
      <DelayLogContent>
        <DelayLogListText>Your DelayLog List</DelayLogListText>
        <DelayLogTableTitles>
          <TitlesTask>Task</TitlesTask>
          <TitlesReason>Reason for Delay</TitlesReason>
          <TitlesCreatedTime>Created</TitlesCreatedTime>
        </DelayLogTableTitles>
        {getDelayLogs()}
         
      </DelayLogContent>
    </div>
  );
}

export default DelayLog;
