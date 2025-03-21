import React, { useState } from 'react';

const Card = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-xl p-4">{children}</div>
);

const CardContent = ({ children }) => <div className="p-4">{children}</div>;

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded-xl mt-2 w-full hover:bg-blue-600"
  >
    {children}
  </button>
);

const SpacedRepetitionScheduler = () => {
  const [topic, setTopic] = useState('');
  const [sessions, setSessions] = useState([]);

  const formatDateForGoogleCalendar = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const handleGenerate = () => {
    const now = new Date();
    const days = [1, 3, 7, 14, 30];
    const newSessions = days.map((day) => {
      const date = new Date(now);
      date.setDate(now.getDate() + day);
      return { day, date };
    });
    setSessions(newSessions);
  };

  const handleGoogleCalendar = () => {
    sessions.forEach((session) => {
      const startDate = formatDateForGoogleCalendar(session.date);
      const endDate = formatDateForGoogleCalendar(
        new Date(session.date.getTime() + 60 * 60 * 1000)
      );
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Review+${topic}&dates=${startDate}/${endDate}`;
      window.open(googleCalendarUrl, '_blank');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl">
        <CardContent>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter your topic"
            className="w-full p-2 mb-4 border rounded-xl"
          />
          <Button className="w-full mb-4" onClick={handleGenerate}>
            Generate Schedule
          </Button>
          {sessions.length > 0 && (
            <div className="space-y-2 mb-4">
              {sessions.map((session) => (
                <div
                  key={session.day}
                  className="p-2 bg-white rounded-xl shadow-sm"
                >
                  Review in {session.day} day(s): {session.date.toDateString()}
                </div>
              ))}
              <Button className="w-full" onClick={handleGoogleCalendar}>
                Add to Google Calendar
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SpacedRepetitionScheduler;
