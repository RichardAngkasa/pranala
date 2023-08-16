import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/limas">LIMAS</Link>
      <br />
      <Link to="/form">Form</Link>
    </>
  );
}

export default Home;
