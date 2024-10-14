import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "1", title: "Tech Innovations Conference 2024" },
  { id: "2", title: "Annual Marketing Summit" },
  { id: "3", title: "Global Health & Wellness Expo" },
  { id: "4", title: "Startup Pitch Fest" },
  { id: "5", title: "AI and Robotics Workshop" },
  { id: "6", title: "Music & Arts Festival" },
  { id: "7", title: "Sustainability and Green Tech Expo" },
  { id: "8", title: "E-commerce Growth Strategies Summit" },
  { id: "9", title: "Blockchain & FinTech Expo" },
  { id: "10", title: "Digital Transformation Forum" },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage works!</h1>
      <ul>
        {DUMMY_EVENTS.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
