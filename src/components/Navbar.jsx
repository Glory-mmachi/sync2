import search from "../assets/search-normal.svg";
import notification from "../assets/notification.svg";
import navImage from "../assets/navImages.svg";
import ellipse from "../assets/Ellipse 19.svg";
import { CiMenuBurger } from "react-icons/ci";
import { useGlobalContext } from "../Context";
export default function Navbar() {
  const { setShow} = useGlobalContext();
  return (
    <div className="navbar-container">
      <CiMenuBurger
        className='menu'
        onClick={() => setShow(true)}
      />
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
