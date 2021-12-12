import Banner from "../Banner";
import requests from "../requests";
import BackdropRow from "../BackdropRow";
import Nav from "../Components/Nav";
import "./Styling/Home.css";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Banner />

      <BackdropRow title="Comedy" fetchUrl={requests.fetchComedy} />

      <BackdropRow title="Action" fetchUrl={requests.fetchAction} />

      <BackdropRow title="Drama" fetchUrl={requests.fetchDrama} />

      <BackdropRow title="Thriller" fetchUrl={requests.fetchThriller} />

      <BackdropRow title="Adventure" fetchUrl={requests.fetchAdventure} />

      <BackdropRow
        title="Science Fiction"
        fetchUrl={requests.fetchScienceFiction}
      />
    </div>
  );
}

export default Home;
