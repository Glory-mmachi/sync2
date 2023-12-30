import search from "../assets/search-normal.svg";
import notification from "../assets/notification.svg";
import navImage from "../assets/navImages.svg";
import ellipse from "../assets/Ellipse 19.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src={search} alt="search" className="navbar-search" />
        <input type="text" placeholder="Search by name or event" />
      </div>

      <div className="navbar-right">
        <div className="navbar-notification">
          <img src={notification} alt="notification" className="notify" />
          <img src={ellipse} alt="ellipse" className="nav-ellipse" />
        </div>
        <article>
          <img src={navImage} alt="navImage" />

          <p>Daystar Admin</p>
        </article>
      </div>
    </div>
  );
}
