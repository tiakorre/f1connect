import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Schedule.css';

const Schedule = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/current.json');
        setRaces(response.data.MRData.RaceTable.Races);
      } catch (error) {
        console.error('Error fetching race schedule data:', error);
      }
    };

    fetchRaces();
  }, []);

  return (
    <div className="schedule-grid">
      {races.map(race => (
        <div key={race.round} className="race-card">
          <h3>{race.raceName}</h3>
          <p>{race.Circuit.circuitName}</p>
          <p>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
          <p>Date: {race.date}</p>
          <a href={race.url} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
