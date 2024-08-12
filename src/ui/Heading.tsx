import { NavLink } from "react-router-dom";

function Heading() {
  return (
    <NavLink
      to={"/"}
      className="text-xl lg:text-2xl md:xl font-serif font-bold"
    >
      Urban Crafts
    </NavLink>
  );
}

export default Heading;
