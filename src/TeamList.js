import React from "react";
import data from "./CollegeBasketballTeam.json"; // Importing JSON data
import TeamCard from "./TeamCard"; // Importing TeamCard component

const TeamList = () => {
  // Access the 'teams' property to get the array of team objects
  const teamData = data.teams;

  return (
    <div className="team-list">
      {teamData.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          mascot={team.name}
          location={`${team.city}, ${team.state}`}
        />
      ))}
    </div>
  );
};

export default TeamList;
