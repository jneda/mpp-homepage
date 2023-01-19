import "./Homepage.css";
import Navbar from "../Navbar/Navbar";

export default function App() {
  let path = "backgrounds/bg01.jpg";
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url(${path})`
        }}
      ></div>
      <Navbar />
    </>
  );
}
