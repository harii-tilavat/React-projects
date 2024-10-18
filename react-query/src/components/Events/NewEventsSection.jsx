import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.jsx";

export default function NewEventsSection() {
  const queryObj = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime: 5000, // Wait for 5 second and then it will send request again.
    // gcTime: 1000 // After this seconds cached data will be discarded and send this request again. 
  });
  console.log("QUERY OBJ : ", queryObj);
  let content;

  if (queryObj.isPending) {
    content = <LoadingIndicator />;
  }

  if (queryObj.error) {
    content = <ErrorBlock title="An error occurred" message="Failed to fetch events" />;
  }

  if (queryObj.data) {
    content = (
      <ul className="events-list">
        {queryObj.data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
