import React, { useState } from "react";
import TeamMembers from "./TeamMembers/TeamMembers";
import styles from "./draganddrop.module.scss";

const teamsData = {
  "Team-1": [
    { id: "naruto", name: "Naruto", teamId: "Team-1" },
    { id: "kakashi", name: "Kakashi", teamId: "Team-1" },
    { id: "sakura", name: "Sakura", teamId: "Team-1" },
    { id: "hinata", name: "Hinata", teamId: "Team-1" },
    { id: "sasuke", name: "Sasuke", teamId: "Team-1" },
  ],
  "Team-2": [
    { id: "itachi", name: "Itachi", teamId: "Team-2" },
    { id: "madara", name: "Madara", teamId: "Team-2" },
    { id: "hashirama", name: "Hashirama", teamId: "Team-2" },
    { id: "might", name: "Might Guy", teamId: "Team-2" },
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
        <h2>Drag And Drop</h2>
      </header>
      <main>
        <TeamMembers
          teamId="Team-1"
          members={teams["Team-1"]}
          onDrop={onDrop}
          color="#be5b9e"
          bgColor="#e9c8df"
        />
        <TeamMembers
          teamId="Team-2"
          members={teams["Team-2"]}
          onDrop={onDrop}
          color="#57c1db"
          bgColor="#d5eff6"
        />
      </main>
      <p></p>
    </div>
  );
}

export default DragAndDrop;
