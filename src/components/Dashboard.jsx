import { data } from "../../data";
import { useGlobalContext } from "../Context";
import logo from "../assets/icon_Group 155.svg";
import logout from "../assets/logout.svg";
import { IoMdClose } from "react-icons/io";

export default function Dashboard() {
  const { show ,setShow} = useGlobalContext();
  console.log(show);
  return (
  
      <div
        className={`${
          show ? "dashboard-container active" : "dashboard-container"
        }`}
      >
        <header>
          <img src={logo} alt="logo" />
          <p>Sync</p>
          <IoMdClose className={`${show? '':'hidden'}`} onClick={() => setShow(false)} />
        </header>

        <div className="dashboard-mid">
          <main>
            {data.map(({ id, url, title }) => {
              return (
                <ul key={id} className="dashboard-content">
                  <li className="dash-cont">
                    <img src={url} alt="" />
                    <p>{title}</p>
                  </li>
                </ul>
              );
            })}
          </main>
        </div>

        <footer>
          <img src={logout} alt="logout" />
          <p>Log out</p>
        </footer>
      </div>
   
  );
}
