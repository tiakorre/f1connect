import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Drivers.css';

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.json');
        setDrivers(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      } catch (error) {
        console.error('Error fetching driver data:', error);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <div className="drivers-grid">
      {drivers.map(driver => (
        <div key={driver.Driver.driverId} className="driver-card">
          <img src="/placeholder.jpg" alt={`${driver.Driver.givenName} ${driver.Driver.familyName}`} className="driver-photo" />
          <h3>{driver.Driver.givenName} {driver.Driver.familyName}</h3>
          <p>Team: {driver.Constructors[0].name}</p>
          <p>Points: {driver.points}</p>
          <p>Ranking: {driver.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Drivers;

