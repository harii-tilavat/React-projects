import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.jsx";
// import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const submit = useSubmit();
  const params = useParams();
  const { data, isError, error } = useQuery({
    queryKey: ["events", params["id"]],
    queryFn: ({ signal }) => fetchEvent({ id: params["id"], signal }),
    staleTime: 10000,
  });

  // ------------------- Form editing using mutation --------------------------
  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newEvent = data.event;
  //     await queryClient.cancelQueries({ queryKey: ["events", params.id] });
  //     const previousEvent = queryClient.getQueryData(["events", params.id]);
  //     queryClient.setQueryData(["events", params.id], newEvent);
  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", params.id], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.cancelQueries({ queryKey: ["events", params.id] });
  //   },
  // });
  console.log("DATA :", data);
  function handleSubmit(formData) {
    submit(formData, { method: "PUT" });
    // mutate({ id: params["id"], event: formData });
    // navigate("../");
  }

  function handleClose() {
    navigate("../");
  }
  let content;
  // if (isPending) {
  //   content = (
  //     <div className="center">
  //       <LoadingIndicator />
  //     </div>
  //   );
  // }
  if (isError) {
    content = (
      <div className="center">
        <ErrorBlock message={error.info?.message || "Failed to fetch event."} />
      </div>
    );
  }
  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {navigation.state === "submitting" ? (
          <p>Submitting</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>{" "}
          </>
        )}
      </EventForm>
    );
  }
  return <Modal onClose={handleClose}>{content}</Modal>;
}
export async function editEventLoader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", params["id"]],
    queryFn: ({ signal }) => fetchEvent({ id: params["id"], signal }),
  });
}
export async function editEventAction({ request, params }) {
  const fd = await request.formData();
  const updatedEvent = Object.fromEntries(fd);
  await updateEvent({ id: params["id"], event: updatedEvent });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
