import "./topbar.scss";
import { Person } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          ET.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+855 968 070 983</span>
          </div>
          {/* <div className="itemContainer">
            <Mail className="icon" />
            <span>safak@genius.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
