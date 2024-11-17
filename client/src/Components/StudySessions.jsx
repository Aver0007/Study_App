// src/components/StudySessions.js
import React, { useState, useEffect } from 'react';
import { getStudySessions, addStudySession } from '../api';

const StudySessions = ({ token }) => {
  const [sessions, setSessions] = useState([]);
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await getStudySessions(token);
        setSessions(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };
    fetchSessions();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudySession(token, date, duration);
      const response = await getStudySessions(token);
      setSessions(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration in minutes" />
        <button type="submit">Add Session</button>
      </form>
      <ul>
        {sessions.map((session) => (
          <li key={session.id}>{session.date} - {session.duration} minutes</li>
        ))}
      </ul>
    </div>
  );
};

export default StudySessions;
