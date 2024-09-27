import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    console.log("SET TIMEOUT. ");
    // console.log("TIMEOUT VALUE : ", timeOut);
    const timer = setTimeout(onTimeout, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeout]);

  useEffect(() => {
    console.log("SET INTERVAL. ");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeOut} className={mode} />;
}
