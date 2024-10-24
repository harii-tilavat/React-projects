import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: "Tech Innovators Meetup",
    image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "25 Park Avenue, New York, NY",
    description: "Join us for a day of tech discussions and networking with top innovators.",
  },
  {
    id: 'm2',
    title: "Creative Minds Gathering",
    image: "https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "456 Art District, Los Angeles, CA",
    description: "A meetup for creative professionals to share ideas and inspiration.",
  },
  {
    id: 'm3',
    title: "Startup Founders Summit",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "789 Innovation Hub, San Francisco, CA",
    description: "Connect with fellow startup founders to exchange ideas and tips for success.",
  },
  {
    id: 'm4',
    title: "Health & Wellness Meetup",
    image: "https://images.pexels.com/photos/4056859/pexels-photo-4056859.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "321 Wellness Center, Austin, TX",
    description: "A gathering to discuss the latest trends in health, fitness, and mindfulness.",
  },
  {
    id: 'm5',
    title: "Photography Enthusiasts Meetup",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "99 Downtown Studio, Chicago, IL",
    description: "A meetup for photographers of all levels to share tips, tricks, and techniques.",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   // await new Promise((resolve) => setTimeout(resolve, 5000));
//   console.log("Context : ", context);
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
export default HomePage;
