import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Teams.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/current/constructorStandings.json');
        setTeams(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
      } catch (error) {
        console.error('Error fetching constructor standings data:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="teams-grid">
      {teams.map(team => (
        <div key={team.Constructor.constructorId} className="team-card">
          <img src="/placeholder.png" alt={team.Constructor.name} className="team-logo" />
          <h3>{team.Constructor.name}</h3>
          <p>Nationality: {team.Constructor.nationality}</p>
          <p>Points: {team.points}</p>
          <p>Position: {team.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;

