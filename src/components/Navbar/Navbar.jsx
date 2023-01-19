import { svgs } from "../Icon/index";

import "./Navbar.css";

export default function Navbar() {
  const color = "#A92360";
  const style = {
    color: color,
    width: "100%"
  };

  const icons = svgs.map((svg) => {
    return (
      <a href={svg.href} key={svg.href}>
        {svg.constructor({ style: style })}
      </a>
    );
  });

  return <nav className="navBar">{icons}</nav>;
}
