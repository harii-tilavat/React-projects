import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetailPage = (props) => {
  // console.log("MEETUP : ", props.meetup);
  return <MeetupDetail {...props.meetup} />;
};

export default MeetupDetailPage;
export function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  console.log("Context : ", context);
  const meetupId = context.params.meetupId;
  const initMeetup = {
    id: "m1",
    title: "Tech Innovators Meetup",
    image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "25 Park Avenue, New York, NY",
    description: "Join us for a day of tech discussions and networking with top innovators.",
  };
  return {
    props: {
      meetup: initMeetup,
    },
  };
}
