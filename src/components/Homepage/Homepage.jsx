import MoodSelector from "./MoodSelector";
import Navbar from "../Navbar/Navbar";

import VenerableButton from "./VenerableButton";

import "./Homepage.css";

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
      <VenerableButton />
      <MoodSelector />
      <Navbar />
    </>
  );
}
