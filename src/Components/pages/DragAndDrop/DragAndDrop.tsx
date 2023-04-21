import React, { useState } from "react";
import TeamMembers from "./TeamMembers/TeamMembers";
import styles from "./draganddrop.module.scss";

const teamsData = {
  "team-1": [
    {
      id: "naruto",
      name: "Naruto",
      teamId: "team-1",
    },
    {
      id: "kakashi",
      name: "Kakashi",
      teamId: "team-1",
    },
    {
      id: "sakura",
      name: "Sakura",
      teamId: "team-1",
    },
    {
      id: "hinata",
      name: "Hinata",
      teamId: "team-1",
    },
    {
      id: "sasuke",
      name: "Sasuke",
      teamId: "team-1",
    },
  ],

  "team-2": [
    {
      id: "itachi",
      name: "Itachi",
      teamId: "team-2",
    },
    {
      id: "madara",
      name: "Madara",
      teamId: "team-2",
    },
    {
      id: "hashirama",
      name: "Hashirama",
      teamId: "team-2",
    },
    {
      id: "might",
      name: "Might Guy",
      teamId: "team-2",
    },
  ],
};
function DragAndDrop() {
  const [teams, setTeams] = useState(teamsData);

  const onDrop = (member: any, newTeamId: any) => {
    const fromTeamId = member.teamId;
    if (fromTeamId === newTeamId) {
      return;
    }
    const updatedTeams: any = { ...teams };
    // remove fromTeamId
    updatedTeams[fromTeamId] = updatedTeams[fromTeamId].filter(
      (m: any) => m.id != member.id
    );
    // add to newTeam
    member.teamId = newTeamId;
    updatedTeams[newTeamId].push(member);
    setTeams(updatedTeams);
  };

  return (
    <div className={styles.DragAndDropAlignment}>
      <header className={styles.header}>
        <h1>Drag And Drop</h1>
      </header>
      <main>
        <TeamMembers
          teamId="team-1"
          members={teams["team-1"]}
          onDrop={onDrop}
        />
        <TeamMembers
          teamId="team-2"
          members={teams["team-2"]}
          onDrop={onDrop}
        />
      </main>
      <p></p>
    </div>
  );
}

export default DragAndDrop;
