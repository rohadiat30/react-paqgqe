import React, { useState, useEffect } from 'react';
import './style.css';
import { users } from './users.json';

/**
 * The goal for this mini project is to be able to filter the
 * content based on the information given in the table. You
 * should see a list of filters above the table and filter
 * the data. Since data is mocked, we would want to see the
 * filter to happen in the frontend side.
 *
 * Goals:
 * 1. Be able to filter the data based on the company's email
 *    & also based on the race
 *    eg. @google && Filipino = Jeniffer Binley
 * 2. Be able to click on the specific item on the table and
 *    apply the filter on the filters above
 * 3. Preserved the filters upon refreshing the page
 *    (top right)
 */

export default function App() {
  const [searchCompany, setSearchCompany] = useState();
  const [searchRace, setSearchRace] = useState('');
  const [raceResult, setRaceResult] = useState(users);

  const searchRaceItem = (value) => {
    setSearchRace(value);
    if (searchRace === users.race) {
      const raceFiltered = users.filter((item) => {
        return item.race.toLowerCase().includes(searchRace.toLowerCase());
      });
      setRaceResult(raceFiltered);
    } else {
      setRaceResult(users);
    }
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Company"
          onChange={(e) => e.target.value}
        />
        <input
          type="text"
          placeholder="Race"
          onChange={(e) => searchRaceItem(e.target.value)}
        />
        <button type="submit">Search</button>
        <button>Reset</button>
      </form>
      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Race</td>
          </tr>
          {raceResult.map((user) => {
            const { email, first_name, last_name, race, id } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{`${first_name} ${last_name}`}</td>
                <td>{email}</td>
                <td>{race}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
